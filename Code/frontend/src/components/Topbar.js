import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ReactRoundedImage from "react-rounded-image";
import { GiHamburgerMenu } from "react-icons/gi";

const Topbar = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  let navigate = useNavigate();
  const [stateee, setStateee] = useState(false);
  const [modal, setModal] = useState(false);

  const [cpass, setCpass] = useState("");
  const [npass, setNpass] = useState("");
  const [ccpass, setCcpass] = useState("");

  var retrievedObject = localStorage.getItem("isAuthenticated");

  let result = JSON.parse(retrievedObject);

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("cpass", cpass);
    formData.append("password", npass);
    formData.append("name", result.name);
    formData.append("enrollment", result.enrollment);
    formData.append("email", result.email);
    formData.append("contact", result.contact);
    formData.append("address", result.address);
    formData.append("department", result.department);
    formData.append("year", result.year);
    formData.append("userImg", result.userImg);

    axios
      .post(`${apiKey}/api/changepassword/${result.id}`, formData)
      .then((res) => {
        if (res.data.status == 202) {
          swal({
            title: "Good job!",
            text: "Password Changed successfully",
            icon: "success",
            button: {
              text: "Done",
            },
          });
        } else {
          swal({
            title: "Error",
            text: "Please Confirm Password",
            icon: "error",
            button: {
              text: "Done",
            },
          });
        }
      })
      .catch((err) => alert(err));
  };

  // let imgurl =
  //   "https://drive.google.com/open?id=1fNYn2MF5smF6Wy_BeKosruqFk11P339q";
  //   "https://drive.google.com/open?id=1uZ7ZP-U-dQosww3TolLOF7ev9B7Jd73P"
  //    https://drive.google.com/open?id=1uZ7ZP-U-dQosww3TolLOF7ev9B7Jd73P

  //    https://drive.google.com/file/d/1hlIi5X5OfiHyEo809oxpc6jLbyofc3l6/view?usp=sharing



  var imgID = result.userImg.substring(32);

  console.log("====================================");
  console.log(imgID);
  console.log("====================================");

  console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
  console.log(result.userImg, imgID);
  console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');

  return (
    <>
      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-16 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-black font-semibold">
                    Change Password
                  </h3>
                </div>

                <div className="relative p-6 flex-auto">
                  <div className="mb-3 pt-0 ">
                    <label>
                      <h3 className="text-black">Currunt Password</h3>
                    </label>
                    <input
                      type="text"
                      value={cpass}
                      onChange={(e) => {
                        setCpass(e.target.value);
                      }}
                      placeholder="currunt password"
                      className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                    />
                  </div>
                  <div className="mb-3">
                    <label>
                      <h3 className="text-black">New Password</h3>
                    </label>
                    <input
                      type="text"
                      value={npass}
                      onChange={(e) => {
                        setNpass(e.target.value);
                      }}
                      placeholder="new password"
                      className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                    />
                  </div>
                  <div className="mb-3">
                    <label>
                      <h3 className="text-black">Confirm Password</h3>
                    </label>
                    <input
                      type="text"
                      value={ccpass}
                      onChange={(e) => {
                        setCcpass(e.target.value);
                      }}
                      placeholder="confirm password"
                      className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                    />
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
                    onClick={handleSubmit}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className="fixed sm:w-[82%] w-[100%] z-10 bg-[#030508]">
        <div className="px-5 py-3 flex justify-between items-center border-b-[1px] border-[#343a40]">
          <div>
            <h1 className="hidden md:block text-[19.2px] font-semibold">
              Books
            </h1>
            <h1 className="block md:hidden text-[19.2px] font-semibold">
              {" "}
              <GiHamburgerMenu />{" "}
            </h1>
          </div>

          <div className="w-[40%] hidden sm:block relative">
            <span className="left-3 top-3 absolute">
              <BsSearch />
            </span>
            <input
              className="bg-[#0a101b] h-[40px] w-[100%] rounded-md focus:outline-none static px-9"
              placeholder="Search Here..."
              type="search"
            />
          </div>
          <div className="flex flex-col ml-10">
            {stateee ? (
              <>
                <div className="flex items-center gap-4 ">
                  <div
                    className=" cursor-pointer"
                    onClick={() => {
                      setStateee(false);
                    }}
                  >
                    <ReactRoundedImage
                      image={`https://drive.google.com/uc?export=view&id=${imgID}`}
                      roundedSize="0"
                      imageWidth="50"
                      imageHeight="50"
                    />
                  </div>
                  <span>{result.name}</span>
                </div>

                <div className="bg-[#0a101b] rounded-md h-24 w-36 text-[#9696a6] absolute top-16 sm:right-24 right-0  flex flex-col p-1 pb-1">
                  <button
                    onClick={() => setModal(true)}
                    className="hover:bg-[#0dd6b814] border-[1px] border-[#9696a6] mx-2 py-2  rounded-sm text-[12px] hover:text-[#0dd6b8] mb-2"
                  >
                    Change Password
                  </button>
                  <button
                    onClick={() => {
                      localStorage.clear();
                      navigate("/");
                    }}
                    className=" hover:bg-[#0dd6b814] border-[1px] border-[#9696a6] rounded-sm mx-2 py-2  text-[12px] hover:text-[#0dd6b8] mb-2"
                  >
                    Log out
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-4">
                  <div
                    className=" cursor-pointer"
                    onClick={() => {
                      setStateee(true);
                    }}
                  >
                    <ReactRoundedImage
                      image={`https://drive.google.com/uc?export=view&id=${imgID}`}
                      roundedSize="0"
                      imageWidth="50"
                      imageHeight="50"
                    />
                  </div>
                  <span>{result.name}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
