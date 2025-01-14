'use client'
import Image from "next/image"
import { useState } from "react";
export default function about(){
    const [activeDiv, setActiveDiv] = useState<number>(0);
    const handleClick = (index:number)=> {
        setActiveDiv(index)
    }

    return (
        <div>
            <div className="flex justify-between items-center w-[1280px] ">
                <div className="w-[500px] ml-[3rem] flex flex-col gap-16">
                    <h1 className="text-[54px] font-bold">Our Story</h1>
                    <p className="text-[16px]">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className="text-[16px]">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div className="" >
                    <Image src='/about.png'
                    className="mt-20"
                     width={705} height={600} alt="showwing picture"/>
                </div>
            </div>
            <div className="flex items-center justify-center gap-12 mt-28">
            <div 
    onClick={() => handleClick(0)}
    className={`border cursor-pointer mb-10 justify-center gap-3 flex flex-col items-center h-[200px] w-[230px] border-black ${activeDiv === 0 ? 'bg-red-500' : ''}`}
>
    <Image src='/Services.png' width={50} height={50} alt="image"/>
    <p className="text-[32px] font-bold">10.5k</p>
    <p>Sellers active on our site</p>
</div>
<div 
    onClick={() => handleClick(1)}
    className={`border cursor-pointer mb-10 justify-center gap-3 flex flex-col items-center h-[200px] w-[230px] border-black ${activeDiv === 1 ? 'bg-red-500' : ''}`}
>
    <Image src='/services2.png' width={50} height={50} alt="image"/>
    <p className="text-[32px] font-bold">33k</p>
    <p>Monthly Product Sale</p>
</div>
<div 
    onClick={() => handleClick(2)}
    className={`border cursor-pointer mb-10 justify-center gap-3 flex flex-col items-center h-[200px] w-[230px] border-black ${activeDiv === 2 ? 'bg-red-500' : ''}`}
>
    <Image src='/Services-copy2.png' width={50} height={50} alt="image"/>
    <p className="text-[32px] font-bold">45.5k</p>
    <p>Customer active on our site</p>
</div>
<div
    onClick={() => handleClick(3)}
    className={`border cursor-pointer mb-10 justify-center gap-3 flex flex-col items-center h-[200px] w-[230px] border-black ${activeDiv === 3 ? 'bg-red-500' : ''}`}
>
    <Image src='/Services-copy3.png' width={50} height={50} alt="image"/>
    <p className="text-[32px] font-bold">25k</p>
    <p>Annual gross sale on our site</p>
</div>

            </div>
        </div>
    )
}