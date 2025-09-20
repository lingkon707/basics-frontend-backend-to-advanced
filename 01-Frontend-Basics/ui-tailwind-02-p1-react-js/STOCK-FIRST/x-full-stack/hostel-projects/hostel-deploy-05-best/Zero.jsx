import React from "react";
import hostelData from "./hostel.json"; // use JSON file
import PersonAndBazar from "./PersonAndBazar"
import Brief from "./Brief"
import Check from "./Check"

export default function Dashboard() {
  

 

   

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <div>
         <PersonAndBazar/>
        <Brief/>
        <Check/>
       
      </div>

      
    </div>
  );
}
