import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import HomePage from '../Pages/HomePage';
import RegistroPage from '../Pages/RegistroPage';
import DetallePage from '../Pages/DetallePage';
import NotFoundPage from "../Pages/NotFoundPage";
import LoginPage from "../Pages/LoginPage";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<RegistroPage />} />
      <Route path="/producto/:id" element={<DetallePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default PublicRoutes;