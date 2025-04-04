import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../component/Breadcrums/Breadcrum';
import ProductDisplay from '../component/ProductDisplay/ProductDisplay'; // Adjust the path as necessary
import RelatedProduct from '../component/RelatedProduct/RelatedProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Ensure productId is a number
  const product = all_product.find((e) => e.id === Number(productId));

  // Debugging line
  console.log('Product:', product);

  // Check if product is found
  if (!product) {
    return <div></div>; // Handle the case where product is not found
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <RelatedProduct/>
    </div>
  );
};

export default Product;