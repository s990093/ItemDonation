"use client";
// pages/logout.js
import { useEffect } from "react";
import logout from "../utils/logout";

const Logout = () => {
  useEffect(() => {
    logout();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-xl text-blue-800">Logging out...</h1>
    </div>
  );
};

export default Logout;
