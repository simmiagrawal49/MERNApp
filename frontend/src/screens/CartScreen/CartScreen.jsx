import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import Message from "../../components/Message";
import { addToCart, removeFromCart } from "../../slices/cartSlice";
import { Col, Row, Space, Button, Card, Image, Typography } from "antd";
import "./CartScreen.css";

const { Title, Text } = Typography;

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/shop/login?redirect=/shop/orderPaymentScreen");
  };

  const backToShop = () => {
    navigate("/shop");
  };

  return (
    <div className="cart-page-wrapper">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          <Message type="warning" message="Your cart is empty" />
          <br />
          <br />
          <Button type="primary" className="btn-block" onClick={backToShop}>
            Return to Shop
          </Button>
        </div>
      ) : (
        <div className="cart-flex-container">
          {/* <Row gutter={[32, 48]}>
            <Col span={4}>Product</Col>
            <Col span={4}>Name </Col>
            <Col span={4}>Price</Col>
            <Col span={4}>Quantity</Col>
            <Col span={4}>Delete</Col>
          </Row> */}
          <div className="cart-flex-cart-item">
            {cartItems.map((item) => (
              <Row gutter={[32, 48]} className="cart-item-row">
                <Col span={6}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fluid
                    rounded
                    width={180}
                    height={180}
                  />
                </Col>

                <Col span={18}>
                  <Card style={{ width: 600, height: 180 }} bordered={false}>
                    <div className="cart-item-card-content-top">
                      <div>
                        <Link to={`/shop/product/${item._id}`}>
                          {item.name}
                        </Link>
                      </div>
                      <div>${item.price}</div>
                    </div>
                    <div className="cart-item-card-content-bottom">
                      {/* <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          addToCartHandler(item, Number(e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control> */}

                      <Button
                        type="link"
                        className="cart-item-delete"
                        onClick={() => removeFromCartHandler(item._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
            ))}
            <div className="cart-continue-shopping">
            <a href="/shop">Continue Shopping</a>
            </div>
          </div>
          <div className="cart-flex-cart-item-summary">
            <Row>
              {/* <Col span={12}>
              Want to add more items <Link to="/shop">Go Back</Link>
            </Col> */}
              <Col span={12}>
                <Space direction="vertical" size={16}>
                  <Card
                    style={{
                      width: 300,
                    }}
                  >
                    <div className="cartScreen-cartSummary">
                      <div className="cartScreen-subtotal">
                        <Title level={4}>{"Subtotal"}</Title>
                      </div>

                      {/* ({cartItems.reduce((acc, item) => acc + item.qty, 0)})items */}
                      <div className="cartScreen-subtotalPrice">
                        <Text strong>
                          $
                          {cartItems
                            .reduce(
                              (acc, item) => acc + item.qty * item.price,
                              0
                            )
                            .toFixed(2)}
                        </Text>
                      </div>
                    </div>
                    <div>
                      <Text>Taxes and shipping calculated at checkout</Text>
                    </div>
                    <div className="cartScreen-btnCheckout">
                      <Button
                        size="large"
                        className="btn-block"
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                      >
                        Checkout
                      </Button>
                    </div>
                  </Card>
                </Space>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
