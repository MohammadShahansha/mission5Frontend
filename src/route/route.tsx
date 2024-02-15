import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SalesManagement from "../pages/user/SalesManagement";
import SalesHistory from "../pages/user/SalesHistory";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import CreateShoes from "../pages/shoes/CreateShoes";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  // },
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
    children: [
      {
        path: "create-shoes",
        element: <CreateShoes />,
      },
      {
        path: "salesManagement",
        element: <SalesManagement />,
      },
    ],
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "salesHistory",
        element: <SalesHistory />,
      },
    ],
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
