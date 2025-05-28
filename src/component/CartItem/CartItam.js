import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CartItem.css";
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItem = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const totalAmount = getTotalCartAmount(); // ✅ حساب المبلغ الإجمالي
    navigate("/payment", { state: { totalAmount } }); // ✅ الإرسال إلى صفحة الدفع
  };

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
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='cartitem-format cartitem-format-main'>
                <img src={e.image} alt='' className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className='cartitam-remove-icon' src={remove_icon} onClick={() => removeFromCart(e.id)} alt='' />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className='cartitem-down'>
        <div className='cartitem-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className='cartitems-total-itam'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cartitems-total-itam'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-itam'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button> {/* ✅ زر التوجيه مع البيانات */}
        </div>
        <div className='cartitem-promocode'>
          <p>If you have a promo code, enter it here:</p>
          <div className='cartitem-promobox'>
            <input type='text' placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
