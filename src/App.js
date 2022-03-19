import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import DigitalLibrary from "./pages/DigitalLibrary";
import IssuedBook from "./pages/IssuedBook";
import Wishlist from "./pages/Wishlist";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Footer from "./components/Footer";
import Login from "./pages/Login";

const App = () => {
  const check = true;
  if (check) {
    return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
      </BrowserRouter>
    )
    
  } else{
    return (
      <BrowserRouter>
        <div className="bg-[#030508] min-h-screen">
          <div className="grid grid-cols-11">
            <div className="col-start-1 col-end-3 bg-[#0a101b] text-[#b5b5be] min-h-screen fixed w-[18%]">
              <Sidebar />
            </div>
            <div className="col-start-3 col-end-12 text-[#fafafb] relative">
              <Topbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/digital-library" element={<DigitalLibrary />} />
                <Route path="/issued-book" element={<IssuedBook />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/help" element={<Help />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
  
};

export default App;
