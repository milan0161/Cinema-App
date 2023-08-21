import { Outlet } from 'react-router-dom';
import AdminNav from '../../../common/components/admin/AdminNav';

const AdminRoot = () => {
  return (
    <section className="rounded flex flex-row border border-white mx-10 h-[75vh]">
      <AdminNav />
      <Outlet />
    </section>
  );
};

export default AdminRoot;
