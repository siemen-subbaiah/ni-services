import React, { useState } from "react"
import { Button, Container, Form, Spinner } from "react-bootstrap"
import emailjs from "emailjs-com"
import { navigate } from "gatsby-link"
import Layout from "../components/layout"
import Seo from "../components/seo"

const EventDetails = () => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [designation, setDesignation] = useState("")
  const [profession, setProfession] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")

  const rand = Math.floor(Math.random() * (999 - 100 + 1) + 100)

  const handleEmail = e => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .sendForm(
        "service_pjnb6jh",
        "template_eqgjkus",
        e.target,
        "user_4R2FqenjHSloK3tZPzmV4"
      )
      .then(
        result => {
          console.log(result.text)
          navigate("/payment-event")
          setLoading(false)
        },
        error => {
          console.log(error.text)
        }
      )

    typeof window !== "undefined"
      ? localStorage.setItem(
          "data",
          JSON.stringify({
            name,
            designation,
            profession,
            email,
            number,
            ref: `TD9${rand}`,
          })
        )
      : null
    e.target.reset()
  }

  return (
    <Layout>
      <Seo Sitetitle="Event details" />
      <Container>
        <h1 className="text-center my-5">Register for the event</h1>
        <Form className="my-form my-5" onSubmit={handleEmail}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <input type="hidden" name="reference_id" value={`TD9${rand}`} />
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your designation"
              required
              name="designation"
              value={designation}
              onChange={e => setDesignation(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Profession/Branch</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Profession/Branch"
              required
              name="profession"
              value={profession}
              onChange={e => setProfession(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your number"
              required
              name="number"
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              required
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          {loading ? (
            <div className="d-grid gap-2">
              <Button className="hero-btn my-2" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                loading
                <span className="visually-hidden">Loading...</span>
              </Button>
            </div>
          ) : (
            <div className="d-grid gap-2">
              <Button className="hero-btn my-2" type="submit" aria-required>
                Register
              </Button>
            </div>
          )}
        </Form>
      </Container>
    </Layout>
  )
}

export default EventDetails
