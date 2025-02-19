"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value, // Update the corresponding key
    });
  };

  const handleClear = () => {
    setFormValues({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const message = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent form submission

    // Check if at least one input field has a value
    const hasValue = Object.values(formValues).some(
      (value) => value.trim() !== ""
    );

    if (hasValue) {
      alert("Message sent successfully!");
      handleClear(); // Clear input fields
    } else {
      alert("Please fill in at least one field before sending.");
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-10 mt-[80px] mb-24">
      {/* Contact Info Section */}
      <div className="flex flex-col gap-5 bg-white p-6 shadow-xl w-full max-w-[375px] sm:max-w-[400px]">
        <div className="flex items-center gap-5">
          <FontAwesomeIcon
            icon={faPhone}
            className="bg-red-500 px-2 py-2 rounded-full text-white text-[25px]"
          />
          <p>Call To Us</p>
        </div>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801611112222</p>

        <div className="w-full h-[1px] bg-black"></div>

        <div className="flex items-center gap-5">
          <FontAwesomeIcon
            icon={faPhone}
            className="bg-red-500 px-2 py-2 rounded-full text-white text-[25px]"
          />
          <p>Email Us</p>
        </div>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Email: support@exclusive.com</p>
      </div>

      {/* Contact Form Section */}
      <div className="shadow-xl p-6 w-full max-w-[375px] sm:max-w-[640px]">
        <form className="flex flex-col gap-5">
          {/* Name, Email, Phone Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              className="bg-[#F5F5F5] p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              type="text"
            />
            <input
              className="bg-[#F5F5F5] p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              type="email"
            />
            <input
              className="bg-[#F5F5F5] p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              placeholder="Your Phone"
              type="text"
            />
          </div>

          {/* Message Input */}
          <textarea
            value={formValues.message}
            onChange={handleInputChange}
            name="message"
            placeholder="Write your message"
            className="w-full h-[150px] sm:h-[207px] rounded-[4px] bg-[#F5F5F5] p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              onClick={message}
              className="bg-[#DB4444] text-white px-7 py-3 rounded hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
