import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import OrderScreen from "./screens/OrderScreen/OrderScreen";
import OrderListScreen from "./screens/admin/OrderListScreen";
import ProductListScreen from "./screens/admin/ProductListScreen";
import ProductEditScreen from "./screens/admin/ProductEditScreen";
import UserListScreen from "./screens/admin/UserListScreen";
import UserEditScreen from "./screens/admin/UserEditScreen";
import ShopScreen from "./screens/ShopScreen/ShopScreen";
import BlogScreen from "./screens/BlogScreen";
import store from "./store";
import { Provider } from "react-redux";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import CartScreen from "./screens/CartScreen/CartScreen";
import ShippingScreen from "./screens/ShippingScreen/ShippingScreen";
import AboutScreen from "./screens/AboutScreen/AboutScreen";
import OrderPaymentScreen from "./screens/OrderPaymentScreen/OrderPaymentScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route index={true} path="/shop" element={<ShopScreen />} />
      <Route index={true} path="/shop/:sortOrder" element={<ShopScreen />} />
      <Route index={true} path="/blog" element={<BlogScreen />} />
      <Route index={true} path="/about" element={<AboutScreen />} />
      {/* <Route path='/search/:keyword' element={<ShopScreen />} /> */}
      <Route path="/shop/page/:pageNumber" element={<ShopScreen />} />
      {/* <Route
        path='/search/:keyword/page/:pageNumber'
        element={<ShopScreen />}
      /> */}
      <Route path="/shop/product/:id" element={<ProductScreen />} />
      <Route path="/shop/cart" element={<CartScreen />} />
      <Route path="/shop/login" element={<LoginScreen />} />
      <Route path="/shop/register" element={<RegisterScreen />} />
      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/shop/shipping" element={<ShippingScreen />} />
        <Route path="/shop/orderPaymentScreen" element={<OrderPaymentScreen />} />
        <Route path="/shop/order/:id" element={<OrderScreen />} />
        <Route path="/shop/profile" element={<ProfileScreen />} />
      </Route>
      {/* Admin users */}
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/shop/orderlist" element={<OrderListScreen />} />
        <Route path="/admin/shop/productlist" element={<ProductListScreen />} />
        <Route
          path="/admin/shop/productlist/:pageNumber"
          element={<ProductListScreen />}
        />
        <Route path="/admin/shop/userlist" element={<UserListScreen />} />
        <Route
          path="/admin/shop/product/:id/edit"
          element={<ProductEditScreen />}
        />
        <Route path="/admin/shop/user/:id/edit" element={<UserEditScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
