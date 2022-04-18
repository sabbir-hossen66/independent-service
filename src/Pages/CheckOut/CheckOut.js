import React from 'react';
import { Link } from 'react-router-dom';
import '../CheckOut/CheckOut.css'

const CheckOut = () => {
    return (
        <div>
            <h3 className='header text-center'>Please Checkout Your booking....!</h3>
            <div className='text-center'>
                <Link to='/login'>
                    <button className='proced-button'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default CheckOut;