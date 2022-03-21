import React from "react";
import MainIcon from "./MainIcon.jsx";
import Button from "./Button";

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
    <div className="px-5 py-5">
    <Button name="Go Home"/>
    </div>
    <div>
      {/*
        Photo
        First name
        Last Name
        Country
        City
        Address
        Phone Number
        */}
    </div>

    {/*
      Orders:
    */}

    
    </div>
  )
};

export default Profile;
