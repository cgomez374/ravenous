import React from "react";
import "../App.css";


const Business = ({ business }) => {
  return (
    <div className="col">
      <img src={business.imageSrc} alt={business.name} />
      <h4>{business.name}</h4>
      <div className="row">
        <div className="col">
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{business.state + ", " + business.zipCode}</p>
        </div>
        <div className="col">
          <p>{business.category}</p>
          <p>{business.rating} stars</p>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
