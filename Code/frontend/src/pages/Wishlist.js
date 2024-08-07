import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
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

const Wishlist = () => {
  const [books, setBooks] = useState([]);

  var retrievedObject = localStorage.getItem("isAuthenticated");

  let result = JSON.parse(retrievedObject);
  const apiKey = process.env.REACT_APP_NEWS_API;

  const loadStudent = async () => {
    axios
    .get(`${apiKey}/api/wishlist/${result.email}`)
    .then(function (response) {
      setBooks(response.data.wishlist);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  useEffect(() => {
   loadStudent()
  }, []);

  const handleDelete = (id) => {
    console.log("====================================");
    console.log(id);
    console.log("====================================");

    axios
      .delete(`${apiKey}/api/wishlistDelete/${id}`)
      .then(function () {
        swal({
          title: "Good job!",
          text: "Book deleted successfully",
          icon: "success",
          button: {
            text: "Ok",
          },
        });
        loadStudent();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
          <div className="mt-24">
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
            <div className="bg-[#0a101b] my-3 mx-5 rounded-md mb-5">
              <h1 className="text-[19.2px] font-semibold px-2 py-3 border-b-[1px] border-gray-900">
                Wishlist
              </h1>
              <>
                {books ? (
                  <>
                    {books.map((element) => {
                      const { id, title, image } = element;
                      return (
                        <div className="grid grid-cols-3 gap-4 sm:items-center justify-between sm:px-20 mb-5 pt-3">
                          <div className="col-start-1 sm:col-end-2 col-end-3  flex sm:items-center justify-between">
                            <h1 className="mr-4">{id}</h1>
                            <a className="sm:ml-5" href="/">
                              <img className=" rounded-sm" src={`${apiKey}${image}`} alt="" />
                            </a>

                            <div className="ml-5">
                              <h1 className="text-[19.2px] font-semibold">
                                {title}
                              </h1>
                              <h2 className="text-[#0dd6b8]">Available</h2>
                            </div>
                          </div>

                          <div className="col-start-3 col-end-4 ">
                            <button className=" hover:bg-[#0dd6b8] bg-white rounded-sm text-black mx-2 my-3 px-2 sm:px-8 sm:py-2 text-[14px] hover:text-white ">
                              <Link to={`/${title}`}>
                                <span>Add to cart</span>
                              </Link>
                            </button>
                            <button
                              onClick={(e) => {
                                handleDelete(id);
                              }}
                              className="hover:bg-red-500 bg-white rounded-sm text-black mx-2 my-3 px-2 sn:px-8 sm:py-2 text-[14px] hover:text-white "
                            >
                              delete
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
