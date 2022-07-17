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
import ProductosAlta from "../Pages/ProductosAlta";
import ProductosModificar from "../Pages/ProductosModificar";
import AuthContext from "../Context/AuthContext";

function PublicRoutes() {
  return (
    <AuthContext.Consumer>
      {
        context =>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registro" element={<RegistroPage />} />
            {
              context.isLogin &&
              <>
                <Route path="/productos/alta" element={<ProductosAlta />} />
                <Route path="/productos/modificar/:id" element={<ProductosModificar />} />
              </>
            }
            <Route path="/producto/:id" element={<DetallePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      }
    </AuthContext.Consumer>

  )
}

export default PublicRoutes;