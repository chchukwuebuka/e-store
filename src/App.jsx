import './App.css'
import './product.css'
import './cartProduct.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './componenet/landing'
import Product from './componenet/product'
import CartProduct from "./componenet/cartProduct";

const router = createBrowserRouter([
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

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
