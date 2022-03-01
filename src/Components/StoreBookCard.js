import React from "react";
import BookImage from "../Images/BooksImage/images/a-Dolls-house.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../Styles/AllBooksMain.css";

const StoreBookCard = ()=>{

  const handleLike = (evt)=>{
    if(evt.target.classList.contains("fa-regular"))
    {
      evt.target.classList.add("liked-shaked");
    }
    else if(evt.target.classList.contains("liked-shaked")) {
        evt.target.classList.remove("liked-shaked");
    }
      evt.target.classList.toggle("fa-regular");
      evt.target.classList.toggle("fa-solid");
      evt.target.classList.toggle("text-red-500");

  }


  return(
    <div className="w-[180px] mx-5 my-5">
    <div className="transparent-tags-card-container flex justify-between px-1 my-1 flex-row">
      {/*<div className="transparent-tag font-bold"><p>Available <FontAwesomeIcon className="text-green-500" icon={faCircleCheck} /></p></div>*/}
      <div className="transparent-tag font-bold"><p>Not Available <FontAwesomeIcon className="text-red-500" icon={faCircleXmark}/></p></div>

      <div className="transparent-tag"><FontAwesomeIcon className="text-yellow-500" icon={faStar}/><span>5.0</span></div>
    </div>
      <img src={BookImage} className="rounded-lg "/>
      <p className="text-lg font-bold">A doll's House</p>
      <p className="text-sm">Henrik Isben</p>
      <div className="py-5  flex  justify-between">
          <button className="text-lg hover:border-2 border-2 border-white hover:border-black px-2 hover:text-white hover:bg-black  hover:transition hover:ease-in rounded hover:duration-500">Borrow</button>
          <button className="heart-like-button bg-red"><i onClick={(evt)=>{handleLike(evt)}} className="text-lg hover:text-red-500  fa-regular fa-heart"></i></button>
      </div>
    </div>
  )

};

export default StoreBookCard ;
