import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from './assets/background1.jpg';
import Slide2 from './assets/background2.jpg';
import Slide3 from './assets/background3.jpg';

class ThemeCarousel extends React.Component {
  render() {
    return (
        <div id="home">
        <Carousel controls={false} indicators interval={2000} pauseOnHover={false}>
            <Carousel.Item>
                <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 custom-img" src={Slide3} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
            </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default ThemeCarousel;