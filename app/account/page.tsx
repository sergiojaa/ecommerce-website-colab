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
    <div className="relative mb-40 flex items-center justify-center h-screen">
      <div className="absolute left-16 top-16 ml-5">
        <h3>
          <span className="text-gray-500 mr-1">Home /</span> My account
        </h3>
      </div>
      <div className="absolute flex flex-col gap-1 left-16 top-40 ml-5">
        <h4>Manage My Account</h4>
        <h4 className="ml-7">My Profile</h4>
        <h4 className="ml-7">Address Book</h4>
        <h4 className="ml-7">My Payment Options</h4>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex bg-white shadow-xl ml-32 mt-40 p-10 flex-col gap-4">
          <h4>Edit Your Profile</h4>
          <div className="flex gap-3 items-center">
            <div className="flex flex-col">
              <label>First Name</label>
              <input
                placeholder={info.firstName || "MD"}
                className="w-[300px] h-[40px] bg-[#F5F5F5]"
                type="text"
                name="firstName"
                value={info.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Last Name</label>
              <input
                placeholder={info.lastName || "RIMEL"}
                className="w-[300px] h-[40px] bg-[#F5F5F5]"
                type="text"
                name="lastName"
                value={info.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex flex-col">
              <label>Email</label>
              <input
                placeholder={info.email || "example@gmail.com"}
                className="w-[300px] h-[40px] bg-[#F5F5F5]"
                type="text"
                name="email"
                value={info.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Address</label>
              <input
                placeholder={info.address || "Kingston, 5236, United State"}
                className="w-[300px] h-[40px] bg-[#F5F5F5]"
                type="text"
                name="address"
                value={info.address}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <h4>Password Changes</h4>
            <div className="flex flex-col gap-5">
              <input placeholder="Current Password" className="w-[610px] h-[40px] bg-[#F5F5F5]" type="password" />
              <input placeholder="New Password" className="w-[610px] h-[40px] bg-[#F5F5F5]" type="password" />
              <input placeholder="Confirm New Password" className="w-[610px] h-[40px] bg-[#F5F5F5]" type="password" />
            </div>
          </div>
          <div className="flex items-center mt-10 gap-3 justify-end">
            <p onClick={deleteStorage} className="cursor-pointer text-[18px]">Log out</p>

            <button onClick={handleSave} className="py-3 rounded-md text-white px-10 bg-red-500">
              Save changes
            </button>
          </div>
          {message && <p className="text-green">{message}</p>}

        </div>
      </div>
    </div>
  );
}
