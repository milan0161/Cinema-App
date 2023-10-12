import { Outlet } from 'react-router-dom';
import AdminNav from '../../../common/components/admin/AdminNav';

const AdminRoot = () => {
  return (
    <section className="rounded flex flex-row border border-white h-[75vh] min-h-[100svh] w-full mt-10">
      <AdminNav />
      <Outlet />
    </section>
  );
};

export default AdminRoot;
