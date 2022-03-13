import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousal = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
      };    

  return (
    <div className="overflow-hidden">
      <h2 className="text-[19.2px] font-semibold py-3 px-5">Popular Books</h2>
      <Slider {...settings}>
        <div>
          <a className=" flex justify-center" href="/">
              <img className="h-64 w-44" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
          </a>
          <h1 className="flex items-center justify-center text-[16px] font-semibold">$100 Startup</h1>
        </div>
        <div>
          <a className=" flex justify-center" href="/">
              <img className="h-64 w-44" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
          </a>
          <h1 className="flex items-center justify-center text-[16px] font-semibold">Zero to one</h1>
        </div>
        <div>
          <a className=" flex justify-center" href="/">
              <img className="h-64 w-44" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
          </a>
          <h1 className="flex items-center justify-center text-[16px] font-semibold">Rich dad poor dad</h1>
        </div>
        <div>
          <a className=" flex justify-center" href="/">
              <img className="h-64 w-44" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
          </a>
          <h1 className="flex items-center justify-center text-[16px] font-semibold">dfhcnd</h1>
        </div>
        <div>
          <a className=" flex justify-center" href="/">
              <img className="h-64 w-44" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
          </a>
          <h1 className="flex items-center justify-center text-[16px] font-semibold">dfcd</h1>
        </div>
        <div>
          <a className=" flex justify-center" href="/">
              <img className="h-64 w-44" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
          </a>
          <h1 className="flex items-center justify-center text-[16px] font-semibold">$dfd</h1>
        </div>
        <div>
          <a className=" flex justify-center" href="/">
              <img className="h-64 w-44" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
          </a>
          <h1 className="flex items-center justify-center text-[16px] font-semibold">$1dgvcdp</h1>
        </div>
        <div>
          <a className=" flex justify-center" href="/">
              <img className="h-64 w-44" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
          </a>
          <h1 className="flex items-center justify-center text-[16px] font-semibold">cdgvrtup</h1>
        </div>
        <div>
          <a className=" flex justify-center" href="/">
              <img className="h-64 w-44" src="https://images-na.ssl-images-amazon.com/images/I/81DGMjAzdhL.jpg" alt="" />
          </a>
          <h1 className="flex items-center justify-center text-[16px] font-semibold">cfdcp</h1>
        </div>
        
      </Slider>
    </div>
  );
};

export default Carousal;
