import React from "react"
import { Carousel } from "react-bootstrap"
import slider1 from "../assets/images/slider-1.webp"
import slider2 from "../assets/images/slider-2.webp"
import slider3 from "../assets/images/slider-3.webp"
import slider4 from "../assets/images/slider-4.webp"
import slider5 from "../assets/images/slider-5.webp"
import animation from "../assets/animation.mp4"

const Hero = () => {
  return (
    <section className="hero">
      <Carousel fade prevLabel="" nextLabel="">
        <Carousel.Item>
          <div className="hero-img-container">
            <img src={slider4} className="hero-img" alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-img-container">
            <img src={slider3} className="hero-img" alt="Second slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-img-container">
            <img src={slider2} className="hero-img" alt="Third slide" />
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

      {/* <section className="lottie-hero d-lg-none d-block">
        <video autoPlay loop muted playsInline>
          <source src={animation} type="video/mp4" />
        </video>
      </section> */}
    </section>
  )
}

export default Hero
