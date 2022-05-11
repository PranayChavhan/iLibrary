import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const IssuedBook = () => {
  const [books, setBooks] = useState([]);
  var retrievedObject = localStorage.getItem("isAuthenticated");
  let result = JSON.parse(retrievedObject);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/issuedbook/${result.email}`)
      .then(function (response) {
        setBooks(response.data.issuedbook);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // =========================================================================================================
  const date = new Date();
  date.setDate(date.getDate() + 15);

  const calculateTimeLeft = () => {
    const difference = new Date(date) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}
        {" left"}
      </span>
    );
  });

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
                const { id, title, image, status } = element;

                return (
                  <div className="grid grid-cols-3 gap-4 sm:items-center justify-between sm:px-20 mb-5 pt-3">
                    <div className="col-start-1 sm:col-end-2 col-end-3  flex sm:items-center justify-between">
                      <h1 className="mr-4">{id}</h1>
                      <a className="sm:ml-5" href="/">
                        <img className=" rounded-sm" src={image} alt="" />
                      </a>

                      <div className="ml-5">
                        <h1 className="text-[19.2px] font-semibold">{title}</h1>
                        <h2 className="text-[#0dd6b8]">Available</h2>
                      </div>
                    </div>

                    <div className="col-start-3 col-end-4 ">
                      <button className=" bg-white rounded-sm text-black mx-2 my-3 px-3 sm:px-8 sm:py-2 text-[14px]">
                        {status}
                      </button>
                      <button className="bg-white rounded-sm text-black mx-2 my-3 px-2 sm:px-8 sm:py-2 text-[14px]  ">
                        {/* 15 Days left */}
                        {timerComponents.length ? (
                          timerComponents
                        ) : (
                          <span>Time's up!</span>
                        )}
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
