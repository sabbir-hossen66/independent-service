import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import '../Services/Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services'>
            <h1 className='services-headline my-5'>The qualityful tutor provide these services</h1>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.id} service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;