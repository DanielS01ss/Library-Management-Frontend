import React from "react";

const NewsLetter = ()=>{

  return(
      <div className="grid place-items-center h-20 my-5 py-40">
        <p className="text-3xl font-bold">Join Our Newsletter</p>
        <p className="text-lg text-gray-500 py-5">Signup to be the first to hear about exclusive stories, new books </p>
        <div>
          <input type="text" placeholder="Enter email to join newsletter" className="w-96 border-2 border-black px-3 py-3 " />
          <button className="mx-10 my-1 hover:border-2 hover:border-black border-2 border-black hover:text-white hover:bg-black text-xl rounded px-3 py-2">Subscribe</button>
        </div>
      </div>
  );

};


export default NewsLetter;
