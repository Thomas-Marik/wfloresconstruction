import React from "react";
import Gallery from "../../Gallery/Gallery";

import Logo from "../../../assets/images/wf.png";
import Yard from "../../../assets/images/yardView.jpeg";
import Deck1 from "../../../assets/images/decking.jpg";
import Side1 from "../../../assets/images/sidePrework.jpg";
import Side2 from "../../../assets/images/sideDuring.jpg";
import Side3 from "../../../assets/images/siding.jpg";
import Side4 from "../../../assets/images/sideBegin.jpg";
import Dump1 from "../../../assets/images/dumpDropoff.jpg";
import Dump2 from "../../../assets/images/dumpPickup.jpeg";
import Roof from "../../../assets/images/roof.jpg";
import Ramp1 from "../../../assets/images/ramp1.jpg";
import Ramp2 from "../../../assets/images/ramp2.jpg";
import Deck2 from "../../../assets/images/deck1.jpg";
import Deck3 from "../../../assets/images/deck2.jpg";
import Stairs from "../../../assets/images/stairs.jpg";

import "./GalleryScreen.css";
const images = [
  { id: 1, src: Logo, alt: "Image 1" },
  { id: 2, src: Yard, alt: "Image 2" },
  { id: 3, src: Deck1, alt: "Image 3" },
  { id: 4, src: Side1, alt: "Image 4" },
  { id: 5, src: Side2, alt: "Image 5" },
  { id: 6, src: Side3, alt: "Image 6" },
  { id: 7, src: Side4, alt: "Image 7" },
  { id: 8, src: Dump1, alt: "Image 8" },
  { id: 9, src: Dump2, alt: "Image 9" },
  { id: 10, src: Roof, alt: "Image 10" },
  { id: 11, src: Ramp1, alt: "Image 11" },
  { id: 12, src: Ramp2, alt: "Image 12" },
  { id: 13, src: Deck2, alt: "Image 13" },
  { id: 14, src: Deck3, alt: "Image 14" },
  { id: 15, src: Stairs, alt: "Image 15" },
];

const GalleryScreen = (props) => {
  return (
    <div className="gallery-container">
      <h1 className="headline">Gallery</h1>
      <Gallery images={images} />
    </div>
  );
};

export default GalleryScreen;
