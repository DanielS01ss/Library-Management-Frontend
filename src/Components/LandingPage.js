import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import CategoryCard from "./CategoryCard";


const LandingPage = ()=>{

  return(
    <div>
        <Navbar/>
        <Slider/>
        <CategoryCard title="Arts & Photography" image={Art}/>
    </div>
  )
};


export default LandingPage;
