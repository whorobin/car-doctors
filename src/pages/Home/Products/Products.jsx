// import React from 'react';

import product1 from '../../../assets/images/products/1.png'
import product2 from '../../../assets/images/products/2.png'
import product3 from '../../../assets/images/products/3.png'
import product4 from '../../../assets/images/products/4.png'
import product5 from '../../../assets/images/products/5.png'
import product6 from '../../../assets/images/products/6.png'

import { FaStar } from "react-icons/fa6";

const Products = () => {
    return (
        <div className="my-5 text-center">
            <div className="">
                <h3 className="text-2xl font-bold text-orange-500">Popular Products</h3>
                <h2 className="text-4xl font-bold">Browse Our Products</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />words which do not look even slightly believable. </p>
            </div>

            <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center my-7'>

                <div className="card bg-base-100 w-96 shadow-xl items-center justify-center">
                    <figure>
                        <img
                            src={product1}
                            alt="Shoes"
                            className="rounded-xl h-52 w-full" />
                    </figure>
                    <div>
                        <div className='flex mt-5 items-center justify-center'>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                        </div>
                        <div className="card-body items-center text-center pt-2">
                            <h3 className="text-xl font-bold">Car Engine Plug</h3>
                            <p className="text-orange-600">$20.00</p>
                        </div>
                    </div>
                </div>


                <div className="card bg-base-100 w-96 shadow-xl items-center justify-center">
                    <figure>
                        <img
                            src={product2}
                            alt="Shoes"
                            className="rounded-xl h-52 w-full" />
                    </figure>
                    <div>
                        <div className='flex mt-5 items-center justify-center'>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                        </div>
                        <div className="card-body items-center text-center pt-2">
                            <h3 className="text-xl font-bold">Car Engine Plug</h3>
                            <p className="text-orange-600">$20.00</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-xl items-center justify-center">
                    <figure>
                        <img
                            src={product3}
                            alt="Shoes"
                            className="rounded-xl h-52 w-full" />
                    </figure>
                    <div>
                        <div className='flex mt-5 items-center justify-center'>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                        </div>
                        <div className="card-body items-center text-center pt-2">
                            <h3 className="text-xl font-bold">Car Engine Plug</h3>
                            <p className="text-orange-600">$20.00</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-xl items-center justify-center">
                    <figure>
                        <img
                            src={product4}
                            alt="Shoes"
                            className="rounded-xl h-52 w-full" />
                    </figure>
                    <div>
                        <div className='flex mt-5 items-center justify-center'>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                        </div>
                        <div className="card-body items-center text-center pt-2">
                            <h3 className="text-xl font-bold">Car Engine Plug</h3>
                            <p className="text-orange-600">$20.00</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-xl items-center justify-center">
                    <figure>
                        <img
                            src={product5}
                            alt="Shoes"
                            className="rounded-xl h-52 w-full" />
                    </figure>
                    <div>
                        <div className='flex mt-5 items-center justify-center'>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                        </div>
                        <div className="card-body items-center text-center pt-2">
                            <h3 className="text-xl font-bold">Car Engine Plug</h3>
                            <p className="text-orange-600">$20.00</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-xl items-center justify-center">
                    <figure>
                        <img
                            src={product6}
                            alt="Shoes"
                            className="rounded-xl h-52 w-full" />
                    </figure>
                    <div>
                        <div className='flex mt-5 items-center justify-center'>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                            <FaStar className='text-orange-400'></FaStar>
                        </div>
                        <div className="card-body items-center text-center pt-2">
                            <h3 className="text-xl font-bold">Car Engine Plug</h3>
                            <p className="text-orange-600">$20.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className="btn btn-outline btn-error text-center">Warning</button>
            </div>
        </div>
    );
};

export default Products;