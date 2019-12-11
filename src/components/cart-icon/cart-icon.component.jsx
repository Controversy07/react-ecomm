import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import {connect} from "react-redux";

import {toogleCartHidden} from "../../redux/cart/cart.actions.js";

import {SelectCartItemsCount} from "../../redux/cart/cart.selectors.js"

const CartIcon =({toogleCartHidden, itemCount})=>(
  <div className="cart-icon" onClick={toogleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">{itemCount}</span>
  </div>
);


const mapDispatchToProps = (dispatch) =>({

  toogleCartHidden:()=>dispatch(toogleCartHidden())
})


const mapStateToProps=(state)=>({
  itemCount:SelectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
