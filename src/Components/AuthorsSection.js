import React from "react";
import AuthorCard from "./AuthorCard";
import AuthorPicture from "../Images/Authors/dan_brown (1).jpg"
import StephanKing from "../Images/Authors/Stephen+King+square-2.jpg";


const AuthorsSection = ()=>{

  return(
    <div className="py-1 px-10  w-100 border-2">
    <p className="text-3xl px-20  my-10 font-bold">Best Authors</p>
     <div className="flex flex-row flex-wrap">
        <AuthorCard image={AuthorPicture} name="Dan Brown" publishedBooks={25} />
        <AuthorCard image={StephanKing} name="StephanKing" publishedBooks={63} />
        <AuthorCard image={StephanKing} name="StephanKing" publishedBooks={63} />
     </div>
    </div>
  )
};

export default AuthorsSection;
