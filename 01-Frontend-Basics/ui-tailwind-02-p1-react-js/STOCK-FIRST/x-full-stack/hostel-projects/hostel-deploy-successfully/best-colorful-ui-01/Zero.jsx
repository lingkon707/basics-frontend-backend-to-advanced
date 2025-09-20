import React from "react";
import hostelData from "./hostel.json"; // use JSON file
import PersonData from "./PersonData"
import PersonAndBazar from "./PersonAndBazar"
import Brief from "./Brief"
import Check from "./Check"
import Dashboarx from "./Dashboarx"

export default function Dashboard() {
  
   
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <div>
        <Dashboarx/>
         <PersonAndBazar/>
         {/* <PersonData/> */}
        <Brief/>
        <Check/>
       
      </div>

      
    </div>
  );
}
