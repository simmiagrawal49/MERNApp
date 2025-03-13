import React from "react";
import { Col, Row, Image } from "antd";
import nature from "./Assets/nature4.avif";
import pattern2 from "./Assets/pattern2.jpg";
import abstract3 from "./Assets/abstract3.jpg";
import florals3 from "./Assets/florals3.avif";
import "./HomeScreen.css";

export default function BrowseCollectionsSection() {
  return (
    <div>
      <Row>
      <Col span={24} className="home-browse-collections">
            <h1>Browse Collections</h1>
          </Col>
          <Col span={12} className="home-collection-card">
            <a href="/shop/florals">
              <Image src={florals3} alt="florals" preview={false}/>
              <div className="home-label">Florals</div>
            </a>
          </Col>
          <Col span={12} className="home-collection-card">
            <a href="/shop/abstract">
              <Image src={abstract3} alt="abstract" preview={false} />
              <div className="home-label">Abstract</div>
            </a>
          </Col>

          <Col span={12} className="home-collection-card">
            <a href="/shop/pattern">
              <Image src={pattern2} alt="patterns" preview={false}/>
              <div className="home-label">Patterns</div>
            </a>
          </Col>
          <Col span={12} className="home-collection-card">
            <a href="/shop/nature">
              <Image src={nature} alt="nature" preview={false}/>
              <div className="home-label">Nature</div>
              {/* 736*908 */}
            </a>
          </Col>
      </Row>
    </div>
  );
}
