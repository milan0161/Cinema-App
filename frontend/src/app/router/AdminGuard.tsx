import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getAToken } from '../utils/saveToken';
import { decodedAToken } from '../utils/decodeToken';

const AdminGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAToken();
    if (token) {
      const data = decodedAToken(token);
      if (data?.role !== 'Admin') {
        navigate('/');
      }
    }
  }, []);

  return <Outlet />;
};

export default AdminGuard;
