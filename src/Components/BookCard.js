import React from "react";
import BookImage from "../Images/BooksImage/img1.jpg";
import "../Styles/BookCard.css";

const BookCard = ()=>{

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
      <div className="w-80 px-10  boorder-4 border-black">
        <div className="border-2 px-5 border-gray hover:border-black">
          <img src={BookImage} className="px-6 py-9" />
          <p className="py-1 text-xl">Book Name</p>
          <p className="text-gray-600">Jay Sheety</p>
          <div className="py-5  flex  justify-between">
              <button className="text-lg hover:border-2 border-2 border-white hover:border-black px-2 hover:text-white hover:bg-black  hover:transition hover:ease-in rounded hover:duration-500">Borrow</button>
              <button className="heart-like-button bg-red"><i onClick={(evt)=>{handleLike(evt)}} className="text-lg hover:text-red-500  fa-regular fa-heart"></i></button>
          </div>
        </div>
      </div>
  );
};

export default BookCard;
