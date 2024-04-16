import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      {/* footer  */}
      <footer className="text-gray-600 body-font bg-pink-600">
        {/* main  */}
        <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          {/* logo  */}
          <Link
            to={"/"}
            className="flex title-font font-medium items-center md:justify-start justify-center text-white"
          >
          <span className="text-xl font-bold new-font">E-Bharat</span>
          </Link>
          {/* para  */}
          <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 ebharat —
            <Link to={"/"} className="text-gray-100 ml-1">
              @ebharat
            </Link>
          </p>

          {/* media icon  */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* facebook  */}
            <Link
              to="https://www.facebook.com/bharatparihar.official"
              className="ml-3 text-gray-100 cursor-pointer"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebook className="text-2xl text-white hover:text-[text-white hover:text-[#1877F2] transition-all hover:scale-150" />
            </Link>

            {/* twitter  */}
            <Link
              to="https://twitter.com/i_m_bkp"
              className="ml-3 text-gray-100 cursor-pointer"
              rel="noopener noreferrer"
              target="_blank"
            >
              <AiFillTwitterCircle className="text-2xl text-white hover:text-[#1DA1F2] transition-all hover:scale-150" />
            </Link>

            {/* instagram  */}
            <Link
              to="https://instagram.com/i.m.bkp"
              className="ml-3 text-gray-100 cursor-pointer"
              rel="noopener noreferrer"
              target="_blank"
            >
              <RiInstagramFill className="text-2xl text-white hover:text-[#833AB4] transition-all hover:scale-150" />
            </Link>

            {/* linkedIn  */}
            <Link
              to="https://www.linkedin.com/in/bharat-kumar-92313024a"
              className="ml-3 text-gray-100 cursor-pointer"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin className="text-2xl text-white hover:text-[#0077B5] transition-all hover:scale-150" />
            </Link>

            {/* GitHub  */}
            <Link
              to="https://github.com/bkpbharatkumar"
              className="ml-3 text-gray-100 cursor-pointer"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className="text-2xl text-white hover:text-[#000000] transition-all hover:scale-150" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
