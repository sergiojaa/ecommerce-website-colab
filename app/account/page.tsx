"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Account() {
  const [info, setInfo] = useState(() => {
    const savedInfo = localStorage.getItem("userInfo");
    return savedInfo
      ? JSON.parse(savedInfo)
      : {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
      };
  });

  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(info));
  }, [info]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((prevInfo: {}) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setMessage("Your Information Is Saved!");
    setTimeout(() => setMessage(""), 3000);
  };

  const deleteStorage = () => {
    localStorage.removeItem("userInfo");
    router.push("/");
  };

  return (
    <div className="min-h-screen p-5 ">
      {/* Breadcrumb */}
      <div className="mb-5">
        <h3 className="text-gray-500">
          <span className="mr-1">Home /</span> My account
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-white p-5 shadow-md rounded-lg">
          <h4 className="font-bold mb-3">Manage My Account</h4>
          <ul className="space-y-2">
            <li className="ml-5">My Profile</li>
            <li className="ml-5">Address Book</li>
            <li className="ml-5">My Payment Options</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 bg-white p-5 shadow-md rounded-lg">
          <h4 className="font-bold mb-5">Edit Your Profile</h4>

          {/* Name Inputs */}
          <div className="flex flex-col md:flex-row gap-5 mb-5">
            <div className="w-full md:w-1/2">
              <label className="block mb-2">First Name</label>
              <input
                placeholder={info.firstName || "MD"}
                className="w-full h-10 bg-gray-100 p-2 rounded"
                type="text"
                name="firstName"
                value={info.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block mb-2">Last Name</label>
              <input
                placeholder={info.lastName || "RIMEL"}
                className="w-full h-10 bg-gray-100 p-2 rounded"
                type="text"
                name="lastName"
                value={info.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email and Address Inputs */}
          <div className="flex flex-col md:flex-row gap-5 mb-5">
            <div className="w-full md:w-1/2">
              <label className="block mb-2">Email</label>
              <input
                placeholder={info.email || "example@gmail.com"}
                className="w-full h-10 bg-gray-100 p-2 rounded"
                type="text"
                name="email"
                value={info.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block mb-2">Address</label>
              <input
                placeholder={info.address || "Kingston, 5236, United State"}
                className="w-full h-10 bg-gray-100 p-2 rounded"
                type="text"
                name="address"
                value={info.address}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password Changes */}
          <div className="mb-5">
            <h4 className="font-bold mb-3">Password Changes</h4>
            <div className="space-y-3">
              <input
                placeholder="Current Password"
                className="w-full h-10 bg-gray-100 p-2 rounded"
                type="password"
              />
              <input
                placeholder="New Password"
                className="w-full h-10 bg-gray-100 p-2 rounded"
                type="password"
              />
              <input
                placeholder="Confirm New Password"
                className="w-full h-10 bg-gray-100 p-2 rounded"
                type="password"
              />
            </div>
          </div>

          {/* Save and Logout Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p
              onClick={deleteStorage}
              className="cursor-pointer text-red-500 hover:text-red-700"
            >
              Log out
            </p>
            <button
              onClick={handleSave}
              className="py-2 px-5 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Save changes
            </button>
          </div>

          {/* Success Message */}
          {message && <p className="text-green-500 mt-3">{message}</p>}
        </div>
      </div>
    </div>
  );
}