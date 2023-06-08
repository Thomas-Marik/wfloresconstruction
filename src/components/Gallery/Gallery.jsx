import React from "react";
import GalleryItem from "./GalleryItem";
import "./Gallery.css";

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <GalleryItem key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default Gallery;
