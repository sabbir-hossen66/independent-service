import React from 'react';
import '../NotFound/NotFound.css'
import error from '../../../images/found.webp'

const NotFound = () => {
    return (
        <div className='error-style'>
            <h2 className='text-center'>Sorry...!! <span style={{ color: 'red' }}>The Page isn't available</span></h2>
            <img className='w-70' src={error} alt="" />
        </div>
    );
};

export default NotFound;