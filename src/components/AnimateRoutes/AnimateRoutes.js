import React from "react";

// PAGES
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import DetailSection from "../../pages/DetailSection/DetailSection";
import Category from "../../pages/Category/Category";
import CartView from "../../pages/Cart/CartView";
import Checkout from "../../pages/checkout/Checkout";

import { Route, Routes } from "react-router";

//Location
import { useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

export const AnimateRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<DetailSection />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/cart/checkout" element={<Checkout />} />
      </Routes>
    </AnimatePresence>
  );
};
