type BackdropProps = {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const Backdrop = ({ onClick }: BackdropProps) => {
  return <div onClick={() => onClick(false)} className="fixed top-0 left-0 w-full h-screen z-10 bg-black opacity-80" />;
};

export default Backdrop;
