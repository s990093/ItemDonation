"use client";
// pages/logout.js
import { useEffect } from "react";
import { useAuth } from "../Provider/AuthContext";
import handleLogout from "../utils/logout";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    handleLogout();
    logout();
    router.push("/");
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-xl text-blue-800">Logging out...</h1>
    </div>
  );
};

export default Logout;
