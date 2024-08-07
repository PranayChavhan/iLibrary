import React, { useState, useEffect } from "react";
import DateTimePicker from "react-datetime-picker";
import axios from "axios";
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
import swal from "sweetalert";

const Settings = () => {
  let params = useLocation();
  const path = params.pathname;

  const [clicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked(true);

    if (clicked === true) {
      setClicked(false);
    }
  };

  var retrievedObject = localStorage.getItem("isAuthenticated");

  let result = JSON.parse(retrievedObject);

  const [book, setBook] = useState([]);
  const [value, onChange] = useState(new Date());
  const [value2, onChange2] = useState(new Date());

  const [modal, setModal] = useState(false);

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");


  const apiKey = process.env.REACT_APP_NEWS_API;

  useEffect(() => {
    axios
      .get(`${apiKey}/api/resources`)
      .then(function (response) {
        setBook(response.data.resources);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  let t1 = value.toLocaleTimeString();
  let t2 = value2.toLocaleTimeString()

  var diff = Math.abs(t2-t1); 

  console.log("Fromm");
  console.log(value.toLocaleTimeString());
  console.log("====================================");
  console.log("To");
  console.log(value2);
  console.log("====================================");
  console.log("Total");
  console.log(diff);
  console.log("====================================");


  const handleBookNow = (title, img) =>{
    setTitle(title);
    setImg(img);
    setModal(true);

  }

  const handleSubmit = (v1, v2) =>{
    const article = {
      title: title,
      image: img,
      userEmail: result.email,
      userName: result.name,
      from: v1.toLocaleTimeString(),
      to: v2.toLocaleTimeString(),
    };

    axios
    .post(`${apiKey}/api/issueresourses`, article)
    .then((res) => {
      swal({
        title: "Good job!",
        text: "Issued successfully",
        icon: "success",
        button: {
          text: "Done",
        },
      });
    })
    .catch((err) => alert(err));

    setModal(false);
  }


  return (
    <>
      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-16 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-black font-semibold">
                    Book your slot
                  </h3>
                </div>

                <div className="relative p-6 flex-auto">
                  <div className="mb-3 pt-0 ">
                    From -
                    <div className="bg-white text-black">
                      <DateTimePicker onChange={onChange} value={value} />
                    </div>
                  </div>
                  
                  <div className="mb-3 pt-0 ">
                    To -
                    <div className="bg-white text-black">
                      <DateTimePicker onChange={onChange2} value={value2} />
                    </div>
                  </div> 
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModal(false)}
                  >
                    Close
                  </button>
                  
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=>{handleSubmit(value, value2)}}
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className="bg-[#030508] min-h-screen">
        <div className="grid grid-cols-11">
          <div className="hidden sm:block col-start-1 col-end-3 bg-[#0a101b] text-[#b5b5be] min-h-screen fixed w-[18%]">
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
                const { title, description, image, id } = element;
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
                          src={`${apiKey}${image}`}
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

                          <div className="mt-6 flex flex-col gap-5 items-start justify-start">
                            <button
                               onClick={() => {
                                handleBookNow(title, image);
                              }}
                              class=" mt-4 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden  font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                            >
                              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                              <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>

                              <span class="relative">Book now...</span>
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
    </>
  );
};

export default Settings;
