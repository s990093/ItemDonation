"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { DJANGO_URL } from "../constant";
import { useAuth } from "../Provider/AuthContext";

const Register = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(DJANGO_URL("web/api/register/"), {
        username,
        password,
        email,
      });
      // localStorage.setItem("token", response.data.token);
      // localStorage.setItem("username", response.data.username);
      login(response.data.token, response.data.username);

      router.push("/");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded">
        <h1 className="text-2xl mb-4">Register</h1>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Username</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 p-2 rounded w-full"
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <Link href="/login">
            <div className="text-blue-400">Login</div>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
