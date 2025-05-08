import CartClient from '@/components/CartClient'
import React from 'react'

export default async function Cart() {
    const response = await fetch('https://geguchadzeadmin.pythonanywhere.com/products/products/')
    const productData = await response.json()
    return (
        <CartClient productData={productData} />
    )
}
