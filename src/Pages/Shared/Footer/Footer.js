import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()



    return (
        <footer className='text-center py-5'>
            <p><small><span className='copy-right'> Copyright ©{year}</span></small></p>
        </footer>
    );
};

export default Footer;