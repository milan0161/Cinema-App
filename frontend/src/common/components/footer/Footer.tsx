import HorizontalLine from '../ui/HorizontalLine';
import FooterContent from './FooterContent';
import FooterReference from './FooterReference';

const Footer = () => {
  return (
    <footer className="bg-slate-950 w-[100%] flex flex-col rounded-sm footer_shadow">
      <FooterContent />
      <HorizontalLine />
      <FooterReference />
    </footer>
  );
};

export default Footer;
