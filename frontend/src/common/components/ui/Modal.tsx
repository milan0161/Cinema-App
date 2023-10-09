import ReactDOM from 'react-dom';

type BackdropProps = {
  onClick: () => void;
};

type ModalOverlayProps = {
  children: React.ReactNode;
  className: string;
};

type ModalProps = {
  onClickBackdrop: () => void;
  children?: React.ReactNode;
  className: string;
};
const Backdrop = ({ onClick }: BackdropProps) => {
  return (
    <div
      onClick={onClick}
      className="fixed top-0 left-0 w-full h-screen z-20 bg-black opacity-80"
    />
  );
};

const ModalOverlay = ({ children, className }: ModalOverlayProps) => {
  return <div className={className}>{children}</div>;
};

const Modal = ({ className, onClickBackdrop, children }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClickBackdrop} />,
        document.getElementById('backdrop-root') as HTMLDivElement,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay children={children} className={className} />,
        document.getElementById('overlay-root') as HTMLDivElement,
      )}
    </>
  );
};

export default Modal;
