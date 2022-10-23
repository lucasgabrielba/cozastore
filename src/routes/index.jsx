import { Routes, Route } from "react-router-dom";
import { ProductDetail } from "../pages/Product";
import { Home } from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import { CheckoutModal } from "../pages/Checkout";
import { PageNotFound } from '../pages/PageNotFound'

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Signin />} />
      <Route exact path="/logout" element={<Signup />} />
      <Route element={<Home />} path="/" />
      <Route path="*" element={<PageNotFound />} />
      <Route element={<ProductDetail />} path="/products/:slug/" />
      <Route element={<CheckoutModal />} path="/checkout" />
    </Routes>
  );
};