import {createSelector} from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const SelectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumaltedQuantity, cartitem)=>accumaltedQuantity+cartitem.quantity,0)
);
