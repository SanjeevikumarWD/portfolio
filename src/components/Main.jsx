import React from "react";
import Home from "./Home";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductCard from "./prouct_card/ProductCard";

const Main = () => {
  return (
    <div>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductCard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
