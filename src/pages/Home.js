import React from "react";
import Carousal from "../components/Carousal";
import Java from "../components/Category/Java";
import Footer from "../components/Footer";

const Home = () => {
  return (
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
        <div className="grid grid-cols-7">
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
      <div className="bg-[#0a101b] my-3 mx-5 rounded-md mb-5">
        <div className="flex justify-between items-center">
          <h1 className="text-[19.2px] font-semibold px-2 py-3">
            Linux OS
          </h1>
          <button className="bg-[#0dd6b8] mx-2 my-3 p-1 rounded-md text-[14px] text-white">
            View More
          </button>
        </div>
        <div className="grid grid-cols-7">
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
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
