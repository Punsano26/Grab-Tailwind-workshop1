import React from 'react'
import ReactDOM from 'react-dom/client'
import { Nav } from './Components';
import './index.css'
import { RouterProvider } from 'react-router';
import Router from './routes/Router';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <RouterProvider router={Router} />
  </React.StrictMode>,
);
