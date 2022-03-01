import React from "react";
import LeftNav from "./LeftNav";
import FilterBoxNav from "./FilterBoxNav";
import BooksNav from "./BooksNav";
import BooksList from "./BooksList";

import "../Styles/AllBooksMain.css";

const AllBooks = ()=>{

    return(
      <div>
        <LeftNav/>
        <div className="main-margin w-100">
            <BooksNav/>
            <BooksList/>
        </div>
      </div>
    );
};

export default AllBooks;
