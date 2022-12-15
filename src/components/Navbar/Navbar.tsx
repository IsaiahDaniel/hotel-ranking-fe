import { useState } from "react";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<Boolean>(false);

  return (
    <nav className="mx-auto container my-2 md:my-9 z-50 text-white p-5">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-3xl text-white">
            Hotel<span className="text-[#DFAA5B]">Ranking</span>
          </h3>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-20">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/hotels">
              <li>Hotels</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/register">
              <li>Register</li>
            </Link>
          </ul>
        </div>

        <div className="hidden md:block">
          <div className="flex space-x-8">
            <CiFacebook
              size={34}
              className="hover:text-[#FFCD05] cursor-pointer"
            />
            <CiTwitter
              size={34}
              className="hover:text-[#FFCD05] cursor-pointer"
            />
            <CiInstagram
              size={34}
              className="hover:text-[#FFCD05] cursor-pointer"
            />
          </div>
        </div>

        <div className="md:hidden" onClick={() => setShowMobileMenu(true)}>
          <AiOutlineBars size={34} />
        </div>
      </div>
      {showMobileMenu && (
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.9)] md:hidden">
          <div className="mt-10 p-5">
            <AiOutlineClose
              size={34}
              onClick={() => setShowMobileMenu(false)}
            />
          </div>
          <div className="flex flex-col items-center justify-start h-full mt-44">
            <ul className="space-y-10 mx-auto mb-10">
              <li onClick={() => setShowMobileMenu(false)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setShowMobileMenu(false)}>
                <Link to="/hotels">Hotels</Link>
              </li>
              <li onClick={() => setShowMobileMenu(false)}>
                <Link to="/login">login</Link>
              </li>
              <li onClick={() => setShowMobileMenu(false)}>
                <Link to="/register">register</Link>
              </li>
            </ul>
            <div className="flex items-center">
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
      )}
    </nav>
  );
};

export default Navbar;
