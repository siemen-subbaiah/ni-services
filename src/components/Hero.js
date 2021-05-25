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

const Hero = () => {
  return (
    <section className="hero">
      <Carousel fade prevLabel="" nextLabel="">
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
          <Carousel.Caption className="text-lg-start">
            <h1>Nischidha Imaging Services</h1>
            <h5 className="my-3 w-50 hero-sub">
              We provide Teleradiology services (i.e. CT, MRI, X-ray) to
              hospitals and diagnostic centres.
            </h5>
            <Link to="/contact">
              <button className="btn btn-lg hero-btn text-white">
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
            <h1>Nischidha Imaging Services</h1>
            <h5 className="my-3 w-50 hero-sub">
              We provide Teleradiology services (i.e. CT, MRI, X-ray) to
              hospitals and diagnostic centres.
            </h5>
            <Link to="/contact">
              <button className="btn btn-lg hero-btn text-white">
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
            <h1>Nischidha Imaging Services</h1>
            <h5 className="my-3 w-50 hero-sub">
              We provide Teleradiology services (i.e. CT, MRI, X-ray) to
              hospitals and diagnostic centres.
            </h5>
            <Link to="/contact">
              <button className="btn btn-lg hero-btn text-white">
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
            <h1>Nischidha Imaging Services</h1>
            <h5 className="my-3 w-50 hero-sub">
              We provide Teleradiology services (i.e. CT, MRI, X-ray) to
              hospitals and diagnostic centres.
            </h5>
            <Link to="/contact">
              <button className="btn btn-lg hero-btn text-white">
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
            <h1>Nischidha Imaging Services</h1>
            <h5 className="my-3 w-50 hero-sub">
              We provide Teleradiology services (i.e. CT, MRI, X-ray) to
              hospitals and diagnostic centres.
            </h5>
            <Link to="/contact">
              <button className="btn btn-lg hero-btn text-white">
                Contact Us
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default Hero
