import React, { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import swal from "sweetalert";
import { Link } from "react-router-dom";

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

  var retrievedObject = localStorage.getItem("isAuthenticated");

  let result = JSON.parse(retrievedObject);
  const baseURL = `${apiKey}/api/wishlist`;

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

  function removeItem(auth, cat, titl, img) {
    console.log("====================================");
    console.log(auth, cat, titl, img);
    console.log("====================================");

    const article = {
      title: titl,
      author: auth,
      category: cat,
      image: img,
      userEmail: result.email,
      userEnrollment: result.enrollment,
      userName: result.name,
    };

    console.log("==aaaaaaaaaaaa==================================");
    console.log(article);
    console.log("====================================");

    axios
      .post(baseURL, article)
      .then((res) => {
        swal({
          title: "Good job!",
          text: "Book added to wishlist successfully",
          icon: "success",
          button: {
            text: "Done",
          },
        });
      })
      .catch((err) => alert(err));
  }


  return (
    <div className="overflow-hidden">
      <h2 className="text-[19.2px] font-semibold py-3 px-5">Popular Books</h2>
      <div className="hidden md:block">
        <Slider {...settings}>
          {books.map((element) => {
            const { author, category, noofbook, id, title, image } = element;

            return (
              <div className="">
                <a className="relative flex justify-center cursor-pointer">
                  <img
                    className="sm:h-64 sm:w-44 h-32 w-22"
                    src={`${apiKey}${image}`}
                    alt=""
                  />
                  <div className="h-44 w-44 bg-gradient-to-t from-black absolute -bottom-1 opacity-0 hover:opacity-100">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeItem(author, category, title, image);
                      }}
                      className="hover:bg-[#0dd6b8] bg-white text-black mx-2 my-3 px-5 py-2 rounded-sm text-[14px] hover:text-white absolute bottom-10 left-1 "
                    >
                      Add to Wishlist
                    </button>
                    <button className="hover:bg-[#0dd6b8] bg-white rounded-sm text-black mx-2 my-3 px-8 py-2 text-[14px] hover:text-white absolute bottom-0 left-1">
                      <Link to={`/${title}`}>
                        <span>Add to cart</span>
                      </Link>
                    </button>
                  </div>
                </a>
                <h1 className="flex items-center justify-center text-[16px] font-semibold">
                  {title.slice(0, 15) + `...`}
                </h1>
               
              </div>
            );
          })}
      
        </Slider>
      </div>

      <div className="md:hidden block">
        <Slider {...settings2}>
        {books.map((element) => {
            const { author, category, noofbook, id, title, image } = element;

            return (
              <div>
                 
                <a className=" flex justify-center">
                  <img
                    className="sm:h-64 sm:w-44 h-32 w-22"
                    src={`${apiKey}${image}`}
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
  );
};

export default Carousal;
