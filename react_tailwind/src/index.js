import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './App';
import Forms from './Forms';
import Budget from './Budget';
import History from './History';
import About from './About';
import Login from './Login';
import Signup from './Signup';

// Import necessary components for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//routing system configuration
const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/forms', element: <Forms /> },
  { path: '/history', element: <History /> },
  { path: '/budget', element: <Budget /> },
  { path: '/about', element: <About />},
  { path: '/login', element: <Login />},
  { path: '/signup', element: <Signup />},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* routing implemented */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);