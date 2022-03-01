import React from "react";
import "../Styles/LeftNav.css";
import BookImage from "../Images/book-logo.svg";
import LogoBox from "./LogoBox";
import FilterBoxNav from "./FilterBoxNav";
import Location from "./Location"
import BooksNav from "./BooksNav";
import "../Styles/AllBooksMain.css";

const LeftNav = ()=>{

  return(
    <div className="w-80 fixed">
      <div className="z-index">
        <LogoBox />
        <FilterBoxNav />
        <Location />
      </div>
    </div>
  );
}

export default LeftNav;
