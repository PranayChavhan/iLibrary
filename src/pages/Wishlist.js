import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Wishlist = () => {
  return (
    <div className="bg-[#030508] min-h-screen">
      <div className="grid grid-cols-11">
        <div className="col-start-1 col-end-3 bg-[#0a101b] text-[#b5b5be] min-h-screen fixed w-[18%]">
          <Sidebar />
        </div>
        <div className="col-start-3 col-end-12 text-[#fafafb] relative">
          <Topbar />
          <div className="mt-24">
            <div className="bg-[#0a101b] my-3 mx-5 rounded-md mb-5">
              <h1 className="text-[19.2px] font-semibold px-2 py-3 border-b-[1px] border-gray-900">
                Wishlist
              </h1>

              <div className="flex items-center justify-between px-20 mb-5 pt-3">
                <div className=" flex items-center justify-between gap-10">
                  <h1>1.</h1>
                  <a className="ml-5" href="/">
                    <img
                      className="h-28 w-20 rounded-sm"
                      src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg"
                      alt=""
                    />
                  </a>

                  <div className="ml-5">
                    <h1 className="text-[19.2px] font-semibold">
                      $100 Startup
                    </h1>
                    <h2 className="text-[#0dd6b8]">Available</h2>
                  </div>
                </div>

                <div>
                  <button className=" hover:bg-[#0dd6b8] bg-white rounded-sm text-black mx-2 my-3 px-8 py-2 text-[14px] hover:text-white ">
                    Add to cart
                  </button>
                  <button className="hover:bg-red-500 bg-white rounded-sm text-black mx-2 my-3 px-8 py-2 text-[14px] hover:text-white ">
                    delete
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between px-20 mb-5">
                <div className=" flex items-center justify-between gap-10">
                  <h1>2.</h1>
                  <a className="ml-5" href="/">
                    <img
                      className="h-28 w-20 rounded-sm"
                      src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg"
                      alt=""
                    />
                  </a>

                  <div className="ml-5">
                    <h1 className="text-[19.2px] font-semibold">
                      $100 Startup
                    </h1>
                    <h2 className="text-[#0dd6b8]">Available</h2>
                  </div>
                </div>

                <div>
                  <button className=" hover:bg-[#0dd6b8] bg-white rounded-sm text-black mx-2 my-3 px-8 py-2 text-[14px] hover:text-white ">
                    Add to cart
                  </button>
                  <button className="hover:bg-red-500 bg-white rounded-sm text-black mx-2 my-3 px-8 py-2 text-[14px] hover:text-white ">
                    delete
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between px-20 pb-5">
                <div className=" flex items-center justify-between gap-10">
                  <h1>3.</h1>
                  <a className="ml-5" href="/">
                    <img
                      className="h-28 w-20 rounded-sm"
                      src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg"
                      alt=""
                    />
                  </a>

                  <div className="ml-5">
                    <h1 className="text-[19.2px] font-semibold">
                      $100 Startup
                    </h1>
                    <h2 className="text-[#0dd6b8]">Available</h2>
                  </div>
                </div>

                <div>
                  <button className=" hover:bg-[#0dd6b8] bg-white rounded-sm text-black mx-2 my-3 px-8 py-2 text-[14px] hover:text-white ">
                    Add to cart
                  </button>
                  <button className="hover:bg-red-500 bg-white rounded-sm text-black mx-2 my-3 px-8 py-2 text-[14px] hover:text-white ">
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
