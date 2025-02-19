"use client";
import ProductSlider from "@/components/ProductSlider";
import React, { useEffect, useState } from "react";
import useFetchProducts from "@/useFetchProducts";
import { useSearchParams } from "next/navigation";
import { Product } from "@/components/ProductCard";
import axios from "axios";
export default function Detailed() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { productData: productData2 } = useFetchProducts(
    `https://geguchadzeadmin.pythonanywhere.com/products/best-sellers/`
  );

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  useEffect(() => {
    if (!id) return;

    axios
      .get(
        `https://geguchadzeadmin.pythonanywhere.com/products/products/${id}/`
      )
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div>
      <div className=" max-w-[1170px]   mx-auto">
        <p className="text-sm font-normal my-[80px]">Account</p>
        <div>
          <div className="flex">
            <div className="grid grid-cols-12 gap-[70px] mb-[140px]">
              <div className="bg-yellow-500">
                {product?.additional_images.map((item, index) => (
                  <div className="w-[100px] " key={index}>
                    <img
                      className="w-[300px] py-3"
                      src={item.image}
                      alt="img"
                    />
                  </div>
                ))}
              </div>
              <div className="col-span-8 bg-lightblue text-center">
                <img
                  className="mb-4 w-[500px] h-[350px]"
                  src={product?.image}
                  alt={product?.title}
                />
              </div>
            </div>
            <div className="col-span-4 bg-lightblue p-4 text-center">
              <div className="w-full text-left space-y-4">
                <h1 className="text-2xl font-bold mb-[16px]">
                  {product?.name}
                </h1>
                <div className="flex items-center gap-[16px] mb-[16px]">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="text-sm font-normal text-gray">
                    (59 Reviews)
                  </span>
                  <p
                    className={`text-sm font-normal ${
                      product && product.is_in_stock
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {product && product.is_in_stock
                      ? "In Stock"
                      : "Out of Stock"}
                  </p>
                </div>
                <p className="text-2xl font-normal mb-[24px]">
                  {product?.price}
                </p>
                <p className="text-sm font-normal text-gray mb-[24px]">
                  {product?.description}
                </p>
                <hr className="mb-[24px]" />
                {/* Colors */}
                <div className="flex items-center gap-[24px] mb-[24px]">
                  <h2 className="text-lg font-medium">Colors:</h2>
                  <div className="flex gap-[8px]">
                    {product?.color.map((color) => (
                      <div key={color.id}>
                        <button
                          className="px-2 py-1 h-[30px] w-[30px] border border-gray-300 rounded-md"
                          onClick={() => setSelectedColor(color.name)} // აქ ფერის არჩევას აიძულებთ
                          style={{
                            backgroundColor: color.name.toLowerCase(),
                            border:
                              selectedColor === color.name
                                ? "2px solid black"
                                : "",
                            borderRadius: "50%", // რაუნდი ფორმის ღილაკები
                            cursor: "pointer",
                          }}
                        >
                          {/* აქ შეგვიძლია დავტოვოთ მხოლოდ ფერის ვადევნო */}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex mt-2 gap-[24px] items-center mb-[24px]">
                <h2 className="text-xl font-medium">Size:</h2>
                <div className="flex gap-[16px] text-sm font-medium">
                  {product?.size.map((size: { id: number; name: string }) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.name)}
                      className={`px-2 py-1 border border-gray-300 rounded-md ${
                        selectedSize === size.name
                          ? "bg-red-500 text-white"
                          : ""
                      }`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-[16px]">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={handleDecrease}
                    className="px-3 py-1 border-r border-gray-300"
                  >
                    -
                  </button>
                  <span className="w-[80px] text-center">{quantity}</span>
                  <button
                    onClick={handleIncrease}
                    className="px-3 py-1 border-l border-gray-300 "
                  >
                    +
                  </button>
                </div>
                <button className="w-full py-2 bg-red-500 text-white font-semibold rounded-md">
                  Buy Now
                </button>
                <div className="border border-black rounded p-1 cursor-pointer">
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

              <div className="flex mt-5  flex-col border border-[#00000080] rounded">
                <div className="flex items-center px-[16px] py-[24px] gap-[16px]">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_261_4843)">
                      <path
                        d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 11.8182H11.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.81836 15.4545H8.48503"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 19.0909H11.6667"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_261_4843">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p className="flex flex-col items-start">
                    <span className="text-base font-medium mb-[8px]">
                      Free Delivery
                    </span>
                    <span className="text-xs font-medium">
                      Enter your postal code for Delivery Availability
                    </span>
                  </p>
                </div>
                <hr className="bg-black h-[2px]" />
                <div className="flex items-center px-[16px] py-[24px] gap-[16px]">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_261_4865)">
                      <path
                        d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_261_4865">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p className="flex flex-col items-start">
                    <span className="text-base font-medium mb-[8px]">
                      Return Delivery
                    </span>
                    <span className="text-xs font-medium">
                      Free 30 Days Delivery Returns. Details
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-[1170px] mx-auto ">
        <ProductSlider rows={1} products={productData2} />
      </div>{" "}
    </div>
  );
}
