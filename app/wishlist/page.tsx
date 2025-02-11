'use client'

import axios from "axios"
import { useEffect, useState } from "react"

type WishlistItem = {
    id: number;
    product: number;
    product_name: string;
    added_at: string;
};

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
};

export default function Wishlist() {
    const [wishlistProducts, setWishlistProducts] = useState<WishlistItem[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [mergedWishlistItems, setMergedWishlistItems] = useState<(WishlistItem & Product)[]>([]);
    const [error, setError] = useState<string | null>(null);

    const getWishlistItems = (token: string | null) => {
        if (!token) {
            setError("Token is missing");
            return;
        }
        axios.get(`https://geguchadzeadmin.pythonanywhere.com/wishlist/items/`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            setWishlistProducts(res.data);
        }).catch((err) => {
            setError(err.message);
            console.error(err);
        });
    };

    const getProducts = () => {
        axios.get('https://geguchadzeadmin.pythonanywhere.com/products/products/')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        getWishlistItems(token);
        getProducts();
    }, []);

    useEffect(() => {
        if (wishlistProducts.length > 0 && products.length > 0) {
            const merged = wishlistProducts.map((wishlistItem) => {
                const product = products.find((p) => p.id === wishlistItem.product);
                return product ? { ...wishlistItem, ...product } : wishlistItem;
            });
            setMergedWishlistItems(merged);
        }
    }, [wishlistProducts, products]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex gap-10">
                {mergedWishlistItems.map((item) => (
                    <div key={item.id} className="bg-gray-100 max-w-max mx-auto flex p-4 my-2 rounded-md items-center gap-4">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-[300px] h-16 object-cover rounded-md"
                        />
                        <div className="flex gap-40">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                            <p className="text-gray-800 font-bold">Price: ${item.price}</p>
                            <p className="text-gray-800">Added at: {item.added_at}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
