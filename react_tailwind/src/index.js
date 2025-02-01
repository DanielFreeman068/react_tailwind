import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './App';
import Forms from './Forms';
import About from './About'

// Import necessary components for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//routing system configuration
const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/forms', element: <Forms /> },
  { path: '/history', element: <Forms /> },
  { path: '/about', element: <About /> },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* routing implemented */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);