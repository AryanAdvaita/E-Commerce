import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './auth_context';
//this was changed to class component
//session 11/12 here
class ProductCard extends React.Component {
    static contextType = AuthContext;
    state = { product: null };
    componentDidMount() {
        fetch(`/api/products/${this.props.id}`)
        .then(res => res.json())
        .then(data => this.setState({ product: data }));
    }
    render(){
        //const {product, onAddToCart} = this.props;
        const { product, onAddToCart } = this.props;
        const { user } = this.context;

        if (!product) return <div>Loading...</div>;

        const { id, name, image, price, inStock } = product;

        return(
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', width: '200px', textAlign: 'center' }}>
            <Link to={`/product/${id}`}>
                <img src={image} alt={name}/>
            </Link>
            
            <h3><Link to={`/product/${id}`}>{name}</Link></h3>
            <p>${price}</p>

            {inStock ? (
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
            ) : (
          <span style={{ color: 'red', fontWeight: 'bold' }}>Sold Out</span>
            )}
            
            
        </div>
     );

    }
    
};
//session 8 here
export default ProductCard;
