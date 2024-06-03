import { createBrowserRouter } from "react-router-dom";
import Product from "../componenet/product";
import Landing from "../componenet/landing";
import CartProduct from "../componenet/cartProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
 
    {
        path: "/product/:id",
        element: <Product />,
    },
    {
      path: "/cartProduct/",
      element: <CartProduct />,
  },
  ]);

