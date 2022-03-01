import React from "react";
import "../Styles/LeftNav.css";
import BookImage from "../Images/logo.png";

const LogoBox = ()=>{

  return(
    <div className="border-2 border-gray-100 w-80 ">
      <div className="py-10">
       <div className="px-3 flex flex-row">
        <img src={BookImage} className="rounded w-[70px]"/>
        <p className="py-5 px-2 text-2xl">BookLand</p>
       </div>
      </div>
    </div>
  );
}

export default LogoBox;
