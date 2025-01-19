'use client'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter()
    const [active, setActive] = useState('Home');
    const [isAuthed, setIsAuthed] = useState(false)


    const handleClick = (page: string) => {
        setActive(page);
    };

    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token)

        if (token) {
            setIsAuthed(true)
        } else {
            setIsAuthed(false)
        }


    }, [])

    return (
        <div  >
            <div className="flex w-[1080px] mx-auto items-center items-center justify-between text-center mt-5">
                <div>
                    <Link href={'/'}>
                        <Image
                            onClick={() => handleClick('Home')}

                            src="/Exclusive.png"
                            width={118}
                            height={24}
                            alt="logo"
                        /></Link>

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
                        <Link href="/contact">
                            <li
                                className={active === 'Contact' ? 'border-b-2 border-black' : ''}
                                onClick={() => handleClick('Contact')}
                            >
                                Contact
                            </li>
                        </Link>

                        <Link href={'/about'}>
                            <li
                                className={active === 'About' ? 'border-b-2 border-black' : ''}
                                onClick={() => handleClick('About')}
                            >
                                About
                            </li>
                        </Link>

                        <Link

                            href={isAuthed ? '/account' : `/SignUp`}
                        >
                            <li
                                className={active === 'Sign Up' ? 'border-b-2 border-black' : ''}
                                onClick={() => handleClick('Sign Up')}
                            >
                                {isAuthed ? 'Account' : 'Sign Up'}
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
                <div className='flex items-center gap-3' >
                    <div className='cursor-pointer'>
                        <Link href={'/wishlist'}>
                            <Image src='/Wishlist.png' width={30} height={50} alt='wishlist image' />

                        </Link>
                    </div>
                    <div className='cursor-pointer'>
                        <Link href={'/cart'}>
                            <Image src='/Cart1.png' width={30} height={50} alt='cart image' />

                        </Link>
                    </div>
                    <div className='cursor-pointer'>
                        <Link href={'/account'}>
                            <Image src='/user.png' width={30} height={50} alt='cart image' />

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
