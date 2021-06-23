import React, { useEffect } from "react";
import ListOfItems from "./ListOfItems";
import GridOfImages from "./GridOfItems";
import testData from "../utility/testData";

const NavBarOnHover = ({ link }) => {
  //const [linkData, setLinkData] = React.useState([]);

  const getLinkData = (link) => {
    return testData.navCatagories.find(
      (data) => data.name.toLowerCase() === link.toLowerCase()
    );
  };

  const linkData = getLinkData(link) || null;

  if (!linkData) {
    return <div>Loading!</div>;
  }
  //console.log(linkData.children_data);

  return (
    <div className="show-navbar-on-hover">
      <div className="navbar-container">
        <ListOfItems items={linkData.children_data} />
        <GridOfImages item={linkData} />
      </div>
    </div>
  );
};

export default NavBarOnHover;
