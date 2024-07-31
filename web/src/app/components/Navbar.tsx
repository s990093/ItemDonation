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

import { useAuth } from "../Provider/AuthContext";

const Navbar = () => {
  const { isLoggedIn, username, logout } = useAuth();

  // useEffect(() => {
  //   console.log("isLoggedIn:", isLoggedIn);
  //   console.log("username:", username);
  // }, [isLoggedIn, username]);

  const navLinks = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/fashion", label: "Fashion", icon: <FaTshirt /> },
    ...(isLoggedIn
      ? [
          { href: "/liked", label: "Liked Items", icon: <FaHeart /> },
          { href: "/upload", label: "Upload", icon: <FaUpload /> },
          { href: "/logout", label: "Logout", icon: <FaSignOutAlt /> },
        ]
      : [
          { href: "/login", label: "Login", icon: <FaSignInAlt /> },
          { href: "/register", label: "Register", icon: <FaUserPlus /> },
        ]),
  ];

  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          {navLinks.map(({ href, label, icon }) => (
            <Link key={href} href={href}>
              <div className="text-white flex items-center space-x-2">
                {icon}
                <span>{label}</span>
              </div>
            </Link>
          ))}
        </div>
        {isLoggedIn && <div className="text-white">Welcome, {username}!</div>}
      </div>
    </nav>
  );
};
export default Navbar;
