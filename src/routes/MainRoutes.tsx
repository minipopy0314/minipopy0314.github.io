import { lazy } from 'react';

// project import

// render - page
const Home = lazy(() => import('../pages/home'));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'home',
            children: [
                {
                    path: 'home',
                    element: <Home />
                }
            ]
        },
    ]
};

export default MainRoutes;
