import "./App.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderShop from "./components/Header/HeaderShop";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <ToastContainer />
      {!location.pathname.includes("/shop") &&
        !location.pathname.includes("/product") &&
        !userInfo &&
        !(cartItems.length > 0) && <Header />}
      {(location.pathname.includes("/shop") ||
        location.pathname.includes("/product") ||
        userInfo ||
        cartItems.length > 0) && <HeaderShop />}
      <div>
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}

export default App;
