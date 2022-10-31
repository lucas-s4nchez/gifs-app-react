import React from "react";

export const GifItem = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
    </div>
  );
};
