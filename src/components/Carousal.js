import React, { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousal = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  const [books, setBooks] = useState([]);

  const apiKey = process.env.REACT_APP_NEWS_API;

  useEffect(() => {
    axios
      .get(`${apiKey}/api/add/Web%20Development`)
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
      <h2 className="text-[19.2px] font-semibold py-3 px-5">Popular Books</h2>
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

      <div className="sm:hidden ">
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
                  {title}
                </h1>
              </div>
            );
          })}

          
        </Slider>
      </div>
    </div>
  );
};

export default Carousal;
