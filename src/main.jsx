import React from "react";
import ReactDOM from "react-dom/client";
import "././assets/index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={routes} />
  </>
);
