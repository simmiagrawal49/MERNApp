import { Carousel, Image } from "antd";
import "./CarouselBanner.css";

const CarouselBanner = () => (
  <Carousel autoplay>
    <div className="carousel-bg-first">
      {/* <Image src={imageFirst} alt="image" height={420}/> */}
    </div>
    <div className="carousel-bg-second">
      {/* <Image src={imageFirst} alt="image" height={420}/> */}
    </div>
    <div className="carousel-bg-third">
      {/* <Image src={imageFirst} alt="image" height={420}/> */}
    </div>
    <div className="carousel-bg-fourth">
      {/* <Image src={imageFirst} alt="image" height={420}/> */}
    </div>
  </Carousel>
);
export default CarouselBanner;
