import React from "react";
import BookImg from "../Images/BooksImage/images/a-Dolls-house.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faStarHalf} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import AllBooksMain from "../Styles/AllBooksMain.css";

const BookDetails = ()=>{

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
  <div>
   <button className="mx-10 my-7 text-xl border-2 border-black px-3 rounded-lg hover:bg-black hover:text-white py-2 font-bold "><FontAwesomeIcon icon={faAngleLeft} /> Back</button>

   <div className="w-50 mx-20 sm:my-1 sm:mx-1 border-2 my-10 px-10 py-10 rounded-lg border-black px-3">

    <div className=" mx-auto w-[90%] my-10 flex flex-row flex-wrap">
      <div>
        <img src={BookImg} className="w-[80%]"/>
      </div>
      <div className="w-[60%] my-10">
        <p className="text-4xl my-3 font-bold">Nume Carte</p>
        <p className="text-lg italic">Author</p>
        <p className="text-xl my-5">Rating: <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStarHalf}/> <span>4.5</span> </p>
        <p className="my-9 text-2xl">Available <FontAwesomeIcon icon={faCircleCheck} className="text-2xl text-green-500"/> </p>
        <p className="my-9 text-2xl">Not Available <FontAwesomeIcon icon={faCircleXmark} className="text-2xl text-red-500"/> </p>
      </div>
    </div>
    <div className="mx-20 sm:w-[100%] sm:mx-0 w-[80%]  ">
      <p className="text-2xl description-box w-[100%]">Description</p>
      <div className="my-10">
      <p className="mx-5 text-xl">
        Costel are 20 de ani si merge la mare cu Maria sotia si Ioana fiica lui dar si cu cumnatul Razvan impreuna cu sora cumnatului Ionela
      </p>
      </div>
    </div>
    <div className="py-5 w-[40%] mx-20 flex sm:mx-3   justify-between">
        <button className="text-3xl  hover:border-2 border-2 border-black hover:border-black px-4 py-2 hover:text-white hover:bg-black  hover:transition hover:ease-in rounded hover:duration-500">Borrow</button>
        <button className="heart-like-button bg-red"><i onClick={(evt)=>{handleLike(evt)}} className="text-3xl hover:text-red-500  fa-regular fa-heart"></i></button>
    </div>
  </div>
  </div>
  )

};

export default BookDetails;
