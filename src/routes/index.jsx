import { Navigate } from 'react-router-dom';
import { load } from './utils';

const routes = [
  {
    path: '/',
    element: <Navigate to="/page1" />,
  },
  {
    path: '/page1',
    element: load('page1'),
  },
  {
    path: '/page2',
    element: load('page2'),
  },
];

export default routes;
