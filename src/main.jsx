import React from "react";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Extract from "./pages/Extract.jsx";
import Home from "./pages/Home.jsx";
import EditPage from "./pages/EditPage.jsx";
import AddCatPage from "./pages/AddCatPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/extrato",
    element: <Extract />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/editpage",
    element: <EditPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/addcategoria",
    element: <AddCatPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
