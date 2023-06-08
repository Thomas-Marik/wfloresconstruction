import React from "react";

import "./ServiceListItem.css";

const ServiceListItem = ({ description }) => {
  return (
    <div className="service-list-item">
      <h4>{description}</h4>
    </div>
  );
};

export default ServiceListItem;
