import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/> 
    },
    
]);

export default router;