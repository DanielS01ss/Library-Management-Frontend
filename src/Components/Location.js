import React from "react";
import "../Styles/LeftNav.css";

const Location = ()=>{

    return(
      <div className="location-box">
        <div className="py-5">
          <p className="text-md font-bold px-3">Location</p>
          <div className="wrapper ">
           <input type="radio" name="select" id="option-1" checked />
           <input type="radio" name="select" id="option-2" />
           <input type="radio" name="select" id="option-3" />
             <label for="option-1" className="option option-1">
               <div className="dot"></div>
                <span className="text-lg">Brasov</span>
                </label>
             <label for="option-2" className="option option-2">
               <div className="dot"></div>
                <span className="text-md">Deliver home</span>
             </label>

            </div>
        </div>
      </div>
    );
};

export default Location;
