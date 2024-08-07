import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginEmail = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated")) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const apiKey = process.env.REACT_APP_NEWS_API;

  console.log('====================================');
  console.log(apiKey);
  console.log('====================================');

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    axios
      .post(`${apiKey}/api/login`, formData)
      .then((res) => {
        let result = res.data.students;

        if (res.data.status === 202) {
          swal({
            title: "Good job!",
            text: "Login Successfully",
            icon: "success",
            button: {
              text: "Done",
            },
          });
          navigate("/home");
          localStorage.setItem("isAuthenticated", JSON.stringify(result));
        } else {
          swal({
            title: "Error",
            text: "Login Faild",
            icon: "error",
            button: {
              text: "Done",
            },
          });
        }
      })
      .catch((err) => alert(err));
  };

  const handleSubmittt = (e) => {
    const formData = new FormData();
    formData.append("teacher_id", email);
    formData.append("password", password);

    axios
      .post(`${apiKey}/api/teacherslogin`, formData)
      .then((res) => {
        let resulttt = res.data.teachers;

        if (res.data.status === 202) {
          swal({
            title: "Good job!",
            text: "Login Successfully",
            icon: "success",
            button: {
              text: "Done",
            },
          });
          navigate("/home");
          localStorage.setItem("isAuthenticated", JSON.stringify(resulttt));
        } else {
          swal({
            title: "Error",
            text: "Login Faild",
            icon: "error",
            button: {
              text: "Done",
            },
          });
        }
      })
      .catch((err) => alert("Eoor"));
  };

  return (
    <div>
      <div className="pt-4 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-normal" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your Email"
            className="p-5 text-sm border-2 w-full h-10 rounded-full "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-normal" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your Password"
            className="p-5 text-sm border-2 w-full h-10 rounded-full "
          />
          <div className="cursor-pointer  flex justify-end text-[11px] text-[#ff758f] hover:text-black">
            Forget Password?
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <button
            onClick={handleSubmit}
            className="relative z-10  w-full p-0.5 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-full"
            type="submit"
          >
            <span className="w-full h-full rounded-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative rounded-full flex justify-center w-full py-2 transition-all ease-out bg-gray-900 group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white">Login as student</span>
            </span>
          </button>

          <button
            onClick={handleSubmittt}
            className="relative z-10  w-full p-0.5 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-full"
            type="submit"
          >
            <span className="w-full h-full rounded-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative rounded-full flex justify-center w-full py-2 transition-all ease-out bg-gray-900 group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white">Login as teacher</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginEmail;
