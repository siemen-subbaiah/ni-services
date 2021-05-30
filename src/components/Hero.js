import React from "react"
import { Carousel } from "react-bootstrap"
import { Link } from "gatsby"
import slider1 from "../assets/images/slider-1.webp"
import slider2 from "../assets/images/slider-2.webp"
import slider3 from "../assets/images/slider-3.webp"
import slider4 from "../assets/images/slider-4.webp"
import slider5 from "../assets/images/slider-5.webp"
// import mobileSlider1 from "../assets/images/mobile-slider.jpeg"
// import mobileSlider2 from "../assets/images/mobile-slider2.jpeg"
// import mobileSlider3 from "../assets/images/mobile-slider3.jpeg"
// import Lottie from "react-lottie-player"
// import lottieJson from "../assets/mylottie.json"
import animation from "../assets/animation.mp4"

const Hero = () => {
  return (
    <section className="hero">
      <Carousel fade prevLabel="" nextLabel="" className="d-lg-block d-none">
        <Carousel.Item>
          <div className="hero-img-container">
            <img
              src={slider4}
              className="hero-img d-lg-block d-none"
              alt="First slide"
            />
            {/* <img
              src={mobileSlider1}
              alt=""
              className="d-lg-none d-block small-img"
            /> */}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-img-container">
            <img
              src={slider3}
              className="hero-img d-lg-block d-none"
              alt="Second slide"
            />
            {/* <img
              src={mobileSlider3}
              alt=""
              className="d-lg-none d-block small-img"
            /> */}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-img-container">
            <img
              src={slider2}
              className="hero-img d-lg-block d-none"
              alt="Third slide"
            />
            {/* <img
              src={mobileSlider2}
              alt=""
              className="d-lg-none d-block small-img"
            /> */}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-img-container">
            <img src={slider1} className="hero-img" alt="Fourth slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-img-container">
            <img src={slider5} className="hero-img" alt="Fifth slide" />
          </div>
        </Carousel.Item>
      </Carousel>

      <section className="lottie-hero d-lg-none d-block">
        {/* <Lottie loop animationData={lottieJson} play /> */}
        <video autoPlay loop muted playsInline>
          <source src={animation} type="video/mp4" />
        </video>
        <div className="lottie-details text-center container my-5">
          <h1>Nischidha Imaging Services</h1>
          <Link to="/contact">
            <button className="btn hero-btn text-white">Contact Us</button>
          </Link>
        </div>
      </section>
    </section>
  )
}

export default Hero
