'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { X } from 'lucide-react';

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
    }, [router, getCartItems]);

    const subtotal = mergedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="max-w-[1200px] mx-auto px-4 py-8">
            {/* Header */}
            <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 mb-6 px-4">
                <h3 className="text-base font-medium text-gray-600">Product</h3>
                <h3 className="text-base font-medium text-gray-600 text-center">Price</h3>
                <h3 className="text-base font-medium text-gray-600 text-center">Quantity</h3>
                <h3 className="text-base font-medium text-gray-600 text-center">Subtotal</h3>
            </div>

            {/* Cart Items */}
            <div className="space-y-6">
                {mergedCartItems.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 items-center bg-white rounded-lg shadow-sm p-4"
                    >
                        <div className="flex items-center gap-4">
                            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                <X className="h-5 w-5" />
                            </button>
                            <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded-lg"
                            />
                            <span className="font-medium">{item.name}</span>
                        </div>
                        <div className="text-center">${item.price}</div>
                        <div className="flex justify-center">
                            <div className="inline-flex items-center border rounded">
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    className="w-16 text-center py-2 px-2"
                                    readOnly
                                />
                                <div className="flex flex-col border-l">
                                    <button className="px-2 py-[1px] hover:bg-gray-50 border-b">▲</button>
                                    <button className="px-2 py-[1px] hover:bg-gray-50">▼</button>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                ))}
            </div>

            {/* Actions */}
            <div className="flex justify-between mt-8">
                <button
                    onClick={() => router.push('/shop')}
                    className="px-6 py-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                    Return To Shop
                </button>
                <button className="px-6 py-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    Update Cart
                </button>
            </div>

            {/* Coupon and Cart Total */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Coupon Code"
                        className="flex-1 px-4 py-3 border rounded-lg"
                    />
                    <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                        Apply Coupon
                    </button>
                </div>

                <div className="md:ml-auto w-full max-w-md">
                    <div className="border rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-6">Cart Total</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between py-3 border-b">
                                <span className="text-gray-600">Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between py-3 border-b">
                                <span className="text-gray-600">Shipping:</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="font-semibold">Total:</span>
                                <span className="font-semibold">${subtotal.toFixed(2)}</span>
                            </div>
                            <button className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors mt-4">
                                Procees to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}