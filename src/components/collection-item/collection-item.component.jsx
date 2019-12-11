import React from 'react';
import {connect} from "react-redux";

import {addItem} from "../../redux/cart/cart.actions.js"

import "./collection-item.style.scss";

import CustomButton from "../custom-button/custom-button.component.jsx"



const CollectionItem = ({item, addItem}) => {
  return(
  <div className="collection-item">
    <div className="image" style={{backgroundImage:`url(${item.imageUrl})`}}></div>
    <div className="collection-footer">
      <span className="name">{item.name}</span>
      <span className="name">{item.price}</span>
    </div>
    <CustomButton onClick={()=>addItem(item)}inverted>Add To Cart</CustomButton>
  </div>
)};


const mapDispatchToProps = (dispatch) =>({
  addItem: item =>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);
