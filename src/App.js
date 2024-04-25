import React from "react";
import './css/bootstrap.min.css';
import './css/slick-theme.css';
import MainPage from './pages/MainPage';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Catalog from "./pages/Catalog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
