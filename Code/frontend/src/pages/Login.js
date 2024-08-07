import React from "react";
import LoginEmail from "../components/LoginEmail";
import LoginImg from "../components/LoginImg";

const Login = () => {
  return (
    <div>
      <div className=" min-w-full">
        <div className="lg:grid grid-cols-2 relative">
          <LoginImg/>
          <div className="flex flex-col lg:pl-36 lg:pr-80 lg:pt-28 max-h-screen px-8 py-1">
            <h1 className="text-xl font-bold">Login✌🏻</h1>
            <span className=" text-gray-300 text-[13px]">Log in to contine... </span> 
            <LoginEmail/>
          </div>
          <div className="absolute lg:right-2 lg:bottom-0 text-[12px] text-gray-400 right-28">
            @2022 iLibrary All Right Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
