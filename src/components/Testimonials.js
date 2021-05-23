import React from "react"
import { Container } from "react-bootstrap"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { data } from "../constants/TestimonailsConstant"

const Testimonials = () => {
  return (
    <Container className="my-5">
      <h1 className="my-3 text-center">Testimonials</h1>
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
            <div className="testimonial-slider myCarousel" key={item.id}>
              <p>{item.msg}</p>
              <h6 className="person-name">~ {item.person}</h6>
            </div>
          )
        })}
      </Carousel>
    </Container>
  )
}

export default Testimonials
