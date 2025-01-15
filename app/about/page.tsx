'use client'
import Image from "next/image"
import { useState } from "react";
export default function about() {
    const [activeDiv, setActiveDiv] = useState<number>(0);
    const handleClick = (index: number) => {
        setActiveDiv(index)
    }

    return (
        <div>
            <div className="flex justify-between mx-auto items-center w-[1280px] ">
                <div className="w-[500px] ml-[3rem] flex flex-col gap-16">
                    <h1 className="text-[54px] font-bold">Our Story</h1>
                    <p className="text-[16px]">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className="text-[16px]">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div className="" >
                    <Image src='/about.png'
                        className="mt-20"
                        width={705} height={600} alt="showwing picture" />
                </div>
            </div>
            <div className="flex items-center justify-center gap-12 mt-28">
                <div
                    onClick={() => handleClick(0)}
                    className={`border cursor-pointer mb-10 justify-center gap-3 flex flex-col items-center h-[200px] w-[230px] border-black ${activeDiv === 0 ? 'bg-red-500' : ''}`}
                >
                    <Image src='/Services.png' width={50} height={50} alt="image" />
                    <p className="text-[32px] font-bold">10.5k</p>
                    <p>Sellers active on our site</p>
                </div>
                <div
                    onClick={() => handleClick(1)}
                    className={`border cursor-pointer mb-10 justify-center gap-3 flex flex-col items-center h-[200px] w-[230px] border-black ${activeDiv === 1 ? 'bg-red-500' : ''}`}
                >
                    <Image src='/services2.png' width={50} height={50} alt="image" />
                    <p className="text-[32px] font-bold">33k</p>
                    <p>Monthly Product Sale</p>
                </div>
                <div
                    onClick={() => handleClick(2)}
                    className={`border cursor-pointer mb-10 justify-center gap-3 flex flex-col items-center h-[200px] w-[230px] border-black ${activeDiv === 2 ? 'bg-red-500' : ''}`}
                >
                    <Image src='/Services-copy2.png' width={50} height={50} alt="image" />
                    <p className="text-[32px] font-bold">45.5k</p>
                    <p>Customer active on our site</p>
                </div>
                <div
                    onClick={() => handleClick(3)}
                    className={`border cursor-pointer mb-10 justify-center gap-3 flex flex-col items-center h-[200px] w-[230px] border-black ${activeDiv === 3 ? 'bg-red-500' : ''}`}
                >
                    <Image src='/Services-copy3.png' width={50} height={50} alt="image" />
                    <p className="text-[32px] font-bold">25k</p>
                    <p>Annual gross sale on our site</p>
                </div>

            </div>
            <div className="flex items-center  justify-center gap-40 mt-20">
                <div className="mb-10 flex flex-col gap-5 ">
                    <div >
                        <Image
                            className="bg-[#F5F5F5] w-[250px]  "
                            src='/man-2.png' width={200} height={100} alt="man image" />

                    </div>
                    <div>
                        <h2 className="text-[32px]">Tom Cruise</h2>
                        <p>Founder & Chairman</p>
                        <div className="flex gap-3 mt-2 items-center">
                            <Image className="cursor-pointer" src='/Icon-Twitter.png' height={20} width={20} alt="twitter icon" />
                            <Image className="cursor-pointer" src='/Icon-instagram.png' height={20} width={20} alt="twitter icon" />
                            <Image className="cursor-pointer" src='/Icon-Linkedin.png' height={20} width={20} alt="twitter icon" />


                        </div>
                    </div>

                </div>
                <div className="mb-10 flex flex-col gap-5 ">
                    <div className="max-w-max" >
                        <Image
                            className="bg-[#F5F5F5] w-[250px] "
                            src='/woman.png' width={200} height={100} alt="man image" />

                    </div>
                    <div>
                        <h2 className="text-[32px]">Tom Cruise</h2>
                        <p>Founder & Chairman</p>
                        <div className="flex gap-3 mt-2 items-center">
                            <Image className="cursor-pointer" src='/Icon-Twitter.png' height={20} width={20} alt="twitter icon" />
                            <Image className="cursor-pointer" src='/Icon-instagram.png' height={20} width={20} alt="twitter icon" />
                            <Image className="cursor-pointer" src='/Icon-Linkedin.png' height={20} width={20} alt="twitter icon" />


                        </div>
                    </div>

                </div>
                <div className="mb-10 flex flex-col gap-5 ">
                    <div className="max-w-max" >
                        <Image
                            className="bg-[#F5F5F5] w-[250px] "
                            src='/man-2.png' width={220} height={100} alt="man image" />

                    </div>
                    <div>
                        <h2 className="text-[32px]">Tom Cruise</h2>
                        <p>Founder & Chairman</p>
                        <div className="flex gap-3 mt-2 items-center">
                            <Image className="cursor-pointer" src='/Icon-Twitter.png' height={20} width={20} alt="twitter icon" />
                            <Image className="cursor-pointer" src='/Icon-instagram.png' height={20} width={20} alt="twitter icon" />
                            <Image className="cursor-pointer" src='/Icon-Linkedin.png' height={20} width={20} alt="twitter icon" />


                        </div>
                    </div>

                </div>

            </div>
            <div className="flex items-center gap-20 mt-10 mb-20 justify-center">
                <div className="flex flex-col gap-1 items-center">
                    <Image src='/servic.png' width={60} height={30} alt="services-icon" />
                    <h2 className="text-[20px] mt-4">FREE AND FAST DELIVERY</h2>
                    <p className="text-[12px]">Free delivery for all orders over $140</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <Image src='/serv.png' width={60} height={30} alt="services-icon" />
                    <h2 className="text-[20px] mt-4">24/7 CUSTOMER SERVICE</h2>
                    <p className="text-[12px]">Friendly 24/7 customer support</p>

                </div>
                <div className="flex flex-col gap-1 items-center">
                    <Image src='/ser.png' width={60} height={30} alt="services-icon" />
                    <h2 className="text-[20px] mt-4">MONEY BACK GUARANTEE</h2>
                    <p className="text-[12px]">We reurn money within 30 days</p>

                </div>
            </div>
        </div>
    )
}