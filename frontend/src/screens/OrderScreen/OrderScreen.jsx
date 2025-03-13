import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  useGetOrderDetailsQuery,
  useDeliverOrderMutation,
} from "../../slices/orderApiSlice";
import { Col, Row, Card, Image, Typography } from "antd";
import "./OrderScreen.css";

const { Title, Text } = Typography;

const OrderScreen = () => {
  const { id: orderId } = useParams();

  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const deliverHandler = async () => {
    await deliverOrder(orderId);
    refetch();
  };

  const orderDeliveryDate = `Delivered on ${order?.deliveredAt}`;
  const orderPaidDate = `Paid on ${order?.paidAt}`;
  return (
    <div className="order-page-wrapper">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message type="error" message={error} />
      ) : (
        <div className="order-flex-container">
          <div className="order-flex-review">
            <div className="order-shippping-details">
              <Card style={{ width: 820 }} bordered={false}>
                <h2>Shipping Details</h2>
                <p>
                  <strong>Name: </strong> {order.user.name}
                </p>
                <p>
                  <strong>Email: </strong>
                  <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                </p>
                <p>
                  <strong>Address:</strong>
                  {order.shippingAddress.address},{order.shippingAddress.city}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
              </Card>
            </div>

            <div className="order-review-items">
              <Card style={{ width: 820 }} bordered={false}>
                <h2>Ordered items:</h2>
                {order.orderItems.length === 0 ? (
                  <Message type="error" message="Order is Empty" />
                ) : (
                  <>
                    {order.orderItems.map((item, index) => (
                      <Row
                        gutter={[32, 48]}
                        className="cart-item-row"
                        key={order.id}
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
                            {item.qty} x ${item.price} = $
                            {item.qty * item.price}
                          </div>
                        </Col>
                      </Row>
                    ))}
                  </>
                )}
              </Card>
            </div>
          </div>
          <div className="order-flex-summary">
            <Card>
              <div className="orderScreen-orderSummary">
                <div>
                  <Title level={2}>Order Summary</Title>
                </div>
                {/* <div className="orderSummary-verticalSpace"></div> */}
                <div>
                  <Text strong>Items:</Text> ${order.itemsPrice}
                </div>
                <div>
                  <Text strong>Shipping:</Text> ${order.shippingPrice}
                </div>
                <div>
                  <Text strong>Tax:</Text> ${order.taxPrice}
                </div>
                <div>
                  <Text strong>Order Total:</Text> ${order.totalPrice}
                </div>
              </div>

              {loadingDeliver && <Loader />}

              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <button
                    type="button"
                    className="btn btn-block"
                    onClick={deliverHandler}
                  >
                    Mark As Delivered
                  </button>
                )}
            </Card>
            <h5>Order Id : {order._id}</h5>
            <div className="order-paid-status">
              {order.isPaid ? (
                <Message type="success" message={orderPaidDate} />
              ) : (
                <Message type="error" message="Not Paid" />
              )}
            </div>
            <div className="order-delivered-status">
              {order.isDelivered ? (
                <Message type="success" message={orderDeliveryDate} />
              ) : (
                <Message type="error" message="Not Delivered" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderScreen;
