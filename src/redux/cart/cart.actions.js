import {CartActionTypes} from "./cart.types.js"


export const toogleCartHidden= () =>({
  type:CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) =>({
  type: CartActionTypes.ADD_ITEM,
  payload:item
});
