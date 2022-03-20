import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const IssuedBook = () => {
  return (
    <div className="bg-[#030508] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="col-start-1 col-end-3 bg-[#0a101b] text-[#b5b5be] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>
        <div className="col-start-3 col-end-12 text-[#fafafb] relative">
          <Topbar />
          <div className="mt-[20px]">IssuedBook</div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default IssuedBook;
