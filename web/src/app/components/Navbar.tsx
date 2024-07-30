import Link from "next/link";
import {
  FaHome,
  FaSignInAlt,
  FaUserPlus,
  FaHeart,
  FaTshirt,
  FaGift,
  FaUpload,
} from "react-icons/fa";

const Navbar = () => {
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
          <Link href="/liked">
            <div className="text-white flex items-center space-x-2">
              <FaHeart />
              <span>Liked Items</span>
            </div>
          </Link>
        </div>
        <div className="flex space-x-4">
          {/* <Link href="/free">
            <div className="text-white flex items-center space-x-2">
              <FaGift />
              <span>Free Items</span>
            </div>
          </Link> */}
          <Link href="/fashion">
            <div className="text-white flex items-center space-x-2">
              <FaTshirt />
              <span>Fashion</span>
            </div>
          </Link>
          <Link href="/upload">
            <div className="text-white flex items-center space-x-2">
              <FaUpload />
              <span>Upload</span>
            </div>
          </Link>
          {/* Add more categories as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
