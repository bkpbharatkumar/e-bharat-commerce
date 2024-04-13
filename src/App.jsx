import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/Home.jsx";
import NoPage from "./pages/noPage/NoPage.jsx";
import ProductInfo from "./pages/productInfo/ProductInfo.jsx";
import ScrollTop from "./components/scrollTop/ScrollTop.jsx";
import CartPage from "./pages/cart/CartPage.jsx";
import AllProduct from "./pages/allProduct/AllProduct.jsx";
import Signup from "./pages/registration/Signup.jsx";
import Login from "./pages/registration/Login.jsx";
import UserDashboard from "./pages/user/UserDashboard.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AddProductPage from "./pages/admin/AddProductPage.jsx";
import UpdateProductPage from "./pages/admin/UpdateProductPage.jsx";
import MyState from './context/myState';
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser.jsx";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin.jsx";
import CategoryPage from "./pages/category/CategoryPage.jsx";

const App = () => {
  return (
    <MyState>
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:categoryname" element={<CategoryPage />} />  {/* category Page route  */}
        <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />
          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />
      </Routes>
      <Toaster/>
    </Router>
  </MyState>
  );
}

export default App;
