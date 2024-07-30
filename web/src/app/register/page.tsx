import Head from "next/head";
import Link from "next/link";

const Register = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <Head>
        <title>Register</title>
      </Head>
      <div className="bg-gray-800 p-8 rounded">
        <h1 className="text-2xl mb-4">Register</h1>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Username</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
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
            Register
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <Link href="/login">
            <a className="text-blue-400">Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
