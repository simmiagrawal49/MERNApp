import React from "react";
import { Col, Row, Space, Card, Typography } from "antd";
import "./OrderSummary.css";

const { Title, Text } = Typography;

const OrderSummary = ({ cart }) => {
  const itemsTotalPrice = cart?.cartItems
    ?.reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);
  const totalTax = 0.18 * parseFloat(itemsTotalPrice);
  return (
    <div>
      <Row>
        <Col span={12}>
          <Space direction="vertical" size={16}>
            <Card
              style={{
                width: 300,
              }}
            >
              <div className="orderSummary-wrapper">
                <div className="orderSummary-title">Order Summary</div>
                {/* <div className="orderSummary-verticalSpace"></div> */}
                <div>
                  <Text strong>Items:</Text> ${itemsTotalPrice}
                </div>
                <div>
                  <Text strong>Shipping:</Text> $200
                </div>
                <div>
                  <Text strong>Tax:</Text> ${totalTax}
                </div>
                <div>
                  <Text strong>Order Total:</Text> $
                  {parseFloat(itemsTotalPrice) + parseFloat(totalTax)}
                </div>
              </div>
            </Card>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default OrderSummary;
