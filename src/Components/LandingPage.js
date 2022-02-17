import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import CategoryCard from "./CategoryCard";
import Section from "./Section";
import BookCard from "./BookCard";

const LandingPage = ()=>{

  return(
    <div>
        <Navbar/>
        <Slider/>
        <Section/>
        <BookCard/>
    </div>
  )
};


export default LandingPage;
