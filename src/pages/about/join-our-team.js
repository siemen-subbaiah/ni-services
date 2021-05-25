import React from "react"
import HeroImg from "../../components/HeroImg"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import img from "../../assets/images/join.svg"
import { Container, Form, Button } from "react-bootstrap"

const join_our_team = () => {
  return (
    <Layout>
      <Seo Sitetitle="Join our team" />
      <Container className="join-team">
        <HeroImg
          title="Join Our Team"
          description="We’re always on the lookout for awesome people to join us in help building a better future."
          path={img}
          id="#form-fill"
        />
        <h1 className="j1 text-center">Fill in the form</h1>
        <p className="h5 text-center">We will get back to you very soon</p>
        <Form className="my-form my-3" id="form-fill">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Qualification</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Qualification"
              required
              name="qualification"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Speciality</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Speciality"
              required
              name="speciality"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your Contact number"
              required
              name="contact"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              required
              name="email"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Biography</Form.Label>
            <Form.Control as="textarea" rows={7} required name="biography" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button className="hero-btn my-2" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </Layout>
  )
}

export default join_our_team
