import React from "react";

const Button = ({name,execute})=>{

  return(
    <button className="button px-3 py-2  border-2 text-lg border-black rounded-md text-black hover:bg-black hover:text-white" onClick={()=>{execute();}}>{name}</button>
  );
};

export default Button;
