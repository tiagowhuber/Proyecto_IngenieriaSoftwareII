import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import IngresarBug from "./routes/IngresarBug";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "Error",
  },
  {
    path: "/IngresarBug",
    element: <IngresarBug />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
