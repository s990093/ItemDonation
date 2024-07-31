"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaHome,
  FaSignInAlt,
  FaUserPlus,
  FaHeart,
  FaTshirt,
  FaUpload,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set state based on token existence
  }, []);

  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <Link href="/">
            <div className="text-white flex items-center space-x-2">
              <FaHome />
              <span>Home</span>
            </div>
          </Link>
          {!isLoggedIn && (
            <>
              <Link href="/login">
                <div className="text-white flex items-center space-x-2">
                  <FaSignInAlt />
                  <span>Login</span>
                </div>
              </Link>
              <Link href="/register">
                <div className="text-white flex items-center space-x-2">
                  <FaUserPlus />
                  <span>Register</span>
                </div>
              </Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link href="/liked">
                <div className="text-white flex items-center space-x-2">
                  <FaHeart />
                  <span>Liked Items</span>
                </div>
              </Link>
              <Link href="/upload">
                <div className="text-white flex items-center space-x-2">
                  <FaUpload />
                  <span>Upload</span>
                </div>
              </Link>
              <Link href="/logout">
                <div className="text-white flex items-center space-x-2">
                  <FaSignOutAlt />
                  <span>Logout</span>
                </div>
              </Link>
            </>
          )}
        </div>
        <div className="flex space-x-4">
          <Link href="/fashion">
            <div className="text-white flex items-center space-x-2">
              <FaTshirt />
              <span>Fashion</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
