import "./Item.css";
import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className='item-card'>
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <img className='item-image' src={props.image} alt={props.name} />
      </Link>
      <p className='item-name'>{props.name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>${props.new_price}</div>
        <div className='item-price-old'>${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
