'use client'
import axios from "axios";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react"

export default function cart() {
    const router = useRouter()
    const [products, setProducts] = useState([])
    const [price, setPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);
    const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

    const getCartItems = (token: string) => {

        axios.get('https://geguchadzeadmin.pythonanywhere.com/cart/cart-items/',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token) {
            return router.push('/SignIn')
        }

        getCartItems(token)
    }, [router])

    return (
        <div>
            <div>
                {/* map here */}
            </div>
        </div>
    )
}

function checkTokenValidity(arg0: string) {
    throw new Error("Function not implemented.");
}
