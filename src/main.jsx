import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./assets/pages/App";
import AddCofee from "./assets/pages/AddCofee";
import ViewCofee from "./assets/pages/ViewCofee";
import UpdateCofee from "./assets/pages/UpdateCofee";
import CofeeCard from "./CofeeCard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/cofee"),
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
    path: "/updateCofee/:id",
    element: <UpdateCofee></UpdateCofee>,
    loader: ({ params }) => fetch(`http://localhost:5000/cofee/${params.id}`),
  },
  {
    path: "/cofeeCard",
    element: <CofeeCard></CofeeCard>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
