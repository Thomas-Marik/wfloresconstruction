import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ServiceScreen from "../screens/ServiceScreen/ServiceScreen";
import GalleryScreen from "../screens/GalleryScreen/GalleryScreen";
import ContactScreen from "../screens/ContactScreen/ContactScreen";
import AreaScreen from "../screens/AreaScreen/AreaScreen";
const MainNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/services" element={<ServiceScreen />} />
        <Route path="/gallery" element={<GalleryScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/area" element={<AreaScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainNavigation;
