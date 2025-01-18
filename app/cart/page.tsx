import axios from "axios";
import router from "next/router";
import { useEffect, useState } from "react"

export default function cart() {
    const [products, setProducts] = useState([])
    const [price, setPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);
    const [loadingProductId, setLoadingProductId] = useState<string | null>(null);


    return (
        <div>
            <div>

            </div>
        </div>
    )
}

function checkTokenValidity(arg0: string) {
    throw new Error("Function not implemented.");
}
