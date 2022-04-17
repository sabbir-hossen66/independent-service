import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Register/Register.css'

const Register = () => {
    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='register-form'>
            <h2 className='header'>Please Register... !</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Enter your name' />

                <input type="email" name="email" id="" placeholder='Enter your email please' required />

                <input type="password" name="password" id="" placeholder='Type your password' required />
                <input type="submit" value="register" />
            </form>
            <p>Already have an account <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;