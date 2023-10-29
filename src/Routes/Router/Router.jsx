import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../pages/Login/Login.jsx";
import Deals from "../../pages/Deals/Deals";
import AddProducts from "../../pages/Home/AddProducts/AddProducts";
import ManageProducts from "../../pages/Home/ManageProducts/ManageProducts";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRouter/PrivateRoute";
import CheckOut from "../../pages/CheckOut/CheckOut";
import ConfirmOrder from "../../pages/ConfirmOrders/ConfirmOrder";
import Orders from "../../pages/Orders/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://grocery-shop-server-7q32iukm6-mehraj-hossain-ratuls-projects.vercel.app/products"
          ),
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "deals",
        element: <Deals></Deals>,
      },
      {
        path: "addProducts",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "manage",
        element: (
          <PrivateRoute>
            <ManageProducts></ManageProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "order/:id",
        element: (
          <PrivateRoute>
            <ConfirmOrder></ConfirmOrder>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://grocery-shop-server-7q32iukm6-mehraj-hossain-ratuls-projects.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "checkOut",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
