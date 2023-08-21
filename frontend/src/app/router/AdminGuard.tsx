import { Navigate, Outlet } from 'react-router-dom';
import useAdminAuth from '../hooks/useAdminAuth';

const AdminGuard = () => {
  const isAdmin = useAdminAuth();
  if (!isAdmin) return <Navigate to={'/'} />;
  return <Outlet />;
};

export default AdminGuard;
