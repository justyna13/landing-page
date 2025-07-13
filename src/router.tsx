import { createBrowserRouter, Navigate } from 'react-router';
import { lazy } from 'react';
import { Slugs } from '@/constants';

const Layout = lazy(async () => {
  const module = await import('@/pages/Layout/Layout');
  return {
    default: module.Layout
  };
});

const HomePage = lazy(async () => {
  const module = await import('@/pages/Home/Home');
  return {
    default: module.Home
  };
});

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: Slugs.HOME,
        element: <HomePage />
      },
      {
        path: Slugs.NOT_FOUND,
        element: <Navigate to={Slugs.HOME} replace />
      }
    ]
  }
]);
