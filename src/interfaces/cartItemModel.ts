import menuItemModel from "./menuItemModel";

export default interface cartItemModel {
  id?: number;
  menuItemId: number;
  quantity: number;
  shoppingCartId: number;
  menuItem: menuItemModel;
}
