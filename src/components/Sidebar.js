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

const Sidebar = () => {
  return (
    <div>
      <div className="px-5 py-3">
        <Link
          className="flex items-center justify-between text-[#0dd6b8]"
          to="/"
        >
          <h1 className="text-xl font-bold">iLibrary</h1>
          <button>
            <GiHamburgerMenu />
          </button>
        </Link>
      </div>
      <div className="flex flex-col text-[16px] gap-4">
        <Link
          className="py-2 px-5 rounded-md hover:bg-[#0dd6b814] hover:text-[#0dd6b8] flex items-center gap-3"
          to="/"
        >
          <AiOutlineHome />
          <span>Home</span>
        </Link>
        <Link
          className="py-2 px-5 rounded-md hover:bg-[#0dd6b814] hover:text-[#0dd6b8] flex items-center gap-3"
          to="/category"
        >
          <BiCategory/>
          <span>Category</span>
        </Link>
        <Link
          className="py-2 px-5 rounded-md hover:bg-[#0dd6b814] hover:text-[#0dd6b8] flex items-center gap-3"
          to="/digital-library"
        >
          <IoLibraryOutline/>
          <span>Digital Library</span>
        </Link>
        <Link
          className="py-2 px-5 rounded-md hover:bg-[#0dd6b814] hover:text-[#0dd6b8] flex items-center gap-3"
          to="/issued-book"
        >
          <MdOutlineLibraryAddCheck/>
          <span>Issued Books</span>
        </Link>
        <Link
          className="py-2 px-5 rounded-md hover:bg-[#0dd6b814] hover:text-[#0dd6b8] flex items-center gap-3"
          to="/wishlist"
        >
          <FiHeart/>
          <span>Wishlist</span>
        </Link>
        <Link
          className="py-2 px-5 rounded-md hover:bg-[#0dd6b814] hover:text-[#0dd6b8] flex items-center gap-3"
          to="/settings"
        >
          <AiOutlineSetting/>
          <span>Settings</span>
        </Link>
        <Link
          className="py-2 px-5 rounded-md hover:bg-[#0dd6b814] hover:text-[#0dd6b8] flex items-center gap-3"
          to="/help"
        >
          <FiHelpCircle/>
          <span>Help</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
