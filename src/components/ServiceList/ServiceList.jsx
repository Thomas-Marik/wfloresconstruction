import React from "react";
import ServiceListItem from "./ServiceListItem";
import "./ServiceList.css";
const ServiceList = ({ services }) => {
  return (
    <div className="serviceList">
      {services.map((service) => (
        <ServiceListItem key={service.id} description={service.description} />
      ))}
    </div>
  );
};

export default ServiceList;
