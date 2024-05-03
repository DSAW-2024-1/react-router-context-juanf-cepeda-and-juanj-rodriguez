import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './routes/Login.tsx'

import { Navigate } from "react-router-dom";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './auth/AuthProv.tsx'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <Navigate to="/login" />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider> 
  </React.StrictMode>,
)