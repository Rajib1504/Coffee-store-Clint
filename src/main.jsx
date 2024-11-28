import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./assets/pages/App";
import AddCofee from "./assets/pages/AddCofee";
import ViewCofee from "./assets/pages/ViewCofee";
import UpdateCofee from "./assets/pages/UpdateCofee";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/addCofee",
    element: <AddCofee></AddCofee>,
  },
  {
    path: "/details",
    element: <ViewCofee></ViewCofee>,
  },
  {
    path: "/updateCofee",
    element: <UpdateCofee></UpdateCofee>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
