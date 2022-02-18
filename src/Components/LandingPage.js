import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import CategoryCard from "./CategoryCard";
import Section from "./Section";
import BookCard from "./BookCard";
import MostBorrowed from "./MostBorrowed";
import AuthorsSection from "./AuthorsSection";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

const LandingPage = ()=>{

  return(
    <div>
        <Navbar/>
        <Slider/>
        <Section/>
        <MostBorrowed/>
        <AuthorsSection/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
};


export default LandingPage;
