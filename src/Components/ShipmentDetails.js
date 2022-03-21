import React,{useState} from "react";
import "../Styles/RadioButtons.css";
import Icon from "./MainIcon.jsx";

const ShipmentDetails =()=>{

  const [newAdress,setNewAdress] = useState(false);

 return(
    <div className="w-[100%]  bg-white rounded-xl border-2 border-white shadow-xl">

        <div className="text-center py-10 text-2xl  font-bold">
        <div className="w-[20%] mx-auto">
          <Icon className="w-[10%]"/>
        </div>
            <p>Mouse Libri</p>
        </div>

      <h1 className="font-bold px-10 ">What address do you want your books to be delivered to?</h1>
      <div className="px-10 py-10 flex flex-col">
      <label className="radio-button">
        <input type="radio" name="radio" checked="checked"/>
        <span className="label-visible">
          <span className=" fake-radiobutton"></span>
            <span className="text-lg px-10">Address that is written in my account</span>
          </span>
        </label>

      <label className="radio-button">
       <input type="radio" name="radio"/>
       <span className="label-visible">
         <span className="fake-radiobutton"></span>
         <span className="text-lg px-10"> New Adress </span>
       </span>
      </label>
      </div>
   </div>
 );

};

export default ShipmentDetails;
