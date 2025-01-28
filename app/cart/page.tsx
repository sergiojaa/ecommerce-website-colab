'use client'
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
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            <div className="flex gap-10">
                {mergedCartItems?.map((item, index) => (
                    <div key={index} className="bg-gray-100 max-w-max mx-auto flex p-4 my-2 rounded-md flex items-center gap-4">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-[300პხ] h-16 object-cover rounded-md"
                        />
                        <div className="flex gap-40">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                            <p className="text-gray-800 font-bold">Price: ${item.price}</p>

                            <p className="text-gray-800">Quantity: {item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
