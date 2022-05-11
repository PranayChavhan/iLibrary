import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Settings = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/resources`)
      .then(function (response) {
        setBook(response.data.resources);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  return (
    <div className="bg-[#030508] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3 bg-[#0a101b] text-[#b5b5be] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>
        <div className="col-start-1 sm:col-start-3 col-end-12 text-[#fafafb] relative">
          <Topbar />
          

          <div className="mt-[118px]">
              {book.map((element) => {
                const {
                  title,
                  description,
                  image,
                  id,
                  
                  
                } = element;
                return (
                  <div className="bg-[#0a101b] my-3 mx-5 rounded-md mb-5">
                    <div class="grid sm:grid-cols-3 gap-4">
                      <div
                        key={id}
                        className="sm:col-start-1 sm:col-end-2 flex justify-center"
                      >
                        <img
                          className="rounded-sm"
                          // width={250}
                          src={image}
                          alt=""
                        />
                      </div>
                      <div className="sm:col-start-2 sm:col-end-4 ml-5 sm:ml-0">
                        <div>
                          <h1 className="p-0 text-2xl font-bold">{title}</h1>
                          
                          
                          <h3 className="mt-6 font-semibold text-xl ">
                            Description
                          </h3>
                          <p>{description}</p>

                          <div className="mt-6 flex flex-row gap-5 items-center justify-start">
                            <a
                              href="#_"
                              class=" mt-6 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
                            >
                              <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                              </span>
                              <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                                Not Available
                              </span>
                            </a>
                            <button
                             
                              class=" mt-4 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden  font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                            >
                              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                              <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                              <span class="relative">Order now...</span>
                            </button>
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>


          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Settings;
