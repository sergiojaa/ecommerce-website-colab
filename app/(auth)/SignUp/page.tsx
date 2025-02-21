"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
  });
  const [emailOrNumberInput, setEmailOrNumberInput] = useState("");
  const [error, setError] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const numberRegex = /^\d{9,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "emailOrNumber") {
      setEmailOrNumberInput(value);
      if (emailRegex.test(value)) {
        setUser((prevState) => ({ ...prevState, email: value, phone_number: "" }));
        setError("");
      } else if (numberRegex.test(value)) {
        setUser((prevState) => ({ ...prevState, phone_number: value, email: "" }));
        setError("");
      } else {
        setError("Please enter a valid email or phone number");
      }
    } else {
      setUser((prevState) => ({ ...prevState, [name]: value }));
      setError("");
    }
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user.name) {
      setError("Name is required");
      return;
    }
    if (!user.email && !user.phone_number) {
      setError("Email or phone number is required");
      return;
    }
    if (!passwordRegex.test(user.password)) {
      setError("Password is not strong enough");
      return;
    }

    setError("");

    const data = {
      name: user.name,
      email: user.email || undefined,
      phone_number: user.phone_number || undefined,
      password: user.password,
    };

    axios
      .post("https://geguchadzeadmin.pythonanywhere.com/accounts/register/", data)
      .then((response) => {
        console.log("Registration successful", response.data);
        router.push("/SignIn");
      })
      .catch((err) => {
        setError("Registration failed, please try again");
        console.error("Error:", err);
      });
  };

  return (
    <div className="flex flex-col md:flex-row mt-10 w-full max-w-[1300px] mx-auto p-4 md:p-0">
      <div className="flex flex-1 items-center justify-center md:justify-start">
        <Image src="/signUp.png" width={690} height={81} alt="logo" className="w-full max-w-[300px] md:max-w-none" />
      </div>

      <div className="flex flex-1 justify-center items-center">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl">Create an account</h1>
            <h3 className="text-lg">Enter your details below</h3>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-5">
            <input
              onChange={handleInputChange}
              placeholder="Name"
              name="name"
              value={user.name}
              className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2"
              type="text"
            />
            <input
              onChange={handleInputChange}
              placeholder="Email or Phone Number"
              name="emailOrNumber"
              value={emailOrNumberInput}
              className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2"
              type="text"
            />
            <input
              onChange={handleInputChange}
              placeholder="Password"
              name="password"
              value={user.password}
              className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2"
              type="password"
            />
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex flex-col gap-4">
              <button type="submit" className="bg-red-500 text-white rounded-sm px-20 py-3 w-full">
                Create Account
              </button>
              <div className="border-2 border-black flex items-center justify-center gap-3 py-3 w-full">
                <Image src="/Icon-Google.png" width={20} height={20} alt="google icon" />
                <button>Sign Up With Google</button>
              </div>
            </div>
          </form>
          <div className="flex justify-center items-center mt-3">
            <p>
              Already have an account? <Link href="/SignIn" className="border-b border-black">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}