"use client";
import Image from "next/image";
import Link from "next/link";
export default function SignUp() {
  return (
    <div className="flex mt-10 w-[1300px] mx-auto">
      {/* Left-side Image */}
      <div className="flex flex-1 items-start justify-start">
        <Image src="/signUp.png" width={690} height={81} alt="logo" />
      </div>

      {/* Right-side Form */}
      <div className="flex flex-1 justify-center items-center">
        <div className=" mt-10 w-full max-w-md">
          <div className="flex flex-col gap-1">
            <h1 className="text-[36px]">Create an account</h1>
            <h3 className="text-[16px]">Enter your details below</h3>
          </div>
          <form className="flex flex-col gap-10 mt-7">
            <input
              placeholder="Name"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
              type="text"
            />
            <input
              placeholder="Email or Phone Number"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
              type="text"
            />
            <input
              placeholder="Password"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
              type="password"
            />
            <div className="flex flex-col gap-4">
              <button className="bg-[#DB4444] text-white rounded-sm px-36 py-5">
                Create Account
              </button>
              <div className="border-2 border-black flex items-center justify-center gap-3">
                <Image
                  src="/Icon-Google.png"
                  width={20}
                  height={20}
                  alt="google icon"
                />
                <button className="py-5">Sign Up With Google</button>
              </div>
            </div>
          </form>
          <div className="flex justify-center items-center mt-3">
            <p>
              Already have an account?{" "}
              <Link className="border border-b-black" href={"/SignIn"}>
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
