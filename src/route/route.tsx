import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ShoesManagement from "../pages/user/ShoesManagement";
import SalesManagement from "../pages/user/SalesManagement";
import SalesHistory from "../pages/user/SalesHistory";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <App />,
    children: [
      {
        path: "shoesManagement",
        element: <ShoesManagement />,
      },
      {
        path: "salesManagement",
        element: <SalesManagement />,
      },
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
