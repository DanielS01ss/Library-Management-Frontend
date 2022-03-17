import React from "react";
import CheckoutCardItemsList from "./CheckoutCardItemList";
import SuccessCard from "./SuccessCard";
import ShipmentDetails from "./ShipmentDetails";

const BookCheckoutPage = ()=>{

 return(
   <div className="w-[100%] bg-gray-300 min-h-full">
    <div className="w-[50%] md:w-[90%] sm:w-[95%] mx-auto py-20">
      {/*<CheckoutCardItemsList className="z-10"/>*/}
      {/*<SuccessCard/>*/}
      <ShipmentDetails/>
    </div>
   </div>
 )

};

export default BookCheckoutPage;
