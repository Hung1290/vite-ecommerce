import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import LoginPage from './pages/login'
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import RegisterPage from './pages/register';

const Layout = () => {
  return (
    <div className='layout-app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <div>404 not found</div>,
      children: [
        {
          index: true,
          element: <Home />
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
