"use client";
import Image from "next/image";
import Link from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const router = useRouter();
  const [user, setUser] = useState({
    email_or_phone: "",
    password: "",
  });
  const [error, setError] = useState("");

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setError("");

    if (name === "email_or_phone") {
      if (/^\d+$/.test(value)) {
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      } else {
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      }
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    axios
      .post("https://geguchadzeadmin.pythonanywhere.com/accounts/login/", {
        email_or_phone: user.email_or_phone,
        password: user.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access);
        router.push("/");
        console.log(res.data);
      })
      .catch((err) => {
        setError(err.response?.data?.message || "An error occurred");
      });
  };

  return (
    <div className="flex mt-[60px] w-[1300px] mx-auto">
      <div className="flex flex-1 items-start justify-start">
        <Image src="/signUp.png" width={690} height={81} alt="logo" />
      </div>

      <div className="flex flex-1 justify-center items-center">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-1">
            <h1 className="text-[36px]">Log in to EXCLUSIVE</h1>
            <h3 className="text-[16px]">Enter your details below</h3>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-10 mt-7">
            <input
              placeholder="Email or Phone Number"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
              type="text"
              name="email_or_phone"
              value={user.email_or_phone}
              onChange={inputValue}
            />
            <input
              placeholder="Password"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
              type="password"
              name="password"
              value={user.password}
              onChange={inputValue}
            />
            {error && <p className="text-red-500">{error}</p>}

            <div className="flex items-center justify-between gap-4">
              <button className="bg-[#DB4444] text-white rounded-sm max-w-max text-center px-10 py-3">
                Log In
              </button>
              <p className="text-[#DB4444] cursor-pointer">Forgot password?</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
