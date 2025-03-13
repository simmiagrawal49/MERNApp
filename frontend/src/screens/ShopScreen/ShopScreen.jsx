import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../slices/productsApiSlice";
import Product from "../../components/Product/Product";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Meta from "../../components/Meta";
import { Col, Row, Pagination, Image } from "antd";
import imagePanel from "./Assets/flamingo.jpg";
import "./ShopScreen.css";
import DropDownCollections from "./DropDownCollections";
import DropDownSort from "./DropDownSort";

const ShopScreen = () => {
  const { keyword } = useParams();
  const { data, isLoading, error } = useGetAllProductsQuery({
    keyword,
  });

  const [filterByCollection, setFilterByCollection] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [pageNo, setPageNo] = useState(1);
  let noOfPages;
  const productCollectionsInStore = data?.products?.map(
    (products) => products?.productCollection
  );
  const uniqueProductCollections = [...new Set(productCollectionsInStore)];

  const handleFilterByCollectionState = (collectionName) => {
    setFilterByCollection(collectionName);
  };

  const handleSortByState = (sortByValue) => {
    setSortBy(sortByValue);
  };

  const onChangeHandler = (page) => {
    setPageNo(page);
  };

  const filterProductsByCollections = () => {
    return filterByCollection
      ? data?.products?.filter(
          (product) => product.productCollection === filterByCollection
        )
      : data.products;
  };
  const sortProducts = (productsToSort) => {
    if (sortBy === "priceLowToHigh") {
      return productsToSort?.slice().sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHighToLow") {
      return productsToSort?.slice().sort((a, b) => b.price - a.price);
    } else {
      return productsToSort;
    }
  };

  const renderProducts = () => {
    return data.products?.map((product) => (
      <Col span={6} key={product._id}>
        <Product product={product} />
      </Col>
    ));
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message type="error" message={error?.data?.message || error.error} />
      ) : (
          <div className="shop-product-layout">
            <div className="shop-design-wrapper">
              <div className="shop-products-wrapper">
                <Row gutter={[32, 48]}>{renderProducts()}</Row>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default ShopScreen;
