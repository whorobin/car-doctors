// import React from 'react';
import { GrLinkNext } from "react-icons/gr";

const ServicesCard = ({ service }) => {
    const { title, img, price } = service;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex">
                    <p className="text-red-600">Price : $ {price}</p>
                    <GrLinkNext className="text-red-600"></GrLinkNext>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;