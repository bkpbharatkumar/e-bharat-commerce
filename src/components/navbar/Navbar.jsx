import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar.jsx";
import { useSelector } from "react-redux";


const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

     // CartItems
     const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-[0.9rem] text-base md:text-base lg:text-lg lg:gap-12 md:gap-10 sm:gap-8 px-5 ">
            {/* Home */}
            <li>
                <Link to={'/'} className="text-white hover:text-[#1c045f]">Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'} className="text-white hover:text-[#1c045f]">All Product</Link>
            </li>

            {/* Signup */}
            {!user ? <li>
                <Link to={'/signup'} className="text-white hover:text-[#1c045f]">Signup</Link>
            </li> : ""}

            {/* Signup */}
            {!user ? <li>
                <Link to={'/login'} className="text-white hover:text-[#1c045f]">Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'} className="text-white hover:text-[#1c045f]">User</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'} className="text-white hover:text-[#1c045f]">Admin</Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer text-white hover:text-[#1c045f]" onClick={logout}>
                logout
            </li>}

            {/* Cart */}
            <li>
                <Link to={'/cart'} className="text-white hover:text-[#1c045f]">
                    Cart({cartItems.length})
                </Link>
            </li>
        </ul>
    )
    return (
        <nav className="bg-pink-600 bg-opacity-95 sticky top-0 h-20 shadow-md shadow-gray-500">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-5 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className=" font-bold text-white text-2xl text-center new-font">E-Bharat</h2>
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;
