import React from "react";

const GridOfImages = ({ item }) => {
  console.log(item);
  return (
    <div className="grid-of-images">
      <div className="grid-image">
        <img src={item.dropdown_image_url} alt={item.ropdown_image_title} />
        <h5>{item.dropdown_image_title}</h5>
      </div>
      <div className="grid-image">
        <img src={item.dropdown_image_url1} alt={item.ropdown_image_title} />
        <h5>{item.dropdown_image_title1}</h5>
      </div>
      <div className="grid-image">
        <img src={item.dropdown_image_url2} alt={item.ropdown_image_title} />
        <h5>{item.dropdown_image_title2}</h5>
      </div>
      <div className="grid-image">
        <img src={item.dropdown_image_url3} alt={item.ropdown_image_title} />
        <h5>{item.dropdown_image_title3}</h5>
      </div>
      <div className="grid-image">
        <img src={item.dropdown_image_url4} alt={item.ropdown_image_title} />
        <h5>{item.dropdown_image_title4}</h5>
      </div>
    </div>
  );
};

export default GridOfImages;
