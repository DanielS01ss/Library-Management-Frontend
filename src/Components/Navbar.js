import React from "react";
import MainIcon from "./MainIcon.jsx";

const Navbar = ()=>{


    return(
      <nav className="bg-white shadow-lg mx-auto">
        <div className=" mx-auto px-10 py-3">
          <div className="flex">
            <div className="w-[120px]">
              <MainIcon/>
              <p className="px-5">Mous Libri</p>
            </div>
            <div className="px-40 py-9">
              <ul className="hidden  xl:flex content-around">
                  <li className="text-2xl px-10">Home</li>
                  <li className="text-2xl px-10">Shop</li>
                  <li className="text-2xl px-10">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
};

export default Navbar;
