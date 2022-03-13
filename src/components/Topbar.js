import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="fixed w-[82%] z-10 bg-[#030508]">
      <div className="px-5 py-3 flex justify-between items-center border-b-[1px] border-[#343a40]">
        <div>
          <h1 className="text-[19.2px] font-semibold">Books</h1>
        </div>
        <div className="w-[40%] relative">
          <span className="left-3 top-3 absolute">
            <BsSearch />
          </span>
          <input
            className="bg-[#0a101b] h-[40px] w-[100%] rounded-md focus:outline-none static px-9"
            placeholder="Search Here..."
            type="search"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="text-white">
            <RiNotification2Line />
          </button>
          <div className="flex items-center gap-4">
            <BsPersonCircle />
            <span>Pranay Chavhan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
