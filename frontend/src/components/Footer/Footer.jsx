import React from "react";
import { Col, Row, Button } from "antd";
import "./Footer.css";
import useWindowSize from "../../utils/useWindowSize";
import SocialMediaIcons from "./SocialMediaIcons";

// https://codepen.io/emmaadesile/full/gBEGYm

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isMobile } = useWindowSize();

  return (
    <div className="footer-bg">
      <div className="footer-wrapper">
        <Row className="footer-heading">
          <Col span={6}>Explore</Col>
          <Col span={6}>Shop</Col>
          <Col span={6}>Info</Col>
          {!isMobile && <Col span={6}>Connect</Col>}
        </Row>
        <Row gutter={[0, 16]} className="footer-links">
          {/* Level 1 Links */}
          <Col span={6}>
            <Button type="link" href="/">
              Home
            </Button>
          </Col>
          <Col span={6}>
            <Button type="link" href="/shop">
              Shop All
            </Button>
          </Col>
          <Col span={6}>
            <Button type="link" href="/about">
              About Us
            </Button>
          </Col>
          {!isMobile && (
            <Col span={6}>
              Email us anytime &nbsp;
              <Button type="link" href="mailto:hi [at] simmiagrawal.art.in">
                hi [at] simmiagrawal.art.in
              </Button>
            </Col>
          )}
          {/* Level 2 Links */}
          {!isMobile && (
            <>
              <Col span={6}>
                {/* <a href="/blog">View Gallery</a> will be added once blog is made*/}
              </Col>
              <Col span={6}></Col>
              <Col span={6}></Col>
              <Col span={6}>
                <Col span={24} className="footer-socialMedia">
                  <SocialMediaIcons />
                </Col>
              </Col>
            </>
          )}
        </Row>
        {isMobile && (
          <>
            <Row className="footer-heading">
              <Col span={24}>Connect</Col>
            </Row>
            <Row>
              <Col span={24}>
                Email us anytime &nbsp;
                <Button type="link" href="mailto:hi [at] simmiagrawal.art.in">
                  hi [at] simmiagrawal.art.in
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24} className="footer-socialMedia">
                <SocialMediaIcons />
              </Col>
            </Row>
          </>
        )}
        <Row className="footer-copyright">
          {/* <p>Copyright &copy; All rights reserved.</p> */}
          {/* <p>Copyright &copy;{currentYear} Simmi Agrawal</p> */}
          {/* <p>Copyright &copy;{currentYear} All rights reserved.</p> */}
          <p>
            Copyright &copy;{currentYear} XX - All rights reserved.
          </p>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
