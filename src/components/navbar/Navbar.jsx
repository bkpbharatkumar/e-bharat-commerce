import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar.jsx";
import { useSelector } from "react-redux";

const Navbar = () => {
  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));

  // navigate
  const navigate = useNavigate();

  // logout function
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  // CartItems
  const cartItems = useSelector((state) => state.cart);

  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-[0.9rem] text-base md:text-base lg:text-lg lg:gap-12 md:gap-10 sm:gap-10 sx:gap-0 sx:text-md px-5 ">
      {/* Home */}
      <li className="relative group">
        <Link
          to={"/"}
          className="text-white uppercase transition-all lg:hover:text-[20px]"
        >
          Home
        </Link>
        <span className="absolute inset-x-96 bottom-0 h-0.5 bg-[#1c045f] transition-all duration-200 group-hover:inset-x-0"></span>
      </li>

      {/* All Product */}
      <li className="relative group">
        <Link
          to={"/allproduct"}
          className="text-white uppercase transition-all lg:hover:text-[20px]"
        >
          Products
        </Link>
        <span className="absolute inset-x-96 bottom-0 h-0.5 bg-[#1c045f] transition-all duration-200 group-hover:inset-x-0"></span>
      </li>

      {/* Signup */}
      {!user ? (
        <li className="relative group">
          <Link
            to={"/signup"}
            className="text-white uppercase transition-all lg:hover:text-[20px]"
          >
            Signup
          </Link>
          <span className="absolute inset-x-96 bottom-0 h-0.5 bg-[#1c045f] transition-all duration-200 group-hover:inset-x-0"></span>
        </li>
      ) : (
        ""
      )}

      {/* Signup */}
      {!user ? (
        <li className="relative group">
          <Link
            to={"/login"}
            className="text-white uppercase transition-all lg:hover:text-[20px]"
          >
            Login
          </Link>
          <span className="absolute inset-x-96 bottom-0 h-0.5 bg-[#1c045f] transition-all duration-200 group-hover:inset-x-0"></span>
        </li>
      ) : (
        ""
      )}

      {/* User */}
      {user?.role === "user" && (
        <li className="relative group">
          <Link
            to={"/user-dashboard"}
            className="text-white lg:md:uppercase md:uppercase transition-all lg:hover:text-[20px]"
          >
            User
          </Link>
          <span className="absolute inset-x-96 bottom-0 h-0.5 bg-[#1c045f] transition-all duration-200 group-hover:inset-x-0"></span>
        </li>
      )}

      {/* Admin */}
      {user?.role === "admin" && (
        <li className="relative group">
          <Link
            to={"/admin-dashboard"}
            className="text-white uppercase transition-all lg:hover:text-[20px]"
          >
            Admin
          </Link>
          <span className="absolute inset-x-96 bottom-0 h-0.5 bg-[#1c045f] transition-all duration-200 group-hover:inset-x-0"></span>
        </li>
      )}

      {/* logout */}
      {user && (
        <li
          className=" cursor-pointer text-white uppercase transition-all lg:hover:text-[20px] hover:text-amber-200"
          onClick={logout}
        >
          logout
        </li>
      )}

      {/* Cart */}
      <li className="relative group">
        <Link
          to={"/cart"}
          className="text-white  uppercase transition-all lg:hover:text-[20px]"
        >
          <span className="absolute inset-x-96 bottom-0 h-0.5 bg-[#1c045f] transition-all duration-200 group-hover:inset-x-0"></span>
          Cart({cartItems.length})
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="bg-pink-600 bg-opacity-95 lg:sticky  top-0  shadow-md shadow-gray-500 z-50">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-5 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0 display">
          <Link to={"/"}>
            <h2 className=" font-bold text-white text-[22px] text-center merienda uppercase bharat hover:text-transparent">
              E-Bharat
            </h2>
          </Link>
        </div>

        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>

        {/* Search Bar  */}
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
