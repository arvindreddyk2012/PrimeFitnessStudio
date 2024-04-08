import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.jpeg";
const Navbar = () => {
  return (
    <nav className=" fixed top-0 left-0 right-0 z-50 p-2 text-white  bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between font-poppins">
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt=""
              className="md:w-14 md:h-14 h-10 w-10 rounded-full"
            />
            <h1 className="sm:text-2xl text-[1rem] font-bold text text-yellow-400 font-poppins">
              Prime Fitness Studio
            </h1>
          </div>
          <div className="flex items-center space-x-4 cursor-pointer">
            <ul className=" md:block hidden">
              <li>
                <Link
                  to="/"
                  className="font-semibold text-yellow-400 p-2 rounded-lg hover:bg-yellow-400 
                  transition-all hover:text-black font-poppins"
                >
                  Home
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  to="/contact"
                  className="font-semibold text-yellow-400 p-2 rounded-lg hover:bg-yellow-400 
                  transition-all hover:text-black"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  to="/membership"
                  className="font-semibold text-yellow-400 p-2 rounded-lg hover:bg-yellow-400 
                  transition-all hover:text-black"
                >
                  Membership
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  to="/login"
                  className="font-semibold text-yellow-400 p-2 rounded-lg hover:bg-yellow-400 
                  transition-all hover:text-black"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
