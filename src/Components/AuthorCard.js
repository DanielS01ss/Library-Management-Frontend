import React from "react";
import AuthorPicture from "../Images/Authors/dan_brown (1).jpg"

const AuthorCard = (props)=>{

  return(
    <div className="mx-8 my-5 sm:px-20">
      <img src={props.image} className="rounded-full w-40" />
      <p className="font-bold text-2xl">{props.name}</p>
      <p className="text-lg text-gray-500">{props.publishedBooks} Published books</p>
    </div>
  )
};

export default AuthorCard;
