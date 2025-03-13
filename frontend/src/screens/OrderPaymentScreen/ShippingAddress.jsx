import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Input, Select, Button } from "antd";
import { clearCartItems, saveShippingAddress } from "../../slices/cartSlice";
import { useCreateOrderMutation } from "../../slices/orderApiSlice";
import { loadScript } from "../../utils/loadingScript";
import { useRazorPayMutation } from "../../slices/razorPayApiSlice";

const { Option } = Select;

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const ShippingAddress = () => {
  const [form] = Form.useForm();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [razorPay, { isLoading }] = useRazorPayMutation();
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");

  const [phone, setPhone] = useState(shippingAddress.phone || "");
  const [fullName, setFullName] = useState(shippingAddress.fullName || "");
  const [state, setState] = useState(shippingAddress.state || "");

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const totalPrice = cart.totalPrice;
    const data = await razorPay({ totalPrice }).unwrap();

    const options = {
      key: "rzp_test_mbXI4lPl103mE9",
      currency: data.currency.toString(),
      amount: data.amount,
      name: "Payment",
      description: "Thank you for loving our unique creations",
      image: "./cute-ai-generated-cartoon-bunny_23-2150288881.avif",
      handler: async function (response) {
        dispatch(clearCartItems());
        if (response.razorpay_payment_id) {
          const res = await createOrder({
            orderItems: cart.cartItems,
            shippingAddress: { address, city, postalCode, country },
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice,
            paymentResult: {},
          }).unwrap();
          toast.success("Order is paid");
          navigate(`/shop/order/${res._id}`);
        }
      },
      prefill: {
        name: "new name",
        email: "sdfdsjfh2@ndsfdf.com",
        phone_number: "9899999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const [createOrder] = useCreateOrderMutation();
  const submitHandler = async (values) => {
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    try {
      displayRazorpay();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={submitHandler}
      initialValues={{
        fullName: fullName,
        address: address,
        city: city,
        state: state,
        postalCode: postalCode,
        country: country,
        phone: phone,
        prefix: "86",
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="fullname"
        label="Full Name"
        rules={[
          {
            required: true,
            message: "Please input your Full Name!",
            whitespace: true,
          },
        ]}
        onChange={(e) => setFullName(e.target.value)}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: "Please add your habitual residence!",
          },
        ]}
        onChange={(e) => setAddress(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="city"
        label="City"
        rules={[
          {
            required: true,
            message: "Please input your city!",
          },
        ]}
        onChange={(e) => setCity(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="state"
        label="State"
        rules={[
          {
            required: true,
            message: "Please input your state!",
          },
        ]}
        onChange={(e) => setState(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="postalCode"
        label="Postal Code"
        rules={[
          {
            required: true,
            message: "Please input your postal Code!",
          },
        ]}
        onChange={(e) => setPostalCode(e.target.value)}
      >
        <Input
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
        onChange={(e) => setPhone(e.target.value)}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button
          size="large"
          htmlType="submit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pay Now
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ShippingAddress;
