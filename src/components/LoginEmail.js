import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginEmail = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated')) {
      navigate('/home');
    }else{
      navigate('/');
    }
  }, [])
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const baseURL = "http://127.0.0.1:8000/api/login";

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    let item = {email, password};
    console.log(JSON.stringify(item));


    axios
      .post(baseURL, formData)
      .then((res) => {
        console.log('====================================');
        console.log(res.data);
       
        console.log('====================================');

        if (res.data.status === 202) {
          swal({
            title: "Good job!",
            text: "Login Successfully",
            icon: "success",
            button: {
              text:"Done",
            },
          })
          // navigate('/home');
          localStorage.setItem("isAuthenticated", "true")
        } else{
          swal({
            title: "Error",
            text: "Login Faild",
            icon: "error",
            button: {
              text:"Done",
            },
          })
        }
      })
      .catch((err) => alert("Eoor"));
    }

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
            type="email"
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

        <div>
          <button
            onClick={handleSubmit}
            className="relative z-10  w-full p-0.5 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-full"
            type="submit"
          >
            <span className="w-full h-full rounded-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative rounded-full flex justify-center w-full py-2 transition-all ease-out bg-gray-900 group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white">Login</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginEmail;
