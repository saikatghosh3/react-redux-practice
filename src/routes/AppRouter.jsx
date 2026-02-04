import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import ScrollToTop from "../components/ScrollToTop";

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      
      </Routes>
      <ScrollToTop />
    </>
  );
};

export default AppRouter;
