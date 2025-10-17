import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, setCategory } from './store';
import ProductCard from './product_card';
import { AuthContext } from './auth_context';
import ProductDetails from './product_detail';
import { addToCart } from './store';

const Productlisting = ({ products, onAddToCart }) => {
    const dispatch = useDispatch();
    const term = useSelector(state => state.search.term);
    const category = useSelector(state => state.search.category);

    const handleSearchChange = (p) => {
        dispatch(setSearchTerm(p.target.value));
    };

    const handleCategoryChange = (e) => {
        dispatch(setCategory(e.target.value));
    };

    const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    };

    const filteredProducts = products.filter(
    p =>
      p.name.toLowerCase().includes(term.toLowerCase()) &&
      (category === 'all' || p.category === category)
  );

    return(
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          placeholder="Search products..."
          value={term}
          onChange={handleSearchChange}
        />
        <select value={category} onChange={handleCategoryChange} style={{ marginLeft: 10 }}>
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
          <option value="watches">Watches</option>
        </select>
      </div>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
    );
}
//session 8 here
export default Productlisting;