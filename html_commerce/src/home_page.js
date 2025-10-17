import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='home-page' style={{ textAlign: 'center', backgroundColor: '#00ffff', padding: '20px' }}>
            <h1>
                Welcome to the E-Commerce Website.
            </h1>

            <div>
                At our company, we're commited to giving you, our consumer, the highest quality of products possible.
            </div>
            <h2>
                Check out our <Link to="/products">Products</Link> page to see what we have to offer!
            </h2>
            <nav>
                
            </nav>
        </div>
        
    );
}
export default HomePage;