import React from "react";
import "../Styles/Slider.css";
import BackgroundImage from "../Images/jeremy-bezanger-u_bQ_vHqAYM-unsplash.jpg";
import BooksImage from "../Images/imageedit_1_4786011677.png";

const Slider = ()=>{

  return(
  <div>
    <div className="w-full  slider">

     <div className="w-full h-full flex flex-column flex-wrap slider-content">
      <div className="content-end sm:px-4  sm:py-5 md:px-5 md:py-10 lg:px-10 lg:py-20">
        <div className="slideinanimation">
          <p className="text-lg text-white">BEST EDITORS</p>
          <p className="text-2xl text-white">Featured Books of the Month</p>
        </div>

        <div className="py-20 md:py-10 lg:py-40 slideinanimation">
          <button className="py-5 px-5  hover:text-black hover:bg-white ease-in duration-250  text-xl text-white btn border-2 border-white ">See More</button>
        </div>
     </div>
      <img src={BooksImage} className="px-5 my-5 slideinright slider-books-image" />
    </div>

    </div>
    </div>
  )
};

export default Slider;
