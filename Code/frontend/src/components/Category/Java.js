import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Java = () => {
  const [books, setBooks] = useState([]);
  const apiKey = process.env.REACT_APP_NEWS_API;

  console.log("====================================");
  console.log(`${apiKey}/api/add/Java%20Programming`);
  console.log("====================================");

  useEffect(() => {
    axios
      .get(`${apiKey}/api/add/Java%20Programming`)
      .then(function (response) {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  var retrievedObject = localStorage.getItem("isAuthenticated");

  let result = JSON.parse(retrievedObject);

  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  console.log("====================================");
  console.log(title, author, category, image);
  console.log("====================================");

  const baseURL = "http://127.0.0.1:8000/api/wishlist";

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
      .post(`${apiKey}/api/wishlist`, article)
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
    <div className="justify-center items-center sm:mb-10 grid grid-cols-3 sm:grid-cols-7 gap-5">
      {books.map((element) => {
        const { author, category, noofbook, id, title, image } = element;

        return (
          <div className=" flex justify-center p-2">
            <form>
              <div className="relative sm:h-52 sm:w-32 hover:h-60 hover:w-40">
                <a className="flex justify-center ">
                  <div className="h-40 w-40 bg-gradient-to-t from-black absolute -bottom-1 opacity-0 hover:opacity-100">
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
                  <img className="bg-cover static rounded-sm" src={`${apiKey}${image}`} />
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
  );
};

export default Java;
