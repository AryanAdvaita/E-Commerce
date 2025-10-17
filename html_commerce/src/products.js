import React from 'react';
import { useParams, Link } from 'react-router-dom';


const ProductPage = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>
                Welcome to the E-Commerce Website, product page.
            </h1>

            <h2>
                Product ID: {id}
            </h2>

            <div>
                At our company, we're commited to giving you, our consumer, the highest quality of products possible.
            </div>
            
            <nav>
                <Link to="/home_page">Home Page</Link>
                <Link to="/cart">Shopping Cart</Link>
            </nav>


        </div>
    )
}
export default ProductPage;