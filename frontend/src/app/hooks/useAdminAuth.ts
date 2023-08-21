import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { getAToken } from '../utils/saveToken';
import { decodedAToken } from '../utils/decodeToken';
import {
  setIsAdmin,
  setIsAuth,
  setUser,
} from '../../features/auth-module/authSlice';

const useAdminAuth = () => {
  const isAdmin = useAppSelector((state) => state.auth.isAdmin);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isAdmin) {
      return;
    }
    const token = getAToken();
    if (token) {
      const data = decodedAToken(token);
      dispatch(setUser({ role: data!.role, token, username: data!.email }));
      dispatch(setIsAuth);
      if (data?.role == 'Admin') {
        dispatch(setIsAdmin());
      }
    }
  }, [isAdmin]);

  return isAdmin;
};

export default useAdminAuth;
