import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { IoLibraryOutline } from "react-icons/io5";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";

import { useLocation } from "react-router-dom";

const Sidebar = () => {
  let params = useLocation();
  const path = params.pathname;

  return (
    <div className="p-0 sm:block z-30  relative">
      <div className="px-5 py-3">
        <Link
          className="flex items-center justify-between text-[#0dd6b8]"
          to="/home"
        >
          <h1 className="text-xl font-bold">iLibrary</h1>
          <button>
            <GiHamburgerMenu />
          </button>
        </Link>
      </div>
      <div className="flex flex-col text-[16px] gap-4">
        <Link
          className={
            path === "/home"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/home"
        >
          <AiOutlineHome />
          <span>Home</span>
        </Link>
        <Link
          className={
            path === "/category"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/category"
        >
          <BiCategory />
          <span>Category</span>
        </Link>
        <Link
          className={
            path === "/digital-library"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/digital-library"
        >
          <IoLibraryOutline />
          <span>Digital Library</span>
        </Link>
        <Link
          className={
            path === "/issued-book"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/issued-book"
        >
          <MdOutlineLibraryAddCheck />
          <span>Issued Books</span>
        </Link>
        <Link
          className={
            path === "/wishlist"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/wishlist"
        >
          <FiHeart />
          <span>Wishlist</span>
        </Link>
        <Link
          className={
            path === "/resources"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/resources"
        >
          <AiOutlineSetting />
          <span>Resources</span>
        </Link>
        {/* <Link
          className={
            path === "/support"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/support"
        >
          <FiHelpCircle />
          <span>Support</span>
        </Link> */}
        <Link
          className={
            path === "/about"
              ? `py-2 px-5 rounded-md  flex items-center gap-3  bg-[#0dd6b814] text-[#0dd6b8]`
              : `py-2 px-5 rounded-md  flex items-center gap-3 hover:bg-[#0dd6b814] hover:text-[#0dd6b8]`
          }
          to="/about"
        >
          <FiHelpCircle />
          <span>About Us</span>
        </Link>
      </div>














      
    </div>
  );
};

export default Sidebar;
