import React from "react"

import CustomButton from "../custom-button/custom-button.component.jsx";

import {connect} from "react-redux";

import CartItem from "../cart-item/cart-item-component.jsx"

import "./cart-dropdown.styles.scss";

import {selectCartItems} from "../../redux/cart/cart.selectors.js"

const CartDropdown = ({cartItems}) =>(

  <div className="cart-dropdown">
    <div className="cart-items"/>
    {
      cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/> )
    }
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

const mapStateToProps=(state)=>({
  cartItems:selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
