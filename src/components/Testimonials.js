import React from "react"
import { Container } from "react-bootstrap"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { data } from "../constants/TestimonailsConstant"
import { AiFillStar } from "react-icons/ai"

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Container className="my-5">
        <h1 className="my-3 text-center info-one-heading h6 fw-bold">
          TESTIMONIALS
        </h1>
        <h2 className="my-3 text-center">
          What do people praise about our
          <span className="color"> services</span>
        </h2>
        <Carousel
          interval="3000"
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          // dynamicHeight
        >
          {data.map(item => {
            return (
              <div
                className="testimonial-slider myCarousel text-start text-lg-center"
                key={item.id}
              >
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <h1 className="person-name1 h6">
                  ~ {item.person} / <span className="loc">{item.location}</span>
                </h1>
                <p>{item.msg}</p>
              </div>
            )
          })}
        </Carousel>
      </Container>
    </div>
  )
}

export default Testimonials
