import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MovieLayout from '../pages/MovieLayout';
import MoviesPage from '../pages/MoviesPage';
import ProgramPage from '../pages/ProgramPage';
import RegisterPage from '../pages/RegisterPage';
import RootLayout from '../pages/RootLayout';
import SingleMoviePage from '../pages/SingleMoviePage';
import AdminDashBoardPage from '../pages/admin/AdminDashBoardPage';
import AdminHallsPage from '../pages/admin/AdminHallsPage';
import AdminMoviesPage from '../pages/admin/AdminMoviesPage';
import AdminProjectionsPage from '../pages/admin/AdminProjectionsPage';
import AdminRoot from '../pages/admin/AdminRoot';
import AdminGuard from './AdminGuard';

export const router = createBrowserRouter([
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
        element: <AdminGuard />,
        children: [
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

      {
        path: 'program',
        element: <ProgramPage />,
      },
      {
        path: 'movies',
        // element: <MoviesPage />,
        element: <MovieLayout />,
        children: [
          {
            index: true,
            element: <MoviesPage />,
          },
          {
            path: ':id',
            element: <SingleMoviePage />,
          },
        ],
      },
    ],
  },
]);
