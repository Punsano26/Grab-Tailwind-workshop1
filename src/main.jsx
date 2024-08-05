import React from 'react'
import ReactDOM from 'react-dom/client'
import { Nav } from './Components';
import './index.css'
import { RouterProvider } from 'react-router';
import Router from './routes/Router';
import { AuthProvider } from "./context/AuthContext"




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <Nav />
    <RouterProvider router={Router} />
    </AuthProvider>
  </React.StrictMode>,
);
