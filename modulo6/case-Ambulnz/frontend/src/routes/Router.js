import React from "react";
import { Route, Routes } from "react-router-dom";

import CartPage from "../pages/CartPage";
import Home from "../pages/Home";


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrinho" element={<CartPage />} />
    </Routes>
  );
}
