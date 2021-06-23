import React from "react";

const ListOfItems = ({ items }) => {
  const getSubListItems = () => {
    const menu_column1 = [];
    const menu_column2 = [];
    const menu_column3 = [];

    items.forEach((item) => {
      if (item.include_in_menu && item.include_in_menu_column2) {
        menu_column2.push(item);
      } else if (item.include_in_menu && item.include_in_menu_column3) {
        menu_column3.push(item);
      } else if (item.include_in_menu) {
        menu_column1.push(item);
      }
    });
    return { menu_column1, menu_column2, menu_column3 };
  };

  const listItems = getSubListItems();

  const showMenu1 = listItems.menu_column1.map((list) => (
    <li key={list.id}>{list.name}</li>
  ));

  const showuMenu2 = listItems.menu_column2.map((list) => (
    <li key={list.id}>{list.custom_category_name || list.name}</li>
  ));
  const showuMenu3 = listItems.menu_column3.map((list) => (
    <li key={list.id}>{list.custom_category_name || list.name}</li>
  ));

  return (
    <div className="list-of-items">
      <div className="submenu">
        <ul>{showMenu1}</ul>
        <ul>{showuMenu2}</ul>
        <ul>{showuMenu3}</ul>
      </div>
    </div>
  );
};

export default ListOfItems;
