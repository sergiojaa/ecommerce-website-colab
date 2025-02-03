import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import detailed from "@/app/detailed/page";

export interface Product {
  id: number;
  title: string;
  name: string;

  price: number;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product | undefined;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter()

  if (!product) {
    return <div>Product data is unavailable.</div>;
  }
  const addToCart = (user: number | React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    const token = localStorage.getItem('token')
    if (!token) {
      return router.push('/SignIn')
    }


    axios.post(
      'https://geguchadzeadmin.pythonanywhere.com/cart/cart-items/',
      {
        'quantity': 1,
        'product': product.id
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const addToWishlist = (user: number | React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    const token = localStorage.getItem('token')
    if (!token) {
      return router.push('/SignIn')
    }


    axios.post(
      'https://geguchadzeadmin.pythonanywhere.com/wishlist/items/',
      {
        'quantity': 1,
        'product': product.id
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="group cursor-pointer ">
      <div className="relative">
        <Link href={`/detailed?id=${product.id}`}>
          <img
            className="mb-4 h-[250px]"
            src={product.image}
            alt={product.title}
          />
        </Link>

        <p
          onClick={() => addToCart(1)}
          className="invisible group-hover:visible transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-black absolute bottom-0 w-full bg-black text-white text-center text-base font-medium p-2 border-t-0 border-r-0 rounded-bl-lg rounded-br-lg">
          Add To Cart
        </p>
        <p className="absolute top-[12px] left-[12px] bg-[#DB4444] text-white text-3 px-3 py-1 rounded cursor-pointer">
          -40%
        </p>
        <div className="absolute top-[12px] right-[12px] bg-purple-100 rounded-full p-1 cursor-pointer">
          <Link href={`/detailed?id=${product.id}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

        </div>
        <div onClick={addToWishlist} className="absolute top-[54px] right-[12px] bg-purple-100 rounded-full p-1 cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <p className="mb-2 text-base font-medium text-left">{product.name}</p>

      <div className="flex mb-2 text-base">
        <p className="mr-3 text-base text-[#DB4444] font-medium">
          {product.price}
        </p>

        <p
          className="mr-3 text-base text-[#808080] font-medium line-through">

          $2000
        </p>
      </div>

      <div className="flex items-center mb-2">
        <div className="flex items-center">
          <svg
            className="m-[4px]"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
              fill="#D3D3D3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
