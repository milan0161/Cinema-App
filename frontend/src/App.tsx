import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminRoot from './pages/admin/AdminRoot';
import AdminDashBoardPage from './pages/admin/AdminDashBoardPage';
import AdminMoviesPage from './pages/admin/AdminMoviesPage';
import AdminProjectionsPage from './pages/admin/AdminProjectionsPage';
import AdminHallsPage from './pages/admin/AdminHallsPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'register',
          element: <RegisterPage />,
        },
        {
          path: 'auth',
          element: <LoginPage />,
        },
        {
          path: 'admin',
          element: <AdminRoot />,
          children: [
            {
              index: true,
              element: <AdminDashBoardPage />,
            },
            {
              path: 'movies',
              element: <AdminMoviesPage />,
            },
            {
              path: 'projections',
              element: <AdminProjectionsPage />,
            },
            {
              path: 'halls',
              element: <AdminHallsPage />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
