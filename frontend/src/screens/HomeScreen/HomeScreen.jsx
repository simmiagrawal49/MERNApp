import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { Col, Row, Image } from "antd";
import Product from "../../components/Product/Product";
// import CarouselBanner from "../../components/CarouselBanner/CarouselBanner";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import studio from "./Assets/studio.jpg";
import "./HomeScreen.css";
import BrowseCollectionsSection from "./BrowseCollectionsSection";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <div>
      <div className="home-wrapper">
        <Row gutter={[32, 64]}>
          {/* <Col span={12} className="home-images">
            <Image src={studio} alt="Studio" />
          </Col> */}
          {/* <Col span={12} className="home-content">
            {/* <div className="home-about-title"> about the studio</div>
            <div className="home-about-description">
              This is the independent studio based in pune where our captivating
              mixed media paintings and art prints are brought to life. Our
              artworks and prints are available for purchase in our studio shop.
            </div> 
          </Col> */}
          {/* <BrowseCollectionsSection /> */}
          <Col span={24} className="home-shop-products">
            <h1>Shop Products</h1>
          </Col>
          {data?.products?.map(
            (product, index) =>
              index < 8 && (
                <Col span={6} key={product?._id}>
                  <Product product={product} />
                </Col>
              )
          )}
        </Row>
        <Row>
          <Col span={24} className="home-productViewMore">
            <a href="/shop">
              <h3>View All</h3>
            </a>
          </Col>
        </Row>
      </div>
      <NewsLetter />
    </div>
  );
};

export default HomeScreen;
