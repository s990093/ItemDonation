import Head from "next/head";
import Link from "next/link";

const Login = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded">
        <h1 className="text-2xl mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Username</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <button type="submit" className="bg-blue-600 p-2 rounded w-full">
            Login
          </button>
        </form>
        <p className="mt-4">
          {"Don't have an account?"}
          <Link href="/register">
            <div className="text-blue-400">Register</div>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
