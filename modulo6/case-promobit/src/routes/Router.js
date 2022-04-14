import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/Details/DetailsPage";
import Home from "../pages/Home/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<DetailsPage />} />
    </Routes>
  );
}

