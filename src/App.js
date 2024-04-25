import React from "react";
import './css/bootstrap.min.css';
import './css/slick-theme.css';
import MainPage from './pages/MainPage';
import './App.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Catalog from "./pages/Catalog";
import Footer from "./components/Footer";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
    ],
  },
]);

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
