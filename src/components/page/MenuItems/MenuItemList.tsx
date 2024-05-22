import React from "react";
import { useState, useEffect } from "react";
import { menuItemModel } from "../../../interfaces";
import MenuItemCard from "./MenuItemCard";
import { useGetMenuItemsQuery } from "../../../apis/menuItemApi";
import { UseDispatch, useDispatch } from "react-redux";
import { setMenuItem } from "../../../store/redux/menuItemSlice";
import { MainLoader } from "../Common";
function MenuItemList() {
  //const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  const { data, isLoading } = useGetMenuItemsQuery(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading) {
      dispatch(setMenuItem(data.result));
    }
  }, [isLoading]);

  if (isLoading) {
    return <MainLoader />;
  }

  return (
    <div className="container row">
      {data.result.length > 0 &&
        data.result.map((menuItem: menuItemModel, index: number) => (
          <MenuItemCard menuItem={menuItem} key={index} />
        ))}
    </div>
  );
}

export default MenuItemList;
