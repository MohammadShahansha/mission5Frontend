import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import { routesGenerator } from "@/utils/routeGenerator";
import { userPath } from "./userPath";
import { buyerPath } from "./buyerPath";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: routesGenerator(userPath),
  },
  {
    path: "/buyer",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: routesGenerator(buyerPath),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
