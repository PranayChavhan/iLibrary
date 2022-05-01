import React, { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Networking = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
      };  
    const settings2 = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      };  

      const [books, setBooks] = useState([]);

      useEffect(() => {
        axios
          .get(`http://127.0.0.1:8000/api/add/Web%20Development`)
          .then(function (response) {
            console.log(response.data);
            setBooks(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []);


  return (
    <div className="overflow-hidden">
        <div className="flex justify-between items-center py-3 px-5 border-b-[1px] border-gray-900 mb-5">
          <h1 className="text-[19.2px] font-semibold px-2 py-3">
            Networking
          </h1>
          <button className="bg-[#0dd6b8] mx-2 my-3 p-1 rounded-md text-[14px] text-white">
            View More
          </button>
        </div>
        <div className="hidden sm:block">
    <Slider {...settings}>
    {books.map((element) => {
            const { author, category, noofbook, id, title, image } = element;

            return (
              <div>
                <a className=" flex justify-center">
                  <img
                    className="sm:h-64 sm:w-44 h-32 w-22"
                    src={image}
                    alt=""
                  />
                </a>
                <h1 className="flex items-center justify-center text-[16px] font-semibold">
                  {title.slice(0, 15) + `...`}
                </h1>
              </div>
            );
          })}

      
    </Slider>
    </div>

        <div className="sm:hidden">
    <Slider {...settings2}>
    {books.map((element) => {
            const { author, category, noofbook, id, title, image } = element;

            return (
              <div>
                <a className=" flex justify-center">
                  <img
                    className="sm:h-64 sm:w-44 h-32 w-22"
                    src={image}
                    alt=""
                  />
                </a>
                <h1 className="flex items-center justify-center text-[16px] font-semibold">
                  {title.slice(0, 15) + `...`}
                </h1>
              </div>
            );
          })}

        
    </Slider>
    </div>
  </div>
  )
}

export default Networking