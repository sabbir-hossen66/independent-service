import React from 'react';
import '../SocialLogin/SocialLogin.css'
import google from '../../../images/google-logo.png'
import github from '../../../images/github.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-black w-50 '></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-black w-50'></div>
            </div>
            <div>
                <button className='google-btn'>
                    <img style={{ width: "30px" }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button><br />
                <button className='google-btn'>
                    <img style={{ width: "30px" }} src={github} alt="" />
                    <span className='px-2'>Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;