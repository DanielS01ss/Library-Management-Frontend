import React,{useState} from "react";
import BookImg from "../Images/BooksImage/images/a-Dolls-house.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons";
import {faCreditCard} from "@fortawesome/free-solid-svg-icons";
import {faListCheck} from "@fortawesome/free-solid-svg-icons";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import Icon from "./MainIcon.jsx";

const SuccessCard = ()=>{

  const [libraryPickup,setLibraryPickup] = useState(true);

  return(
    <div className="w-[100%] bg-white rounded-xl border-2 border-white shadow-xl">
      <div className="text-center py-10 text-2xl  font-bold">
      <div className="w-[20%] mx-auto">
        <Icon className="w-[10%]"/>
      </div>
          <p>Mouse Libri</p>
      </div>
      <div className="text-center my-10 text-3xl">
        <FontAwesomeIcon icon={faCircleCheck} className="text-[84px] text-green-600"/>
        <p className="py-5 font-bold ">Order was placed sucessfully!</p>
      </div>

      <div className="flex flex-col">
        <button className="hover:bg-black hover:text-white text-lg font-bold w-[60%] px-5 py-5 mx-auto  border-2 my-5 border-black rounded-lg">See orders <FontAwesomeIcon icon={faListCheck} className="px-9 text-2xl"/> </button>
        <button className="hover:bg-black hover:text-white text-lg font-bold w-[60%] px-5 py-5 mx-auto  border-2 my-5 border-black rounded-lg">Go back to borrow section <FontAwesomeIcon icon={faBook} className="px-9 text-2xl"/> </button>
      </div>

    </div>
  )

};

export default SuccessCard;
