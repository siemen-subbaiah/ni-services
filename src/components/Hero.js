import React from "react"
import { Carousel } from "react-bootstrap"
import { Link } from "gatsby"
import slider1 from "../assets/images/slider-1.jpg"
import slider2 from "../assets/images/slider-2.jpg"
import slider3 from "../assets/images/slider-3.jpg"
import slider4 from "../assets/images/slider-4.jpg"
import slider5 from "../assets/images/slider-5.jpg"
import mobileSlider1 from "../assets/images/mobile-slider.jpeg"
import mobileSlider2 from "../assets/images/mobile-slider2.jpeg"
import mobileSlider3 from "../assets/images/mobile-slider3.jpeg"
import Lottie from "react-lottie-player"
import lottieJson from "../assets/mylottie.json"
import lottieFile from "../assets/animation.gif"

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
            <img
              src={mobileSlider1}
              alt=""
              className="d-lg-none d-block small-img"
            />
          </div>
          <Carousel.Caption className="text-start">
            <h1 className="fw-bold">Nischidha Imaging Services</h1>
            <Link to="/contact">
              <button className="btn hero-btn btn-lg text-white my-2">
                Contact Us
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-img-container">
            <img
              src={slider3}
              className="hero-img d-lg-block d-none"
              alt="First slide"
            />
            <img
              src={mobileSlider3}
              alt=""
              className="d-lg-none d-block small-img"
            />
          </div>
          <Carousel.Caption className="text-lg-start">
            <h1 className="fw-bold">Nischidha Imaging Services</h1>
            <Link to="/contact">
              <button className="btn hero-btn btn-lg text-white my-2">
                Contact Us
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-img-container">
            <img
              src={slider2}
              className="hero-img d-lg-block d-none"
              alt="Third slide"
            />
            <img
              src={mobileSlider2}
              alt=""
              className="d-lg-none d-block small-img"
            />
          </div>
          <Carousel.Caption className="text-lg-start">
            <h1 className="fw-bold">Nischidha Imaging Services</h1>
            <Link to="/contact">
              <button className="btn hero-btn btn-lg text-white my-2">
                Contact Us
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-img-container">
            <img src={slider1} className="hero-img" alt="Third slide" />
          </div>
          <Carousel.Caption className="text-lg-start">
            <h1 className="fw-bold">Nischidha Imaging Services</h1>
            <Link to="/contact">
              <button className="btn hero-btn btn-lg text-white my-2">
                Contact Us
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-img-container">
            <img src={slider5} className="hero-img" alt="Third slide" />
          </div>
          <Carousel.Caption className="text-lg-start">
            <h1 className="fw-bold">Nischidha Imaging Services</h1>
            <Link to="/contact">
              <button className="btn hero-btn btn-lg text-white my-2">
                Contact Us
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="lottie-hero d-lg-none d-block">
        {/* <Lottie loop animationData={lottieJson} play /> */}
        <img src={lottieFile} alt="" className="img-fluid" />
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
