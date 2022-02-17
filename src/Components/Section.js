import React from "react";
import Art from "../Images/CardImages/art.jpg";
import FoodAndDrink from "../Images/CardImages/food_and_drink.jpg";
import Health from "../Images/CardImages/health.jpg";
import Romance from "../Images/CardImages/romance.jpg";
import CategoryCard from "./CategoryCard.js";

const Section = ()=>{

  return(
    <div className="md:py-20 lg:py-20 sm:py-5 sm:px-20  mx-auto w-full">
      <div className="flex sm:flex-col md:flex-row lg:flex-row justify-between sm:px-10 px-40 mx-auto">
        <p className="md:text-lg lg:text-2xl sm:text-xl text-3xl">Featured Categories</p>
        <p>See All</p>
      </div>
      <div className="flex flex-wrap flex-row">
      <CategoryCard title="Arts & Photography" image={Art}/>
      <CategoryCard title="Food and Drinks" image={FoodAndDrink}/>
      <CategoryCard title="Health" image={Health}/>
      <CategoryCard title="Romance" image={Romance}/>
      </div>
    </div>
  )
};

export default Section;
