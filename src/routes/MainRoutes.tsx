import { Children, lazy } from 'react';
import MainLayout from '../layout/MainLayout';

// project import

// render - page
const Home = lazy(() => import('../pages/home'));
const Japan = lazy(() => import('../pages/japan'));
const Europe = lazy(() => import('../pages/europe'));
const Details = lazy(() => import('../pages/details'));
const Error = lazy(() => import('../pages/error'));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/',
            children: [
                {
                    path: 'home',
                    element: <Home />
                }
            ]
        },
        {
            path: '/japan',
            element: <Japan />,
        },
        {
            path: '/japan/:time',
            element: <Details />,
        },
        {
            path: '/europe',
            element: <Europe />,
        },
        {
            path: '/europe/:time',
            element: <Details />,
        },
        {
            path: "*",
            element: <Error />,
        }
    ]
};

export default MainRoutes;
