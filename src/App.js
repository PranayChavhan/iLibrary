import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import DigitalLibrary from "./pages/DigitalLibrary";
import IssuedBook from "./pages/IssuedBook";
import Wishlist from "./pages/Wishlist";
import Settings from "./pages/Resources";
import Help from "./pages/Help";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import BookDetails from "./pages/BookDetails";
import AboutUs from "./pages/AboutUs";


const App = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/digital-library" element={<DigitalLibrary />} />
          <Route path="/issued-book" element={<IssuedBook />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/resources" element={<Settings />} />
          
          <Route path="/:name" element={<BookDetails/>} />
          <Route path="/about" element={<AboutUs/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
