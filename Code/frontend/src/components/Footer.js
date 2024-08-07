import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  let navigate = useNavigate();

  return (
    <div className="">
      <footer className="text-gray-400 bg-gray-900 body-font -ml-1 ">
        <div className="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a
              onClick={() => {
                navigate("/home");
              }}
              className="flex title-font font-medium items-center md:justify-start justify-center text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">iLibrary</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Library at Fingertips
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="cursor-pointer list-none mb-10">
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Java Programming
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    C/ C++ Programming
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Python Programming
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Object Oriented Programming
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="cursor-pointer list-none mb-10">
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Web Dev
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Software Devlopment
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Computer Security
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Networking
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                PAPERS
              </h2>
              <nav className="cursor-pointer list-none mb-10">
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Last Year Papers
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    First Year
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Second Year
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Third Year
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                MENU
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Digital Library
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Wishlist
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Issued Books
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/category");
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Support
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left cursor-pointer">
              © 2022 iLibrary —
              <a
                onClick={() => {
                  navigate("/home");
                }}
              >
                @gpnagpur
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
