import React from "react";
import MainIcon from "./MainIcon.jsx";

const Profile = ()=>{

  return(
    <div>
    <nav className="flex flex-row profile-nav shadow-md py-3 justify-center">
      <div className="">
        <div className="py-1 w-[112px]">
        <MainIcon/>
        </div>
        <p className="text-2xl">Mous Libri</p>
      </div>
    </nav>


    </div>
  )
};

export default Profile;
