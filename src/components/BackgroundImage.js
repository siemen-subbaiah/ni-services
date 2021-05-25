import React from "react"
import { Container } from "react-bootstrap"

const BackgroundImage = ({ title, description }) => {
  return (
    <div className="background-area">
      <Container>
        <h1>{title}</h1>
        <p className="w-50 mx-auto">{description}</p>
      </Container>
    </div>
  )
}

export default BackgroundImage
