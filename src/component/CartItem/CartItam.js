import React, { useContext } from 'react';
import "./CartItem.css";
import { ShopContext } from '../../Context/ShopContext'; // Ensure correct import
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItem = () => {
const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext); // Ensure cartItems is destructured here

return (
<div className='cartitem'>
<div className='cartitem-format-main'>
<p>Product</p>
<p>Title</p>
<p>Price</p>
<p>Quantity</p>
<p>Total</p>
<p>Remove</p>
</div>
<hr />
{all_product.map((e) => {
if (cartItems[e.id] > 0) { // Ensure cartItems is defined before using
return (
<div key={e.id}>
<div className='cartitem-format cartitem-format-main'>
<img src={e.image} alt='' className='carticon-product-icon' />
<p>{e.name}</p>
<p>{e.new_price}</p>
<button className='cartitem-quantity'>{cartItems[e.id]}</button>
<p> ${e.new_price * cartItems[e.id]}</p>
<img className='cartitam-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt='' />
</div>
<hr />
</div>
);
}
return null; // Return null if the condition is not met
})}
<div className='cartitem-down'>
    <div className='cartitem-total'>
        <h1> Cart Totals</h1>
        <div>
            <div className='cartitems-total-itam'>
                <p>Subtotal</p>
                <p>${ getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cartitems-total-itam'>
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-itam'>
                <h3>Total</h3>
                <h3> ${ getTotalCartAmount()}</h3>
            </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>        
    </div>
    <div className='cartitem-promocode'>
        <p>If you have a promo code, enter it here:</p>
        <div className='cartitem-promobox'>
            <input type='text' placeholder='Promo code'></input>
            <button>Submit</button>
        </div>
    </div>
</div>
</div>
);
}

export default CartItem;