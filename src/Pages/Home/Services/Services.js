import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (

        <div>
            <div className='text-center mb-4'>
                <p className='text-2xl font-bold text-orange-600'>Service</p>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <p className=''>The majority Have Suffered alteration in somer Form.The majority Have Suffered alteration in somer Form.The majority Have Suffered alteration in somer Form.</p>
            </div>
            <div className='grid gap-6 grid-col-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg flex items-center">Responsive</button>
            </div>

        </div>
    );
};

export default Services;