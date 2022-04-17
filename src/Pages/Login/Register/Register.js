import React from 'react';
import '../Register/Register.css'

const Register = () => {
    return (
        <div className='register-form'>
            <h2>Please register</h2>
            <form>
                <input type="text" name="name" id="" placeholder='Enter your name' />

                <input type="email" name="email" id="" placeholder='Enter your email please' required />

                <input type="password" name="password" id="" placeholder='Type your password' required />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;