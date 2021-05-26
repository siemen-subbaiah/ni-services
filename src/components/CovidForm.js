import React, { useState } from "react"
import { Col, Container, Form, Row, Button } from "react-bootstrap"
import emailjs from "emailjs-com"
import { navigate } from "gatsby"

const CovidForm = () => {
  const [loading, setLoading] = useState(false)
  const handleEmail = e => {
    e.preventDefault()
    // setLoading(true)
    // emailjs
    //   .sendForm(
    //     "service_x5agap3",
    //     "template_8upsmbs",
    //     e.target,
    //     "user_2ycGHDtiEG2OA8KCMYXOt"
    //   )
    //   .then(
    //     result => {
    //       console.log(result.text)
    //       navigate("/thank-you3")
    //       setLoading(false)
    //     },
    //     error => {
    //       console.log(error.text)
    //     }
    //   )
    // e.target.reset()
  }
  return (
    <Form className="my-form" onSubmit={handleEmail}>
      <Row>
        <Col lg={6} md={12}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your age"
              required
              name="age"
            />

            <Form.Group as={Col}>
              <Form.Label as="legend" column sm={1}>
                Sex
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="male"
                  name="sex"
                  id="formHorizontalRadios1"
                  inline
                />
                <Form.Check
                  type="radio"
                  label="female"
                  name="sex"
                  id="formHorizontalRadios2"
                  inline
                />
              </Col>
            </Form.Group>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>SRF Id</Form.Label>
            <Form.Control type="number" required name="srfid" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>BU Number</Form.Label>
            <Form.Control type="number" required name="bunumber" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="number"
              required
              name="contactnumber"
              placeholder="enter your number"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your address"
              required
              name="address"
            />
          </Form.Group>
        </Col>
        <Col lg={6} md={12}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <h5 className="mt-2">Attenders details : </h5>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              name="attendersname"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Relationship with patient</Form.Label>
            <Form.Control type="text" required name="relationship" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="number"
              required
              name="attenderscontactnumber"
              placeholder="enter your number"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your address"
              required
              name="attenderaddress"
            />
          </Form.Group>
        </Col>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={7} required name="message" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button className="hero-btn my-2" type="submit">
            {loading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </Row>
    </Form>
  )
}

export default CovidForm
