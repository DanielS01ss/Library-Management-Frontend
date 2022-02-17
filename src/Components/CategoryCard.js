import React from "react";
import Art from "../Images/CardImages/art.jpg";


const CategoryCard = (props)=>{

 return(
   <div className="mx-10 mx-10 my-10 w-96 rounded-lg bg-amber-100 shadow-sm shadow-xl">
      <img src={props.image} className="rounded" />
      <div className="px-4 py-3">
       <p className="text-2xl">{props.title} </p>
       <p className="py-6"><a className=""> Borrow now  </a></p>
      </div>
   </div>
 )

};

export default CategoryCard;
