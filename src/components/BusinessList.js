import React from "react";
import Business from "./Business";
import "../App.css";

const BusinessList = ({ businessList }) => {
  return (
    <ul className="row space-evenly">
      <li className="col">
        <Business business={businessList[0]} />
      </li>
      <li className="col">
        <Business business={businessList[1]} />
      </li>
      <li className="col">
        <Business business={businessList[2]} />
      </li>
      <li className="col">
        <Business business={businessList[3]} />
      </li>
    </ul>
  );
};

export default BusinessList;
