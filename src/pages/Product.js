import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../component/Breadcrums/Breadcrum';
import ProductDisplay from '../component/ProductDisplay/ProductDisplay';
import RelatedProduct from '../component/RelatedProduct/RelatedProduct';

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // استخدم useParams لاستخراج productId من الرابط
  const { productId } = useParams();

  // جلب بيانات المنتج من الـ API
  useEffect(() => {
    if (!productId) {
      setError('Product ID is missing');
      setLoading(false);
      return;
    }

    console.log("Product ID:", productId);
    console.log(`Full URL: https://monsef74.pythonanywhere.com/api/products/${productId}`);

    const fetchProduct = async () => {
      try {
        const response = await fetch("/api/products/1");
        
        console.log("Status Code:", response.status);

        const text = await response.text();
        console.log("Raw Response Body:", text);

        if (!response.ok) {
          throw new Error(`Network response was not ok. Status: ${response.status}`);
        }

        const data = JSON.parse(text);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  // ✅ إرسال تفاعل "view" تلقائيًا عند تحميل المنتج
  useEffect(() => {
    if (product) {
      const userId = localStorage.getItem("userId") || "guest"; // ممكن يكون مستخدم غير مسجل

      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: userId,
          productId: product.id,
          action: "view", //  نوع التفاعل
          timestamp: new Date().toISOString()
        })
      });
    }
  }, [product]);

  // ✅ دالة لإرسال تفاعل "click" مثلاً لما يضغط على صورة المنتج أو زر معين
  const handleProductClick = () => {
    const userId = localStorage.getItem("userId") || "guest";

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userId,
        productId: product?.id,
        action: "click", // 🟡 نوع التفاعل
        timestamp: new Date().toISOString()
      })
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <div>
      <Breadcrum product={product} />

      {/* ✅ مرر دالة click كـ prop لو عايز تربطها بزر أو عنصر داخل الكومبوننت */}
      <div onClick={handleProductClick}>
        <ProductDisplay product={product} />
      </div>

      <div>
        {/* عرض بيانات المنتج */}
        <h2>{product.name}</h2>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
        <p>Brand: {product.brand || 'Not Available'}</p>
        <p>Category: {product.category || 'Not Available'}</p>
      </div>

      <RelatedProduct />
    </div>
  );
};

export default Product;
