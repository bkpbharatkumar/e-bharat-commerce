/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  // User Signup State
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  /**========================================================================
   *                          User Login Function
   *========================================================================**/

  const userLoginFunction = async () => {
    // validation
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All Fields are required");
    }

    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );
      // console.log(users.user)

      try {
        const q = query(
          collection(fireDB, "user"),
          where("uid", "==", users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");
          setLoading(false);
          if (user.role === "user") {
            navigate("/user-dashboard");
          } else {
            navigate("/admin-dashboard");
          }
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login Failed");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen md:bg-gradient-to-r from-[#ff758c] to-[#ff7eb3]">
      {loading && <Loader />}
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg xs:shadow-none">
        <div className="mb-8">
          <img
            src="https://i.ibb.co/qrq7Vyy/Sign.png"
            alt="Login illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* Login Form  */}
        <div className="w-full">
          <h2 className="text-center text-4xl mb-8 font-bold text-pink-500">
            Login
          </h2>

          {/* Input One  */}
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={userLogin.email}
              onChange={(e) => {
                setUserLogin({
                  ...userLogin,
                  email: e.target.value,
                });
              }}
              className="border border-pink-100 focus:outline-none focus:border-pink-500 px-4 py-3 w-full rounded-lg outline-none placeholder-gray-500 transition duration-300"
            />
          </div>

          {/* Input Two  */}
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={userLogin.password}
              onChange={(e) => {
                setUserLogin({
                  ...userLogin,
                  password: e.target.value,
                });
              }}
              className="border border-pink-100 focus:outline-none focus:border-pink-500 px-4 py-3 w-full rounded-lg outline-none placeholder-gray-500 transition duration-300"
            />
          </div>

          {/* Signup Button  */}
          <button
            type="button"
            onClick={userLoginFunction}
            className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-3 font-bold rounded-lg focus:outline-none transition duration-300 mb-4"
          >
            Login
          </button>
        <div>
          <h2 className="text-black">
            Don't Have an account{" "}
            <Link
              className=" text-pink-500 font-bold hover:underline"
              to={"/signup"}
            >
              Signup
            </Link>
          </h2>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
