/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader.jsx";

const Signup = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  // User Signup State
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  /**========================================================================
   *                          User Signup Function
   *========================================================================**/

  const userSignupFunction = async () => {
    // validation
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      toast.error("All Fields are required");
      return;
    }

    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );

      // create user object
      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      // create user Refrence
      const userRefrence = collection(fireDB, "user");

      // Add User Detail
      await addDoc(userRefrence, user);

      setUserSignup({
        name: "",
        email: "",
        password: "",
      });

      toast.success("Signup Successfully");

      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Signup Failed");
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen md:bg-gradient-to-r from-[#ff758c] to-[#ff7eb3]">
      {loading && <Loader />}

      {/* Login Form  */}
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
        <div className="mb-8">
          <img
            src="https://i.ibb.co/nQcx4bD/undraw-undraw-undraw-undraw-sign-up-ln1s-1-s4bc-1-ee41-1-3xti.png"
            alt="Login illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* Top Heading  */}
        <div className="w-full">
          <h2 className="text-center text-4xl mb-8 font-bold text-pink-500">
            Signup
          </h2>

        {/* Input One  */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Full Name"
            value={userSignup.name}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                name: e.target.value,
              });
            }}
            className="border border-pink-100 focus:outline-none focus:border-pink-500 px-4 py-3 w-full rounded-lg outline-none placeholder-gray-500 transition duration-300"
          />
        </div>

        {/* Input Two  */}
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email Address"
            value={userSignup.email}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                email: e.target.value,
              });
            }}
            className="border border-pink-100 focus:outline-none focus:border-pink-500 px-4 py-3 w-full rounded-lg outline-none placeholder-gray-500 transition duration-300"
          />
        </div>

        {/* Input Three  */}
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={userSignup.password}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                password: e.target.value,
              });
            }}
            className="border border-pink-100 focus:outline-none focus:border-pink-500 px-4 py-3 w-full rounded-lg outline-none placeholder-gray-500 transition duration-300"
          />
        </div>

        {/* Signup Button  */}
        
          <button
            type="button"
            onClick={userSignupFunction}
            className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-3 font-bold rounded-lg focus:outline-none transition duration-300 mb-4"
          >
            Signup
          </button>
        </div>

        <div>
          <h2 className="text-black">
            Have an account{" "}
            <Link className=" text-pink-500 font-bold hover:underline" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
        </div>
    
  );
};

export default Signup;
