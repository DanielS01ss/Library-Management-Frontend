import React from "react";
import "../Styles/Footer.css";
import BookLogo from "../Images/imageediffirstt_1_4786011677.png";

const Footer = ()=>{


  return(
    <div className="w-100 footer my-3 flex justify-around flex-row">
      <img src={BookLogo} className="w-[90px] px-1 py-5"/>
      <p><i class="fa-brands text-4xl hover:text-blue-600  py-10 fa-twitter"></i></p>
      <p><i class="fa-brands text-4xl  hover:text-blue-700 py-10 fa-facebook-f"></i></p>
      <p><i class="fa-brands text-4xl hover:text-red-400 py-10 fa-instagram"></i></p>
    </div>
  );
};

export default Footer;
