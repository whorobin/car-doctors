// import React from 'react';

import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="mt-6 text-center">
            <div className="text-center">
                <h3 className="text-xl text-red-500 font-bold">Service</h3>
                <h2 className="text-3xl font-semibold">Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
                {
                    services.map(service =>
                        <ServicesCard key={service._id}
                            service={service}
                        ></ServicesCard>
                    )
                }
            </div>
            <button className="btn btn-outline btn-error font-bold my-10">More Services</button>
        </div>
    );
};

export default Services;