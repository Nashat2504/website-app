import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CSS/Payment.css';
import { ShopContext } from '../Context/ShopContext';

// ✅ إضافة context لتسجيل الدخول
import { AuthContext } from '../Context/AuthContext'; // تأكد أن الملف موجود

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate(); // ✅ لإعادة التوجيه

  const totalAmount = location.state?.totalAmount || 0;
  const { all_product, cartItems } = useContext(ShopContext);

  // ✅ استخدام حالة تسجيل الدخول من الكونتكست
  const { isLoggedIn } = useContext(AuthContext);

  // ✅ شرط: إذا المستخدم غير مسجل يتم تحويله إلى صفحة تسجيل الدخول
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', {
        state: { from: location.pathname }, // حفظ الصفحة الأصلية
        replace: true,
      });
    }
  }, [isLoggedIn, navigate, location]);
  
  

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`تمت عملية الدفع بمبلغ ${totalAmount}$ بنجاح ✅!`);
  };

  return (
    <div className="payment-container">
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="left-section">
          <div className="billing">
            <h2>Billing Address</h2>

            <label>Full Name:</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            <label>Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            <label>City:</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            <div className="row">
              <div className="col">
                <label>State:</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} required />
              </div>
              <div className="col">
                <label>Zip Code:</label>
                <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
              </div>
            </div>

            <h2>Payment</h2>
            <label>Accepted Cards:</label>
            <div className="card-icons">
              <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="paypal" />
              <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="mastercard" />
              <img src="https://img.icons8.com/color/48/000000/amex.png" alt="amex" />
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" />
            </div>
            <label>Name on Card:</label>
            <input type="text" name="cardName" value={formData.cardName} onChange={handleChange} required />
            <label>Credit Card Number:</label>
            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
            <div className="row">
              <div className="col">
                <label>Exp Month:</label>
                <input type="text" name="expMonth" value={formData.expMonth} onChange={handleChange} required />
              </div>
              <div className="col">
                <label>Exp Year:</label>
                <input type="text" name="expYear" value={formData.expYear} onChange={handleChange} required />
              </div>
              <div className="col">
                <label>CVV:</label>
                <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
              </div>
            </div>
            <button type="submit" className="checkout-btn">Proceed To Checkout</button>
          </div>
        </div>

        <div className="right-section">
          <h2>Order Summary</h2>
          <div className="order-summary">
            {all_product.map((item) => {
              if (cartItems[item.id] > 0) {
                return (
                  <div className="summary-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p>{item.name}</p>
                      <p>{cartItems[item.id]} × ${item.new_price}</p>
                    </div>
                    <p>${cartItems[item.id] * item.new_price}</p>
                  </div>
                );
              }
              return null;
            })}
            <hr />
            <div className="summary-total">
              <strong>Total: ${totalAmount}</strong>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
