import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './store';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // In a real app, fetch product details by ID here.
  const product = {
    id,
    name: 'Sample Product',
    image: '/images/sample.jpg',
    price: 100,
    inStock: true
  };
  const handleAdd = () => {
    dispatch(addToCart(product));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: '200px' }} />
      <p>Price: ${product.price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
      
    </div>
  );
  //session 13 here
};

export default ProductDetails;