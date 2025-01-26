
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import ProductMonitor from "./pages/product-monitor";
import ProductControl from './pages/product-control';
import ProductResource from './pages/product-resource';
import ProductNetwork from './pages/product-network';
import ProductEaton from './pages/product-eaton';
import ProductEatonMcb from './pages/product-eatonmcb';
import ProductEatonAcb from './pages/product-eatonacb';

const NavbarRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-monitor" element={<ProductMonitor />} />
        <Route path="/product-control" element={<ProductControl />} />
        <Route path="/product-resource" element={<ProductResource />} />
        <Route path="/product-network" element={<ProductNetwork />} />
        <Route path="/product-eaton" element={<ProductEaton />} />
        <Route path="/product-eatonmcb" element={<ProductEatonMcb />} />
        <Route path="/product-eatonacb" element={<ProductEatonAcb />} />
      </Routes>
    </Router>
  );
};

export default NavbarRoutes;
