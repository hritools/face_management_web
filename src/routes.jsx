import { lazy } from 'react';

export default [
  {
    name: 'Home',
    path: "/",
    exact: true,
    component: lazy(() => import('./pages/home')),
  },
  {
    name: 'Photos',
    path: "/photos",
    exact: true,
    component: lazy(() => import('./pages/photos')),

    routes: [
      {
        path: "/photos/:id",
        component: lazy(() => import('./pages/photo-detail')),
      },
    ]
  },
  {
    name: 'People',
    path: "/people",
    component: lazy(() => import('./pages/people')),
  },
  {
    name: 'Classifiers',
    path: "/classifiers",
    component: lazy(() => import('./pages/classifiers')),
  },
  {
    name: 'About',
    path: "/about",
    component: lazy(() => import('./pages/about')),
  },
];
