import React, { useState } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { IoLibraryOutline } from "react-icons/io5";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Help = () => {

  let params = useLocation();
  const path = params.pathname;

  const [clicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked(true);

    if (clicked === true) {
      setClicked(false);
    }
  };

  return (
    <div className="bg-[#030508] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="hidden sm:block col-start-1 col-end-3 bg-[#0a101b] text-[#b5b5be] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>
        <div className="col-start-1 sm:col-start-3 col-end-12 text-[#fafafb]">
        <div onClick={handleclick}>
            <Topbar />
          </div>
          <div className="mt-20">
           
          <>
              {clicked ? (
                <>
                  <div className="block md:hidden text-[#9696a6] z-50">
                    <div className="flex flex-col text-[16px] gap-4">
                      <Link
                        className={
                          path === "/home"
                            ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
                            : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
                        }
                        to="/home"
                      >
                        <AiOutlineHome />
                        <span>Home</span>
                      </Link>

                      <Link
                        className={
                          path === "/category"
                            ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
                            : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
                        }
                        to="/category"
                      >
                        <BiCategory />
                        <span>Category</span>
                      </Link>
                      <Link
                        className={
                          path === "/digital-library"
                            ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
                            : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
                        }
                        to="/digital-library"
                      >
                        <IoLibraryOutline />
                        <span>Digital Library</span>
                      </Link>
                      <Link
                        className={
                          path === "/issued-book"
                            ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
                            : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
                        }
                        to="/issued-book"
                      >
                        <MdOutlineLibraryAddCheck />
                        <span>Issued Books</span>
                      </Link>
                      <Link
                        className={
                          path === "/wishlist"
                            ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
                            : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
                        }
                        to="/wishlist"
                      >
                        <FiHeart />
                        <span>Wishlist</span>
                      </Link>
                      <Link
                        className={
                          path === "/resources"
                            ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
                            : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
                        }
                        to="/resources"
                      >
                        <AiOutlineSetting />
                        <span>Resources</span>
                      </Link>
                      <Link
                        className={
                          path === "/support"
                            ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
                            : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
                        }
                        to="/support"
                      >
                        <FiHelpCircle />
                        <span>Support</span>
                      </Link>
                      <Link
                        className={
                          path === "/about"
                            ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
                            : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
                        }
                        to="/about"
                      >
                        <FiHelpCircle />
                        <span>About Us</span>
                      </Link>
                    </div>
                  </div>
                </>
              ) : null}
            </>



            <div className="pt-4">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                <h1 className="text-[19.2px] font-semibold pl-5" >Support</h1>
                  <div className="sm:px-72 px-10">
                    

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-[#b5b5be]"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 bg-[#0a101b] border-[1px] border-gray-300 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-[#b5b5be]"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 bg-[#0a101b] border-[1px] focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-[#b5b5be]"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 focus:ring-indigo-500 bg-[#0a101b] border-[1px] focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-[#b5b5be]"
                        >
                          Year
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 block w-full py-2 px-3 border bg-[#0a101b] border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>First Year</option>
                          <option>Second Year</option>
                          <option>Third Year</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-[#b5b5be]"
                          >
                            About
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="about"
                              name="about"
                              rows={3}
                              className="shadow-sm focus:ring-indigo-500 bg-[#0a101b] focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md placeholder:italic p-2"
                              placeholder="Brief description of your probleme."
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-span-6">
                        <label className="block text-sm font-medium text-[#b5b5be]">
                          Cover photo
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 bg-[#0a101b] border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-[#0a101b] rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 flex justify-center text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>







            
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Help;
