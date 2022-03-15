import React,{useState} from "react";
import BookImg from "../Images/BooksImage/images/a-Dolls-house.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons";


const CheckoutCardItemsList = ()=>{

  const [libraryPickup,setLibraryPickup] = useState(true);

  return(
    <div className="w-[100%] bg-white rounded-xl border-2 border-white shadow-xl">
      <div className="text-center py-10 text-2xl  font-bold">
          <h1>Checkout</h1>
      </div>

      <div className="flex flex-row justify-between">
        <div className="mx-10 my-10 flex flex-row ">
          <img src={BookImg} className="w-[90px]"/>
          <div className="mx-10">
            <p className="font-bold text-3xl">Nume Carte</p>
            <p className="italic text-xl">Autor</p>
            <p className="text-lg">Reviewuri</p>
          </div>

        </div>
        {
         libraryPickup?
         <div className="my-20 mx-8 font-bold">
         <FontAwesomeIcon icon={faBuildingColumns} className="px-4"/>
           Pick-up from library
         </div>
         :
         <div className="my-20 mx-8">
        <FontAwesomeIcon icon={faHouseChimney} className="px-4"/>
          Home Delivery
        </div>

        }
       </div>

       <div className="flex flex-row justify-between">
         <div className="mx-10 my-10 flex flex-row ">
           <img src={BookImg} className="w-[90px]"/>
           <div className="mx-10">
             <p className="font-bold text-3xl">Nume Carte</p>
             <p className="italic text-xl">Autor</p>
             <p className="text-lg">Reviewuri</p>
           </div>

         </div>
         {
          libraryPickup?
          <div className="my-20 mx-8 font-bold">
          <FontAwesomeIcon icon={faBuildingColumns} className="px-4"/>
            Pick-up from library
          </div>
          :
          <div className="my-20 mx-8">
         <FontAwesomeIcon icon={faHouseChimney} className="px-4"/>
           Home Delivery
         </div>

       }

      </div>

        


    </div>
  )

};

export default CheckoutCardItemsList;
