import React from "react";

const Java = () => {
  return (
    <div className="flex justify-center items-center mb-10">
      
        <div className=" relative h-52 w-32 hover:h-60 hover:w-40">
          <a className="flex justify-center " href="/">
            <div className="h-40 w-40 bg-gradient-to-t from-black absolute -bottom-1 opacity-0 hover:opacity-100">
              <button className='hover:bg-[#0dd6b8] bg-white text-black mx-2 my-3 px-5 py-2 rounded-sm text-[14px] hover:text-white absolute bottom-10 left-1 '>
                  Add to Wishlist
              </button>
              <button className=' hover:bg-[#0dd6b8] bg-white rounded-sm text-black mx-2 my-3 px-8 py-2 text-[14px] hover:text-white absolute bottom-0 left-1 '>
                  Add to cart
              </button>
            </div>
            <img
              className="bg-cover static rounded-sm"
              src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg"
              alt=""
            />
          </a>
          <h1 className="flex items-center justify-center text-[16px] font-semibold">$100 Startup</h1>
        </div>
      
    </div>
  );
};

export default Java;
