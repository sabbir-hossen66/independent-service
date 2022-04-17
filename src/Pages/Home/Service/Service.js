import React from 'react';
import '../Service/Service.css'

const Service = ({ service }) => {
    const { name, img, description, fee } = service
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>Name:<span className='service-name'> {name}</span></h3>
            <h4>Fee: $<span style={{ color: 'orange' }}>{fee}</span></h4>
            <p className='description-style'><span>Title: {description}</span></p><br />
            <button className='button-style'>Now Booking</button>

        </div>
    );
};

export default Service;