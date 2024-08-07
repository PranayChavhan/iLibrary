import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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

const BookDetails = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userEnrollment, setUserEnrollment] = useState("");
  const [userName, setUserName] = useState("");

  let params = useParams();

  const [book, setBook] = useState([]);

  var retrievedObject = localStorage.getItem("isAuthenticated");

  let result = JSON.parse(retrievedObject);


  useEffect(() => {
    axios
      .get(`${apiKey}/api/search/${params.name}`)
      .then(function (response) {
        setBook(response.data.books);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);



  function removeItem(auth, cat, titl, img, status) {

    const article = {
      title: titl,
      author: auth,
      category: cat,
      image: img,
      status: "Waiting",
      userEmail: result.email,
      userEnrollment: result.enrollment,
      userName: result.name,
    };

    axios
      .post(`${apiKey}/api/issuedbook`, article)
      .then((res) => {
        swal({
          title: "Good job!",
          text: "Book issued successfully",
          icon: "success",
          button: {
            text: "Done",
          },
        });
      })
      .catch((err) => alert(err));
  }

  let paramss = useLocation();
  const path = paramss.pathname;

  const [clicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked(true);

    if (clicked === true) {
      setClicked(false);
    }
  };

  return (
    <div>
      <div className="bg-[#030508] min-h-screen">
        <div className="grid grid-cols-11">
          <div className="hidden sm:block col-start-1 col-end-3 bg-[#0a101b] text-[#9696a6] min-h-screen fixed w-[18%]">
            <Sidebar />
          </div>
          <div className="col-start-1 sm:col-start-3 col-end-12 text-[#fafafb]">
          <div onClick={handleclick}>
            <Topbar />
          </div>
            <div className="mt-[118px]">

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


              {book.map((element) => {
                const {
                  author,
                  category,
                  description,
                  noofbook,
                  id,
                  title,
                  image,
                  status,
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
                          width={250}
                          src={`${apiKey}${image}`}
                          alt=""
                        />
                      </div>
                      <div className="sm:col-start-2 sm:col-end-4 ml-5 sm:ml-0">
                        <div>
                          <h1 className="p-0 text-2xl font-bold">{title}</h1>
                          
                          <div className="flex gap-10">
                            <a
                              href="#_"
                              class="flex items-center justify-center px-3   py-1 text-[12px] font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none"
                            >
                              {category}
                            </a>
                            <span>By - {author} </span>
                          </div>
                          <h3 className="mt-6 font-semibold text-xl ">
                            Description
                          </h3>
                          <p>{description}</p>

                          <div className="mt-6 flex flex-row gap-5 items-center justify-start">
                            
                            <button
                              onClick={ 
                                (e) => {
                                    e.preventDefault(); 
                                    removeItem(author, category, title, image, status)
                                }}
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
    </div>
  );
};

export default BookDetails;
