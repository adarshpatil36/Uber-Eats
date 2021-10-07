import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RestaurantDetails from "./RestaurantDetails";

function InfoForms() {
  const [fields, updateFields] = useState({
    name: "Admin",
    email: "admin@example.com",
    mobile_no: "012345678",
  });

  return (
    <div className="container">
      <RestaurantDetails fields={fields} updateFields={updateFields} />
    </div>
  );
}

export default InfoForms;
