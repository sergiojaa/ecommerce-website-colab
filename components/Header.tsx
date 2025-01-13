'use client'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [active, setActive] = useState('Home');
    
    const handleClick = (page: string) => {
        setActive(page);
    };

    return (
        <div>
            <div className="flex items-center justify-around mt-5">
                <div>
                    <Image
                        src="/Exclusive.png"
                        width={118}
                        height={24}
                        alt="logo"
                    />
                </div>
                <div>
                    <ul className="flex items-center gap-10 cursor-pointer">
                        <Link href="/">
                                <li
                                    className={active === 'Home' ? 'border-b-2 border-black' : ''}
                                    onClick={() => handleClick('Home')}
                                >
                                    Home
                                </li>
                        </Link>
                        <li
                            className={active === 'Contact' ? 'border-b-2 border-black' : ''}
                            onClick={() => handleClick('Contact')}
                        >
                            Contact
                        </li>
                        <li
                            className={active === 'About' ? 'border-b-2 border-black' : ''}
                            onClick={() => handleClick('About')}
                        >
                            About
                        </li>
                        <Link href="/SignUp">
                                <li
                                    className={active === 'Sign Up' ? 'border-b-2 border-black' : ''}
                                    onClick={() => handleClick('Sign Up')}
                                >
                                    Sign Up
                                </li>
                        </Link>
                    </ul>
                </div>
                <div className="relative w-[243px]">
                    <input
                        placeholder="What are you looking for?"
                        className="w-full h-[38px] bg-[#F5F5F5] pl-3 pr-10 rounded-md"
                        type="text"
                    />
                    <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                        <FontAwesomeIcon
                            className="w-[16px] h-[16px]"
                            icon={faMagnifyingGlass}
                            style={{ color: "#000000" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
