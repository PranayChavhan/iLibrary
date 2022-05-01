import React from "react";
import { BsSearch } from "react-icons/bs";
import Java from "../components/Category/Java";
import Networking from "../components/Category/Networking";
import ThirdYear from "../components/Category/ThirdYear";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Category = () => {
  
  return (

    <div className="bg-[#030508] min-h-screen">
    <div className="grid grid-cols-11">
      <div className="hidden sm:block col-start-1 col-end-3 bg-[#0a101b] text-[#b5b5be] min-h-screen fixed w-[18%]">
        <Sidebar/>
      </div>
      <div className="col-start-1 sm:col-start-3 col-end-12 text-[#fafafb] relative">
        <Topbar/>
        
        <div className="mt-16">
      <div className=" py-3 px-5 flex flex-col justify-center items-center">
        <h2 className="text-[36.8px] font-semibold pt-5">
          Search by Book Name
        </h2>
        <div className="flex items-center gap-2 text-[14px] mt-3">

        <div class="hidden sm:block  relative ">
          <select class="block appearance-none w-full h-[40px] bg-[#0a101b] px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>
              All
            </option>
            <option>Books</option>
            <option>Thesis</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>



        <div class="hidden sm:block  relative">
          <select class="block appearance-none w-full h-[40px] bg-[#0a101b] px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>
              Genres
            </option>
            <option>General</option>
            <option>Java</option>
            <option>Linux OS</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>


        <div class="hidden sm:block  relative">
          <select class="block appearance-none w-full h-[40px] bg-[#0a101b] px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>
              Year
            </option>
            
            <option>First Year</option>
            <option>Second Year</option>
            <option>Third Year</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className=" relative">
          <span className="left-3 top-3 absolute">
            <BsSearch />
          </span>
          <input
            className="bg-[#0a101b] h-[40px]  rounded-md focus:outline-none static px-9"
            placeholder="Search Here..."
            type="search"
          />
        </div>

        <button className="h-[40px] bg-[#0dd6b8] px-4 rounded-md" type="submit">Search</button>

        </div>








      </div>
        <div className="bg-[#0a101b] my-3 mx-5 rounded-md mb-5">
        <div className="">
          <Java />
 
          
        </div>
      </div>
      <Networking/>
      
      <ThirdYear/>
    </div>

        <Footer/>
      </div>
    </div>
  </div>





    
  );
};

export default Category;
