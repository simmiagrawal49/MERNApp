import { Card } from "antd";
import "./Product.css";
const { Meta } = Card;

const Product = ({ product }) => {
  return (
    <div className="product-wrapper">
      <a href={`/shop/product/${product._id}`}>
        <Card
          hoverable
          bordered={false}
          cover={<img alt="example" src={product.image} height={300} />}
          bodyStyle={{ padding: 0 }}
        >
          <Meta
            title={product.name}
            description={product.productCollection}
            style={{ height: 70, paddingLeft: "12px" }}
          />
          <div className="product-price">
            <Meta
              title={`$ ${product.price}`}
              style={{ height: 40, paddingLeft: "12px" }}
            />
          </div>
        </Card>
      </a>
    </div>
  );
};

export default Product;
