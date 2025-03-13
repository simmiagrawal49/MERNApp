import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Row, Card, Image, Typography } from "antd";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import "./OrderPaymentScreen.css";
import ShippingAddress from "./ShippingAddress";

const { Title, Text } = Typography;

export default function OrderPaymentScreen() {

  const cart = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="OrderPaymentScreen-page-wrapper">
      <div className="OrderPaymentScreen-flex-container">
        <div className="OrderPaymentScreen-flex-review">
          <div className="OrderPaymentScreen-shippping-details">
            <Card style={{ width: 820 }} bordered={false}>
              <h2>Shipping Details</h2>
              <p>
                <strong>Name: </strong> {userInfo.name}
              </p>
              <p>
                <strong>Email: </strong>
                <a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>
              </p>
              <p>
              <ShippingAddress />
              </p>
            </Card>
          </div>

          <div className="OrderPaymentScreen-review-items">
            <Card style={{ width: 820 }} bordered={false}>
              <h2>Review ordered items</h2>
              {8 === 0 ? (
                <Message type="error" message="Order is Empty" />
              ) : (
                <>
                  {cart.cartItems.map((item, index) => (
                    <Row
                      gutter={[32, 48]}
                      className="cart-item-row"
                      key={item.id}
                    >
                      <Col span={6}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fluid={true}
                          rounded={true}
                          width={120}
                          height={120}
                        />
                      </Col>
                      <Col span={6}>
                        <Link to={`/shop/product/${item.product}`}>
                          {item.name}
                        </Link>
                        <div>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </div>
                      </Col>
                    </Row>
                  ))}
                </>
              )}
            </Card>
          </div>
        </div>
        <div className="OrderPaymentScreen-flex-summary">
          <Card>
            <div className="OrderPaymentScreen-orderSummary">
              <div>
                <Title level={2}>Order Summary</Title>
              </div>
              {/* <div className="orderSummary-verticalSpace"></div> */}
              <div>
                <Text strong>Items:</Text> ${cart.itemsPrice}
              </div>
              <div>
                <Text strong>Shipping:</Text> ${cart.shippingPrice}
              </div>
              <div>
                <Text strong>Tax:</Text> ${cart.taxPrice}
              </div>
              <div>
                <Text strong>Order Total:</Text> ${cart.totalPrice}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
