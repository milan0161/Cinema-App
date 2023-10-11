import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MovieLayout from '../pages/MovieLayout';
import MoviesPage from '../pages/MoviesPage';
import ProgramPage from '../pages/ProgramPage';

import RootLayout from '../pages/RootLayout';
import SingleMoviePage from '../pages/SingleMoviePage';

import AdminHallsPage from '../pages/admin/AdminHallsPage';
import AdminMoviesPage from '../pages/admin/AdminMoviesPage';
import AdminProjectionsPage from '../pages/admin/AdminProjectionsPage';
import AdminRoot from '../pages/admin/AdminRoot';
import AdminGuard from './AdminGuard';
import ProjectionDetailsPage from '../pages/ProjectionDetailsPage';
import AdminReservationsPage from '../pages/admin/AdminReservationsPage';
import AdminDashboardPage from '../pages/admin/AdminDashBoardPage';
import AboutPage from '../pages/AboutPage';

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
                element: <AdminDashboardPage />,
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
              {
                path: 'reservations',
                element: <AdminReservationsPage />,
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
        path: 'program/projection/:id',
        element: <ProjectionDetailsPage />,
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
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);
