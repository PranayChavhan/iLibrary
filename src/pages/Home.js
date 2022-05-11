import React from "react";
import Carousal from "../components/Carousal";
import Java from "../components/Category/Java";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";



const Home = () => {
 
  return (
    <div className="bg-[#030508] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3 bg-[#0a101b] text-[#9696a6] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>
        <div className="col-start-1 sm:col-start-3 col-end-12 text-[#fafafb] relative">
          <Topbar />
          <div className="mt-16">
            <Carousal />
            <div className="bg-[#0a101b] my-3 mx-5 rounded-md mb-5">
              <div className="flex justify-between items-center">
                <h1 className="text-[19.2px] font-semibold px-2 py-3">
                  Java Advance
                </h1>
                <button className="bg-[#0dd6b8] mx-2 my-3 p-1 rounded-md text-[14px] text-white">
                  View More
                </button>
              </div>
              <div className="">
                <Java />
                
                
              </div>
            </div>
            <div className="bg-[#0a101b] my-3 mx-5 rounded-md mb-5">
              <div className="flex justify-between items-center">
                <h1 className="text-[19.2px] font-semibold px-2 py-3">
                  Linux OS
                </h1>
                <button className="bg-[#0dd6b8] mx-2 my-3 p-1 rounded-md text-[14px] text-white">
                  View More
                </button>
              </div>
              <di
              v className="">
                <Java />
              </di>
            </div>
            {/* <Footer/> */}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
