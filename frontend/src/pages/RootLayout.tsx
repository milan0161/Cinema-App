import { Outlet } from 'react-router-dom';
import Header from '../common/components/header/Header';
import { useEffect } from 'react';
import { useAppDispatch } from '../app/store';
import { getAToken } from '../utils/saveToken';
import { decodedAToken } from '../utils/decodeToken';
import { setUser } from '../features/auth-module/authSlice';

const RootLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const aToken = getAToken();
    if (aToken) {
      const user = decodedAToken(aToken);
      // dispatch(setIsAuth(true));
      dispatch(setUser({ role: user!.role, username: user!.username }));
    } else return;
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
