import React from "react";

const LoginImg = () => {
  return (
    <div>
      <div className="bg-[#ff8fa3] lg:min-h-screen">
        <span className="text-xl p-5  font-bold">iLibrary</span>
        <img
          className="lg:max-h-screen p-32 lg:-mt-10 -mt-40"
          src="assets/login.svg"
          alt=""
        />
        <h1 className="-mt-32 text-white text-center  text-2xl font-bold tracking-wide font-sans">
          Everything you need for better future and success <br /> has already been written.
        </h1>
      </div>
    </div>
  );
};

export default LoginImg;
