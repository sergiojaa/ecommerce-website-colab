'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Product {
    id: number;
    name: string;
    category: {
        id: number;
        name: string;
    };
    colour: string;
    created_at: string;
    description: string;
    discount: number;
    final_price: string;
    image: string;
    is_active: boolean;
    is_in_stock: boolean;
    price: string;
    size: any[]; // Adjust if `size` has a specific structure
    stock: number;
    subcategory: any | null; // Replace `any` with specific type if known
}

export default function Page() {
    const [product, setProduct] = useState<Product[]>([]); // Initializing as an empty array

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios
            .get(`https://geguchadzeadmin.pythonanywhere.com/products/products/1/`, {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            })
            .then((res) => {
                console.log(res.data); // Check the structure of the response
                // If the response is a single product object, wrap it in an array
                setProduct(Array.isArray(res.data) ? res.data : [res.data]);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {product.map((item, index) => (
                <div
                    className='flex flex-col'
                    key={index}>
                    <p className='bg-red-100 w-[300px]'>
                        {item.name}

                    </p>
                    <p className='bg-red-500  w-[500px]'>
                        {item.description}

                    </p>
                    <div className='bg-yellow-500 w-[500px]'>
                        {item.image}

                    </div>
                    <h2 className='bg-red-900  text-white'>{item.price}</h2>



                </div>
            ))}
        </div>
    );
}
