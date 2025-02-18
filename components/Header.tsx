"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [active, setActive] = useState("Home");
  const [isAuthed, setIsAuthed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (page: string) => {
    setActive(page);
    setMenuOpen(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthed(!!token);
  }, []);

  return (
    <div>
      <div className="relative w-full flex md:hidden mt-[20px]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-[38px] bg-[#F5F5F5] pl-2 pr-7 rounded-md placeholder:text-sm md:hidden"
        />

        {/* Desktop-ისთვის */}
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full h-[38px] bg-[#F5F5F5] pl-2 pr-7 rounded-md placeholder:text-lg hidden md:block"
        />
        <div className="absolute top-0 bottom-0 m-auto right-3 h-fit">
          <FontAwesomeIcon
            className="w-[16px] h-[16px]"
            icon={faMagnifyingGlass}
            style={{ color: "#000000" }}
          />
        </div>
      </div>
      <div className="flex w-full max-w-[1170px] mx-auto items-center justify-between text-center py-[16px]">
        <div>
          <Link href="/">
            <Image
              onClick={() => handleClick("Home")}
              src="/Exclusive.png"
              width={118}
              height={24}
              alt="logo"
            />
          </Link>
        </div>
        <div className="hidden sm:flex ml-[16px]">
          <ul className="flex items-center gap-10 cursor-pointer">
            <Link href="/">
              <li
                className={
                  active === "Home"
                    ? "border-b-2 border-black md:border-white"
                    : ""
                }
                onClick={() => handleClick("Home")}
              >
                Home
              </li>
            </Link>
            <Link href="/contact">
              <li
                className={
                  active === "Contact"
                    ? "border-b-2 border-black md:border-white"
                    : ""
                }
                onClick={() => handleClick("Contact")}
              >
                Contact
              </li>
            </Link>
            <Link href="/about">
              <li
                className={
                  active === "About"
                    ? "border-b-2 border-black md:border-white"
                    : ""
                }
                onClick={() => handleClick("About")}
              >
                About
              </li>
            </Link>
            <Link href={isAuthed ? "/account" : "/SignUp"}>
              <li
                className={
                  active === "Sign Up"
                    ? "border-b-2 border-black md:border-white"
                    : ""
                }
                onClick={() => handleClick("Sign Up")}
              >
                {isAuthed ? "Account" : "Sign Up"}
              </li>
            </Link>
          </ul>
        </div>
        <div className="relative w-[243px] mx-[10px] hidden md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-[38px] bg-[#F5F5F5] pl-2 pr-7 rounded-md placeholder:text-sm md:hidden"
          />

          {/* Desktop-ისთვის */}
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full h-[38px] bg-[#F5F5F5] pl-2 pr-7 rounded-md placeholder:text-lg hidden md:block"
          />
          <div className="absolute top-0 bottom-0 m-auto right-3 h-fit">
            <FontAwesomeIcon
              className="w-[16px] h-[16px]"
              icon={faMagnifyingGlass}
              style={{ color: "#000000" }}
            />
          </div>
        </div>
        <div className="flex gap-[16px]">
          <div className="cursor-pointer">
            <Link href="/wishlist">
              <Image
                src="/Wishlist.png"
                width={30}
                height={50}
                alt="wishlist image"
              />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="/cart">
              <Image src="/Cart1.png" width={30} height={50} alt="cart image" />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="/SignUp">
              <Image src="/user.png" width={30} height={50} alt="user image" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="hidden md:flex" />
      <div className="flex sm:hidden">
        <ul className="flex items-center gap-10 cursor-pointer">
          <Link href="/">
            <li
              className={active === "Home" ? "border-b-2 border-black" : ""}
              onClick={() => handleClick("Home")}
            >
              Home
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={active === "Contact" ? "border-b-2 border-black" : ""}
              onClick={() => handleClick("Contact")}
            >
              Contact
            </li>
          </Link>

          <Link href={"/about"}>
            <li
              className={active === "About" ? "border-b-2 border-black" : ""}
              onClick={() => handleClick("About")}
            >
              About
            </li>
          </Link>

          <Link href={isAuthed ? "/account" : `/SignUp`}>
            <li
              className={active === "Sign Up" ? "border-b-2 border-black" : ""}
              onClick={() => handleClick("Sign Up")}
            >
              {isAuthed ? "Account" : "Sign Up"}
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
