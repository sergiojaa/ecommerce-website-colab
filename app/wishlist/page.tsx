'use client'

import axios from "axios"
import { useEffect, useState } from "react"

type WishlistItem = {
    id: number;
    product: number;
    product_name: string;
    added_at: string;
}

export default function Wishlist() {
    const [wishlistProducts, setWishlistProducts] = useState<WishlistItem[]>([])
    const [error, setError] = useState<string | null>(null)

    const getWishlistItems = (token: string | null) => {
        if (!token) {
            setError("Token is missing")
            return
        }
        axios.get(`https://geguchadzeadmin.pythonanywhere.com/wishlist/items/`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            setWishlistProducts(res.data)
            console.log(res.data)
        }).catch((err) => {
            setError(err.message)
            console.log(err)
        })
    }

    // useEffect(() => {
    //     const token = localStorage.getItem(`token`)
    //     getWishlistItems(token)

    // }, [])

    return (
        <div>
            <h1>Wishlist Items</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {wishlistProducts.map((item) => (
                    <li key={item.id}>
                        {item.id}
                    </li>
                ))}
            </ul>
        </div>
    )
}
