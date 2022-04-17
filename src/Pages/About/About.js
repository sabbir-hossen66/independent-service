import React from 'react';
import '../About/About.css'
import about from '../../images/about.jpg'

const About = () => {
    return (
        <>

            <div className='parent'>
                <h2 className='headline py-3'>This is <span className='headline-style'>Sabbir Hossen</span></h2>

                <div className="second-child">
                    <div className='photo-style container'>
                        <img src={about} alt="" />
                    </div>
                    <div className='future-goal'>
                        <h3>I am working hard with a strong desire to become a junior web developer in the next few months. If all goes well and time is on my side in-sha-Allah I will be a reasonable developer in next 3 months</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;