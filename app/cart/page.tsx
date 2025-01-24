'use client'
import axios from "axios";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react"
type Products = {
    product_name: string;
    quantity: number;
    product: number;
    order: number;

}
export default function cart() {
    const router = useRouter()
    const [products, setProducts] = useState<Products[]>([])

    const getCartItems = (token: string) => {

        axios.get('https://geguchadzeadmin.pythonanywhere.com/cart/cart-items/',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
            .then((res) => {
                console.log(res.data)
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
                {products?.map((product, index) => (
                    <div key={index}>
                        <div className="bg-red-500">
                            <h2 className="bg-yellow-500">
                                {product.quantity}

                            </h2>
                            {product.product}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

