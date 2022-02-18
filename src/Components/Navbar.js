import React from "react";


const Navbar = ()=>{


    return(
      <nav className="bg-white shadow-lg mx-auto">
        <div className=" mx-auto px-10 py-10">
          <div className="flex">
            BookLand
            <div className="px-40">
              <ul className="hidden  xl:flex content-around">
                  <li className="text-lg px-10">Home</li>
                  <li className="text-lg px-10">Shop</li>
                  <li className="text-lg px-10">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
};

export default Navbar;
