import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Networking = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
      };  


  return (
    <div className="overflow-hidden">
        <div className="flex justify-between items-center py-3 px-5 border-b-[1px] border-gray-900 mb-5">
          <h1 className="text-[19.2px] font-semibold px-2 py-3">
            Networking
          </h1>
          <button className="bg-[#0dd6b8] mx-2 my-3 p-1 rounded-md text-[14px] text-white">
            View More
          </button>
        </div>
    <Slider {...settings}>
      <div>
        <a className=" flex justify-center" href="/">
            <img className="h-52 w-32" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
        </a>
        <h1 className="flex items-center justify-center text-[16px] font-semibold">$100 Startup</h1>
      </div>
      <div>
        <a className=" flex justify-center" href="/">
            <img className="h-52 w-32" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
        </a>
        <h1 className="flex items-center justify-center text-[16px] font-semibold">Zero to one</h1>
      </div>
      <div>
        <a className=" flex justify-center" href="/">
            <img className="h-52 w-32" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
        </a>
        <h1 className="flex items-center justify-center text-[16px] font-semibold">Rich dad poor dad</h1>
      </div>
      <div>
        <a className=" flex justify-center" href="/">
            <img className="h-52 w-32" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
        </a>
        <h1 className="flex items-center justify-center text-[16px] font-semibold">dfhcnd</h1>
      </div>
      <div>
        <a className=" flex justify-center" href="/">
            <img className="h-52 w-32" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
        </a>
        <h1 className="flex items-center justify-center text-[16px] font-semibold">dfcd</h1>
      </div>
      <div>
        <a className=" flex justify-center" href="/">
            <img className="h-52 w-32" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
        </a>
        <h1 className="flex items-center justify-center text-[16px] font-semibold">$dfd</h1>
      </div>
      <div>
        <a className=" flex justify-center" href="/">
            <img className="h-52 w-32" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
        </a>
        <h1 className="flex items-center justify-center text-[16px] font-semibold">$1dgvcdp</h1>
      </div>
      <div>
        <a className=" flex justify-center" href="/">
            <img className="h-52 w-32" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
        </a>
        <h1 className="flex items-center justify-center text-[16px] font-semibold">cdgvrtup</h1>
      </div>
      <div>
        <a className=" flex justify-center" href="/">
            <img className="h-52 w-32" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
        </a>
        <h1 className="flex items-center justify-center text-[16px] font-semibold">cfdcp</h1>
      </div>
      
    </Slider>
  </div>
  )
}

export default Networking