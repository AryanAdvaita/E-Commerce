import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, setCategory } from './store';
import ProductCard from './product_card';
import { AuthContext } from './auth_context';
import ProductDetails from './product_detail';
import { addToCart } from './store';

const UserRegistration = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { user, login, logout } = React.useContext(AuthContext);
    return(
        <div style={{ padding: 20 }}>
        <h2>User Registration</h2>
        {user ? (
            <div>
                <p>Welcome, {user.username}!</p>
                <button onClick={logout}>Logout</button>
            </div>
        ) : (
            <form onSubmit={(e) => {
                e.preventDefault();
                login({ username, email });
            }}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button> 
            </form>
        )}
    </div>
    )
}

export default UserRegistration;