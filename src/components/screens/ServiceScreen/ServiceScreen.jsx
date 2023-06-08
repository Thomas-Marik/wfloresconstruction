import React from "react";
import "./ServiceScreen.css";
import ServiceList from "../../ServiceList/ServiceList";

const services = [
  { id: 1, description: "- Deck Repair" },
  { id: 2, description: "- Window Replacement" },
  { id: 3, description: "- Exterior Trim " },
  { id: 4, description: "- Exterior Siding " },
  { id: 5, description: "- Dumpster Rental" },
  { id: 6, description: "- Debris Removal" },
];

const ServiceScreen = () => {
  return (
    <div className="service-container">
      <div className="service-list">
        <div className="service">
          <h1>List of Services</h1>
          <ServiceList services={services} />
        </div>
        <div className="service-info">
          <h3>Quotes on jobs are based on size and location </h3>
          <h4>For Construction Services Contact: </h4>
          <h5> Will Flores </h5>
          <h5>(252)-305-2287</h5>
          <a className="service-link" href="mailto:someone@example.com">
            <h5>fwillmer208@gmail.com</h5>
          </a>
          <h4>For Dumpster Services Contact:</h4>
          <h5>Yessika Varela</h5>
          <h5>(919)-702-6170</h5>
          <a className="service-link" href="mailto:yesskia85@live.com">
            <h5>yessika85@live.com</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceScreen;
