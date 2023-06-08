import React from "react";
import "./Gallery.css";
const GalleryItem = ({ src, alt }) => {
  return (
    <div className="gallery-item">
      <a
        className="gallery-link"
        href={src}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={src} alt={alt} />
      </a>
    </div>
  );
};

export default GalleryItem;
