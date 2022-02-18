import React from "react";
import BookCard from "./BookCard";


const MostBorrowed = ()=>{

  return(
    <div className="px-20 mx-auto">
      <p className="text-2xl px-10 font-bold">Most borrowed books</p>
      <div className="flex py-20 px-10 flex-row flex-wrap">
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
      </div>
    </div>
  );
};

export default MostBorrowed;
