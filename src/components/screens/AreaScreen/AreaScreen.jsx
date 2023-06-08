import React from "react";
import Map from "../../../assets/images/areaofcoverage.png";

import "./AreaScreen.css";
const AreaScreen = () => {
  return (
    <div className="area-container">
      <div className="areaScreen-container">
        <div className="map-info">
          <h4 className="info">
            For nearly 10 years we have been servicing the northern OBX area of
            NC. Mainly dealing with Currituck and Dare counties, we have served
            the cities of Kitty Hawk, Kill Devil Hills, Corolla, Duck, and Nags
            Head.
          </h4>
        </div>
        <div className="map-container">
          <img className="area-map" src={Map} alt="map" />
        </div>
      </div>
    </div>
  );
};

export default AreaScreen;
