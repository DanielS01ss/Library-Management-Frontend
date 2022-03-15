import React from "react";
import CheckoutCardItemsList from "./CheckoutCardItemList";


const BookCheckoutPage = ()=>{

 return(
   <div className="w-[100%] bg-gray-100 min-h-full">
    <div className="w-[80%] md:w-[90%] sm:w-[95%] mx-auto py-20">
      <CheckoutCardItemsList className="z-10"/>
    </div>
   </div>
 )

};

export default BookCheckoutPage;
