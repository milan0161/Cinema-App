import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdminAuth from '../hooks/useAdminAuth';

const AdminGuard = () => {
  const isAdmin = useAdminAuth();
  const location = useLocation();
  if (!isAdmin) return <Navigate to={'/'} state={{ from: location }} replace />;
  return <Outlet />;
};

export default AdminGuard;
