import { MenuItem } from '@mui/material';
type DropMenuItemProps = {
  handleClose: () => void;
  text: string;
};
const DropMenuItem = ({ handleClose, text }: DropMenuItemProps) => {
  return <MenuItem onClick={handleClose}>{text}</MenuItem>;
};

export default DropMenuItem;
