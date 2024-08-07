import React, { useState } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { IoLibraryOutline } from "react-icons/io5";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
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
          <div className="mt-20 mx-2 md:mx-20">
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

            <div className=" py-3 px-5 flex flex-col justify-center items-center">
              <h2 className="text-[50px] font-semibold pt-5">Our Team</h2>
              <p>Meet the entire team</p>
            </div>

            <div className="flex justify-start items-center gap-5">
              <div className="">
                <img
                  className="p-0 rounded-md"
                  src="assets/Pranay.jpg"
                  alt=""
                  width={300}
                />
              </div>
              <div className="">
                <div className="flex flex-col">
                  <h1 className="p-0 text-lg font-semibold">
                    Pranay Shankarrao Chavhan
                  </h1>
                  <h1 className="text-[17px]">Enrollment No: 1913007</h1>
                  <p className="p-0 text-[17px] ">
                    manage: Back-end, Database, UI Desgine, APIs
                  </p>
                </div>
                <div className="flex flex-row gap-5 mt-4">
                  <a
                    className={`p-1  rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`}
                    href="https://www.linkedin.com/in/pranay-chavhan-38785a224/"
                    target="_blank"
                  >
                    <GrLinkedin size={30} />
                  </a>
                  <a
                    className={`p-1  rounded-full  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`}
                    href="https://github.com/PranayChavhan"
                    target="_blank"
                  >
                    <BsGithub size={30} />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center gap-5 mt-10">
              <div className="">
                <div className="flex flex-col">
                  <h1 className="p-0 text-lg font-semibold">Aditya Dandare</h1>
                  <h1 className="text-[17px]">Enrollment No: 1913009</h1>
                  <p className="p-0 text-[17px] ">
                    Develope: Digital Library, E Books Category,
                  </p>
                </div>
                <div className="flex flex-row gap-5 mt-4">
                  <a
                    className={`p-1  rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`}
                    href="https://www.linkedin.com/in/pranay-chavhan-38785a224/"
                    target="_blank"
                  >
                    <GrLinkedin size={30} />
                  </a>
                  <a
                    className={`p-1  rounded-full  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`}
                    href="https://github.com/PranayChavhan"
                    target="_blank"
                  >
                    <BsGithub size={30} />
                  </a>
                </div>
              </div>
              <div className="">
                <img
                  className="p-0 rounded-md"
                  src="assets/aditya.jpg"
                  alt=""
                  width={300}
                />
              </div>
            </div>

            <div className="flex justify-start items-center gap-5 mt-10">
              <div className="">
                <img
                  className="p-0 rounded-md"
                  src="assets/gunjan.jpg"
                  alt=""
                  width={300}
                />
              </div>
              <div className="">
                <div className="flex flex-col">
                  <h1 className="p-0 text-lg font-semibold">
                    Gunjan Ghuguskar
                  </h1>
                  <h1 className="text-[17px]">Enrollment No: 1913018</h1>
                  <p className="p-0 text-[17px] ">
                    manage: Back-end, Database, UI Desgine, APIs
                  </p>
                </div>
                <div className="flex flex-row gap-5 mt-4">
                  <a
                    className={`p-1  rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`}
                    href="https://www.linkedin.com/in/pranay-chavhan-38785a224/"
                    target="_blank"
                  >
                    <GrLinkedin size={30} />
                  </a>
                  <a
                    className={`p-1  rounded-full  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`}
                    href="https://github.com/PranayChavhan"
                    target="_blank"
                  >
                    <BsGithub size={30} />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center gap-5 mt-10">
              <div className="">
                <div className="flex flex-col">
                  <h1 className="p-0 text-lg font-semibold">
                    Swetank Gopnarayan
                  </h1>
                  <h1 className="text-[17px]">Enrollment No: 1913016</h1>
                  <p className="p-0 text-[17px] ">
                    Develope: Digital Library, E Books Category,
                  </p>
                </div>
                <div className="flex flex-row gap-5 mt-4">
                  <a
                    className={`p-1  rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`}
                    href="https://www.linkedin.com/in/pranay-chavhan-38785a224/"
                    target="_blank"
                  >
                    <GrLinkedin size={30} />
                  </a>
                  <a
                    className={`p-1  rounded-full  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`}
                    href="https://github.com/PranayChavhan"
                    target="_blank"
                  >
                    <BsGithub size={30} />
                  </a>
                </div>
              </div>
              <div className="">
                <img
                  className="p-0 rounded-md"
                  src="assets/kabir.jpg"
                  alt=""
                  width={300}
                />
              </div>
            </div>

            <div className="flex justify-start items-center gap-5 mt-10 mb-10">
              <div className="">
                <img
                  className="p-0 rounded-md"
                  src="assets/atharva.jpg"
                  alt=""
                  width={300}
                />
              </div>
              <div className="">
                <div className="flex flex-col">
                  <h1 className="p-0 text-lg font-semibold">Atharva Gotmare</h1>
                  <h1 className="text-[17px]">Enrollment No: 1913003</h1>
                  <p className="p-0 text-[17px] ">
                    manage: Back-end, Database, UI Desgine, APIs
                  </p>
                </div>
                <div className="flex flex-row gap-5 mt-4">
                  <a
                    className={`p-1  rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`}
                    href="https://www.linkedin.com/in/pranay-chavhan-38785a224/"
                    target="_blank"
                  >
                    <GrLinkedin size={30} />
                  </a>
                  <a
                    className={`p-1  rounded-full  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`}
                    href="https://github.com/PranayChavhan"
                    target="_blank"
                  >
                    <BsGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
