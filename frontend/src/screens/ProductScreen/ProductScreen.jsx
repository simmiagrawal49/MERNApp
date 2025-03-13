import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Col, Row } from "antd";
import { Button, Space, Image } from "antd";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import {
  useGetProductDetailsQuery,
  useGetAllProductsQuery,
} from "../../slices/productsApiSlice";
import { addToCart } from "../../slices/cartSlice";
import "./ProductScreen.css";
import { Typography } from "antd";
import Product from "../../components/Product/Product";
import soldOut from "./soldOut.jpg";

const { Title, Text } = Typography;

const ProductScreen = () => {
  const { id: productId, keyword } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("large"); // default is 'middle'

  const addToCartHandler = (e) => {
    e.preventDefault();
    dispatch(addToCart({ ...product, qty }));
    navigate("/shop/cart");
  };

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);
  const { data } = useGetAllProductsQuery({
    keyword,
  });

  const filterProductsByCollections = () => {
    return product?.productCollection
      ? data?.products?.filter(
          (productItems) =>
            productItems.productCollection === product.productCollection
        )
      : data?.products;
  };

  const otherProductsFromThisCollection = filterProductsByCollections();

  return (
    <div className="product-page-wrapper">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message type="error" message={error?.data?.message || error.error} />
      ) : (
        <div>
          {/* <div className="product-page-carousal"></div> */}
          <Row gutter={[32, 64]}>
            <Col span={14} className="product-col-wrapper1">
              <Row className="product-col-wrapper1-row1">
                <Col span={6}>
                  <div className="product-images">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={100}
                      height={100}
                      preview={product.countInStock !== 0}
                    />
                  </div>
                  <div className="product-images">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={100}
                      height={100}
                      preview={product.countInStock !== 0}
                    />
                  </div>
                  <div className="product-images">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={100}
                      height={100}
                      preview={product.countInStock !== 0}
                    />
                  </div>
                  <div className="product-images">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={100}
                      height={100}
                      preview={product.countInStock !== 0}
                    />
                  </div>
                </Col>
                <Col span={18} className="productScreen-imageWrapper">
                  <div className="image1">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={441}
                      height={464}
                      preview={product.countInStock !== 0}
                    />
                  </div>
                  <div className="image2">
                    {/* {product.countInStock === 0 && <Image src={soldOut} />} */}
                    {product.countInStock === 0 && "Sold Out"}
                  </div>
                </Col>
              </Row>
              {/* <Row>
                <div>
                  <Text>
                    {product.countInStock === 0 && <div><Image src={soldOut}></Image></div>}
                  </Text>
                </div>
              </Row> */}
              {/* <Row className="product-col-wrapper1-row2">
              <Col span={12} className="product-col-wrapper1-row2-col">
                <a href="#">View in Room</a>
              </Col>
              <Col span={12} className="product-col-wrapper1-row2-col">
                <a href="#">Share </a>
              </Col>
            </Row> */}
            </Col>
            <Col span={8}>
              <div className="product-col-wrapper2">
                <a href="/shop">Go Back</a>
                <div>
                  <div className="productScreen-productCollection">
                    <Title level={5}>{product.productCollection}</Title>
                  </div>

                  <div className="productScreen-productName">
                    <Title level={1}>{product.name}</Title>
                  </div>

                  <div className="product-price">
                    <Title level={3}>{`$ ${product.price}`}</Title>
                  </div>
                  <Title level={5}>{"Shipping calculated at checkout."}</Title>
                  <div className="productScreen-verticalSpacing"></div>
                  <div className="product-description">
                    <Text>{product.description}</Text>
                  </div>
                  <div className="productScreen-verticalSpacing"></div>
                  <div>
                    <Text>{product.aboutThisPiece}</Text>
                  </div>
                  <div className="productScreen-verticalSpacing"></div>
                  <div>
                    <Text>{product.instructions}</Text>
                  </div>
                  <div className="productScreen-verticalSpacing"></div>
                  <div>
                    <Text>{product.details}</Text>
                  </div>
                </div>
                <div className="productScreen-verticalSpacing"></div>
                <div>
                  <Text>
                    Carry our art as an inspiring reminder wherever you go 💛
                    Our phone cases offer strong protection for your phone in a
                    beautiful way. Made with high-quality materials and amazing
                    print quality, your phone will be protected and look good
                    for years to come. Our cases feature a durable, dual-layered
                    material for extra protection: an outer coat is made from
                    specialist impact-resistant plastic which is extremely
                    strong and lightweight, and a black flexible silicone inner
                    gives additional shock absorption.
                    <div className="productScreen-verticalSpacing"></div>
                    They are carefully constructed to precisely match the
                    dimensions of your device to ensure the best possible fit.
                    Choose from a variety of designs for most popular phone
                    models to find the perfect case for you. Details Dual-layer,
                    shatter-proof design Image wraps around the edges with a
                    matte finish Supports bluetooth charging MagSafe compatible
                    (magnetic ring not included) Shipped in secure, minimal
                    packaging to reduce waste Free Wallpaper Set ✨ Get a free
                    wallpaper set of your choice when you purchase this phone
                    case! Use code CASESET on the checkout page
                  </Text>
                </div>
                <div className="productScreen-verticalSpacing"></div>
                <div
                  className={
                    product.countInStock !== 0 && "productScreen-btnAddToCart"
                  }
                >
                  <Space direction="vertical">
                    <Space wrap>
                      <Button
                        size="large"
                        disabled={product.countInStock === 0}
                        onClick={(e) => addToCartHandler(e)}
                      >
                        {product.countInStock === 0
                          ? "Sold Out"
                          : "Add To Cart"}
                      </Button>
                    </Space>
                  </Space>
                </div>
              </div>
            </Col>
            <Col span={2}></Col>
          </Row>
          <Row gutter={[32, 16]}>
            <Col span={24} style={{marginTop:'40px'}}>
              <Title level={2}>You may also like</Title>
            </Col>
            {otherProductsFromThisCollection?.map(
              (product, index) =>
                index < 4 && (
                  <Col span={6} key={product?._id}>
                    <Product product={product} />
                  </Col>
                )
            )}
          </Row>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
