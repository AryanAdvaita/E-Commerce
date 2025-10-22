import React from 'react';
import { Link } from 'react-router-dom';
import dollar from './dollar.png';

const HomePage = () => {
    return (
        <div >

            <div className='home-page' style={{ textAlign: 'center', backgroundColor: '#00ffff', padding: '20px' }}>
                <h1>
                    Welcome to AdvaitaCorp.
                </h1>

                <div>
                    At our company, we're commited to giving you, our consumer, the highest quality of products possible.
                </div>
                <h2>
                    Check out our <Link to="/products">Products</Link> page to see what we have to offer! 
                </h2>
                <img src={dollar} alt='logo' width="60" height="60"/>
                
            </div>
            <div className='home-page-2' style={{ textAlign: 'center', backgroundColor: '#172E58', padding: '20px' , color: 'white' }}>
                <div>
                    About Us:
                </div>
                <div>
                    AdvaitaCorp is a leading retailer dedicated to providing top-notch products that cater to your needs. Our mission is to enhance your lifestyle with quality, affordability, and exceptional customer service. Whether you're looking for the latest electronics, stylish watches, or captivating books, we've got you covered. Join us on this journey and experience the difference with AdvaitaCorp!
                </div>
                <p>
                    Contact Us:
                </p>
                
            </div>
        </div>
        
        
    );
}
export default HomePage;