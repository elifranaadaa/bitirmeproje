import React, { useState } from "react";
import Images from "./images";
import "../styles/Gallery.css";

export const Gallery = () => {
  return (
    <div className="gallery">
      {Images.map((item, index) => {
        return (
          <div className="pics" key={index}>
            <img src={item.image} style={{ width: "100%" }} />
          </div>
        );
      })}
    </div>
  );
};
