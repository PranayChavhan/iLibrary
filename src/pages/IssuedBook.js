import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { act } from "react-dom/test-utils";

const IssuedBook = () => {
  const [books, setBooks] = useState([]);

  const [action, setAction] = useState([]);


  var retrievedObject = localStorage.getItem("isAuthenticated");

  let result = JSON.parse(retrievedObject);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/issuedbook/${result.email}`)
      .then(function (response) {
        console.log(response.data.issuedbook);
          setBooks(response.data.issuedbook);

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
          <div className="mt-24">
            <div className="bg-[#0a101b] my-3 mx-5 rounded-md mb-5">
              <h1 className="text-[19.2px] font-semibold px-2 py-3 border-b-[1px] border-gray-900">
                Issued Books
              </h1>
              
              {books.map((element) => {
                const {id, title, image, status } =
                  element;
                  
                return (
                  
                  <div className="grid grid-cols-3 gap-4 sm:items-center justify-between sm:px-20 mb-5 pt-3">
                    <div className="col-start-1 sm:col-end-2 col-end-3  flex sm:items-center justify-between">
                      <h1 className="mr-4">{id}</h1>
                      <a className="sm:ml-5" href="/">
                        <img
                          className="sm:h-28 sm:w-20 rounded-sm"
                          src={image}
                          alt=""
                        />
                      </a>

                      <div className="ml-5">
                        <h1 className="text-[19.2px] font-semibold">
                          {title}
                        </h1>
                        <h2 className="text-[#0dd6b8]">Available</h2>
                      </div>
                    </div>

                    <div className="col-start-3 col-end-4 ">
                      <button className=" bg-white rounded-sm text-black mx-2 my-3 px-3 sm:px-8 sm:py-2 text-[14px]">
                        {status}
                      </button>
                      <button className="bg-white rounded-sm text-black mx-2 my-3 px-2 sm:px-8 sm:py-2 text-[14px]  ">
                        15 Days left
                      </button>
                    </div>
                  </div>
                );
              })}

              
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default IssuedBook;
