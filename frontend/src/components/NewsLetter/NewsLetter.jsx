import React from "react";
import { Col, Row, Input, Form, Button, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  useNewsletterSubcriptionsMutation,
  useGetNewsletterSubcriptionsQuery,
} from "../../slices/newsletterSubcriptionsApiSlice";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [form] = Form.useForm();
  // const onFinish = (values) => {
  //   console.log("Received values of form: ", values);
  // };
  const [email, setEmail] = useState("");

  const [newsLetterSubscription, { isLoading }] =
    useNewsletterSubcriptionsMutation();
  const { data, isLoadingSubscriptions } = useGetNewsletterSubcriptionsQuery();

  const uniqueEmails = data?.map(
    (subscribedEmailers) => subscribedEmailers.email
  );
  const submitHandler = async (e) => {
    // e.preventDefault();
    // console.log("Received values of form: ", values);

    try {
      if (uniqueEmails.includes(email)) {
        alert("Already Subscribed");
      } else {
        await newsLetterSubscription({ email });
        alert("Thanks for Subscribing");
      }
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="newsletter-bg">
      <div className="newsletter-wrapper">
        <Row className="newsletter-content">
          <Col span={12}>
            <h1>Subscribe to our Newsletter</h1>
            <p>
              Be the first to know about new art collections and shop specials
              ✨
            </p>
            <Form
              // {...formItemLayout}
              form={form}
              name="register"
              onFinish={submitHandler}
              style={{
                maxWidth: 600,
              }}
              scrollToFirstError
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: false,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Space.Compact
                  style={{
                    width: "100%",
                  }}
                >
                  <Input
                    size="large"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    // type="text"
                    size="large"
                    htmlType="submit"
                    disabled={isLoading}
                  >
                    <ArrowRightOutlined />
                  </Button>
                </Space.Compact>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NewsLetter;
