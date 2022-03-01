import React from "react";
import LibraryCover from "../Images/library.jpg";
import "../Styles/AllBooksMain.css";
import StoreBookCard from "./StoreBookCard";

const BooksList = ()=>{


  return(
    <div>
      <div className="book-quote text-white ">
      <p className="text-3xl font-bold">“A book is a gift you can open again and again.”</p>
      <p className="text-lg mx-5">- Garrison Keillor -</p>
      </div>

      {/*<img src={LibraryCover} className="main-img mx-10 my-10 w-[800px] rounded-lg"/> */}
      <div className="image">
        <div className="blackLayer"></div>
      </div>
      <div className="books-container flex flex-row flex-wrap">
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
          <StoreBookCard/>
      </div>
    </div>
  )
};

export default BooksList;
