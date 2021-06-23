import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import NavBarOnHover from "./NavBarOnHover";

const menus = [
  { id: 0, menuLink: "latest" },
  { id: 1, menuLink: "brands" },
  { id: 2, menuLink: "clothing" },
  { id: 3, menuLink: "footwear" },
  { id: 4, menuLink: "accessories" },
  { id: 5, menuLink: "lifestyle" },
  { id: 6, menuLink: "gifts" },
  { id: 7, menuLink: "sale" },
  { id: 8, menuLink: "launches" },
  { id: 9, menuLink: "features" },
];

const NavBar = () => {
  const [currLink, setCurrLink] = useState("");
  // let onNavBarHoverStyle = {
  //   display: "none",
  // };

  const listofmenus = menus.map((item, id) => (
    <Link
      key={item.menuLink}
      className="menu-item"
      to={{ state: { linkName: item.menuLink.toUpperCase().toString() } }}
    >
      <li
        onMouseOver={(e) => {
          e.stopPropagation();
          setCurrLink(item.menuLink);
        }}
      >
        {item.menuLink.toUpperCase().toString()}
      </li>
    </Link>
  ));
  return (
    <div className="main-container">
      <ul className="menu-bar">{listofmenus}</ul>
      {/* <NavBarOnHover style={onNavBarHoverStyle} /> */}

      {currLink && <NavBarOnHover link={currLink} />}
    </div>
  );
};

export default NavBar;
