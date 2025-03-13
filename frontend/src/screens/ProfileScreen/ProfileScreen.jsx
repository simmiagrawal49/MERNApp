import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useProfileMutation } from "../../slices/usersApiSlice";
import { useGetMyOrdersQuery } from "../../slices/orderApiSlice";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import AllOrders from "../../components/AllOrders/AllOrders";
import "./ProfileScreen.css";

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.name]);

  const { data: orders, isLoading, error } = useGetMyOrdersQuery();

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/shop/login");
    } catch (err) {
      console.error(err);
    }
  };

  const { Text } = Typography;

  return (
    <div className="profile-wrapper">
      <h1>Account Details</h1>
      <div>
        <Text strong>Name : </Text>
        <Text>{name}</Text>
      </div>
      <div>
        <Text strong>Email : </Text>
        <Text>{email}</Text>
      </div>
      <div className="profile-logout">
        <UserOutlined />
        <Button variant="text" onClick={logoutHandler}>
          <p>Logout</p>
        </Button>
      </div>

      {loadingUpdateProfile && <Loader />}

      <div className="profile-order-history">
        <h1>Order History</h1>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">
            {error?.data?.message || error.error}
          </Message>
        ) : (
          <AllOrders />
        )}
      </div>
    </div>
  );
};
export default ProfileScreen;
