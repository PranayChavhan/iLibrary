import React, { useState, useEffect } from "react";
import axios from "axios";

const OSebook = () => {
  const [books, setBooks] = useState([]);
  const apiKey = process.env.REACT_APP_NEWS_API;

  useEffect(() => {
    axios
      .get(`${apiKey}/api/addebook/Operating%20System`)
      .then(function (response) {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-[19.2px] font-semibold px-2 py-3">Java</h1>
        <button className="bg-[#0dd6b8] mx-2 my-3 p-1 rounded-md text-[14px] text-white">
          View More
        </button>
      </div>

      <div className="justify-center items-center sm:mb-10 grid grid-cols-3 sm:grid-cols-7 gap-5">
        {books.map((element) => {
          const { author, category, noofbook, id, title, image, bookimg } =
            element;

          return (
            <div className=" flex justify-center p-2">
              <form>
                <div className="relative sm:h-52 sm:w-32 hover:h-60 hover:w-40">
                  <a className="flex justify-center ">
                    <div className="h-40 w-40 bg-gradient-to-t from-black absolute -bottom-1 opacity-0 hover:opacity-100">
                      <a
                        href={`${apiKey}${image}`}
                        target="_blank"
                        className="hover:bg-[#0dd6b8] bg-white rounded-sm text-black mx-2 my-3 px-8 py-2 text-[14px] hover:text-white absolute bottom-0 left-1"
                      >
                        View Book
                      </a>
                    </div>
                    <img
                      className="bg-cover static rounded-sm"
                      src={`${apiKey}${bookimg}`}
                    />
                  </a>
                  <h1 className="flex items-center justify-center text-[16px] font-semibold">
                    {title.slice(0, 15) + "..."}
                  </h1>
                </div>
              </form>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OSebook;
