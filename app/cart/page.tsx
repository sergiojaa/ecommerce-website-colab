'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type CartItem = {
    product_name: string;
    quantity: number;
    product: number;
    order: number;
};

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
};

export default function Cart() {
    const router = useRouter();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [mergedCartItems, setMergedCartItems] = useState<(CartItem & Product)[]>([]);

    const getCartItems = (token: string) => {
        axios.get('https://geguchadzeadmin.pythonanywhere.com/cart/cart-items/', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                setCartItems(res.data);
            })
            .catch((err) => {
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
        if (cartItems.length > 0 && products.length > 0) {
            const merged = cartItems.map((cartItem) => {
                const product = products.find((p) => p.id === cartItem.product);
                return { ...cartItem, ...product };
            });
            setMergedCartItems(merged);
        }
    }, [cartItems, products]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            return router.push('/SignIn');
        }

        getCartItems(token);
        getProducts();
    }, [router]);

    return (
        <div className="p-4 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border border-gray-300">Product</th>
                        <th className="p-2 border border-gray-300">Price</th>
                        <th className="p-2 border border-gray-300">Quantity</th>
                        <th className="p-2 border border-gray-300">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {mergedCartItems.map((item) => (
                        <tr key={item.id} className="text-center">
                            <td className="p-2 border border-gray-300 flex items-center gap-2">
                                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover" />
                                {item.name}
                            </td>
                            <td className="p-2 border border-gray-300">${item.price}</td>
                            <td className="p-2 border border-gray-300">
                                <input type="number" value={item.quantity} min="1" className="w-12 text-center border border-gray-300" readOnly />
                            </td>
                            <td className="p-2 border border-gray-300">${item.price * item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
                <button className="border border-gray-500 px-4 py-2">Return To Shop</button>
                <button className="border border-gray-500 px-4 py-2">Update Cart</button>
            </div>
            <div className="flex justify-between items-center mt-4">
                <input type="text" placeholder="Coupon Code" className="border border-gray-300 px-4 py-2" />
                <button className="bg-red-500 text-white px-4 py-2">Apply Coupon</button>
            </div>
            <div className="border border-gray-300 p-4 mt-4 max-w-sm ml-auto">
                <h2 className="text-xl font-bold mb-2">Cart Total</h2>
                <p className="flex justify-between"><span>Subtotal:</span> <span>${mergedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span></p>
                <p className="flex justify-between"><span>Shipping:</span> <span>Free</span></p>
                <p className="flex justify-between font-bold"><span>Total:</span> <span>${mergedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span></p>
                <button className="bg-red-500 text-white w-full py-2 mt-4">Proceed to Checkout</button>
            </div>
        </div>
    );
}