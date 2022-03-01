import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {faBoxOpen} from "@fortawesome/free-solid-svg-icons";
import {faBell} from "@fortawesome/free-regular-svg-icons";
import UserPic from "../Images/basic_user.jpg";

import "../Styles/AllBooksMain.css";

const BooksNav = ()=>{

 return(
    <div className="mx-10 flex flex-row justify-between">
       <div className="py-5">
        <p className="text-lg text-gray-500">Pick-up from</p>
        <p><FontAwesomeIcon icon={faLocationDot} className="px-2" />Brasov</p>
       </div>

       <input type="text" placeholder="Find the best books" className="my-5 w-[320px] border-2 px-9 rounded-full border-gray-200"/>
        <FontAwesomeIcon icon={faBoxOpen} className="py-8  text-2xl" />
        <FontAwesomeIcon icon={faBell} className="py-8 text-2xl" />
        <img src={UserPic} className="picture-photo my-5 rounded-full" />
    </div>
 );

};

export default BooksNav;
