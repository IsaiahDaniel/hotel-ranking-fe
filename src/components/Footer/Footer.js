import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import { IoLocationSharp } from "react-icons/io5";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#121518] text-white py-20 px-10">
      <div className="container mx-auto grid md:grid-cols-4 xl:grid-cols-4 gap-10">
        <div className="col-span-2">
          <h3 className="text-3xl">About The Hotel<span className="text-[#DFAA5B]">Ranking</span></h3>
          <p className="leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <div className="mt-5">
            <h3 className="text-3xl mb-6">Social Links</h3>
            <div className="flex">
              <div className="border rounded-full p-3 mr-3">
                <FaFacebook />
              </div>
              <div className="border rounded-full p-3 mr-3">
                <FaTwitter />
              </div>
              <div className="border rounded-full p-3 mr-3">
                <FaInstagram />
              </div>
              <div className="border rounded-full p-3 mr-3">
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1">
          <div className="leading-10">
            <h3 className="text-3xl">Important Links</h3>
            <p>Privacy Policy</p>
            <p>Terms and conditions</p>
          </div>

          <div className="leading-10">
            <h3 className="text-3xl">Useful Links</h3>
            <p>Introduction</p>
            <p>Our Partners</p>
            <p>About Us</p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl mb-5">Contact Info</h3>
          <div className="flex flex-col justify-start">
            <div className="flex items-center leading-7 mb-6">
              <div className="border rounded-full p-3 mr-3 ">
                <IoLocationSharp size={20} />
              </div>
              <div>
                <h3>Address</h3>
                <p>Street name: Ny 96782</p>
              </div>
            </div>

            <div className="flex items-center leading-7 mb-6">
              <div className="border rounded-full p-3 mr-3 ">
                <AiFillPhone size={20} />
              </div>
              <div>
                <h3>Phone</h3>
                <p>08171469702</p>
              </div>
            </div>

            <div className="flex items-center mb-10 leading-8">
              <div className="border rounded-full p-3 mr-3 ">
                <AiOutlineMail size={24} />
              </div>
              <div>
                <h3>Email</h3>
                <p>test@test.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
