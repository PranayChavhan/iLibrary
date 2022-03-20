import React from "react";
import Java from "../components/Category/Java";
import Networking from "../components/Category/Networking";
import ThirdYear from "../components/Category/ThirdYear";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate } from "react-router-dom";

const DigitalLibrary = () => {
  
  return (
    <div className="bg-[#030508] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="col-start-1 col-end-3 bg-[#0a101b] text-[#b5b5be] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>
        <div className="col-start-3 col-end-12 text-[#fafafb] relative">
          <Topbar />
          <div className="mt-24">
            <div className="bg-[#0a101b] my-10 mx-5 rounded-md mb-5">
              <div className="grid grid-cols-7 pt-5">
                <Java />
                <Java />
                <Java />
                <Java />
                <Java />
                <Java />
                <Java />
                <Java />
                <Java />
                <Java />
                <Java />
                <Java />
                <Java />
                <Java />
              </div>
            </div>

            <Networking />
            <ThirdYear />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DigitalLibrary;
