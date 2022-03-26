import React, { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"
import ReCAPTCHA from "react-google-recaptcha"
import { navigate } from "gatsby"

const SecondOpinionForm = () => {
  const [setForm] = useState("")

  const [values, setValues] = useState({
    name: "",
    age: "",
    sex: "",
    history: "",
    reference: "",
    link: "",
    type: "",
  })

  const handleToken = token => {
    setForm(currentForm => {
      return { ...currentForm, token }
    })
  }

  const handleExpire = () => {
    setForm(currentForm => {
      return { ...currentForm, token: null }
    })
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleBrandSelection = async e => {
    setValues({ ...values, type: e.target.value })
  }

  const handleSecondOpinion = e => {
    e.preventDefault()
    if (typeof window !== "undefined") {
      localStorage.setItem("opinionData", JSON.stringify(values))
    }
    navigate("/payment-secondOpinion")
  }

  return (
    <Container>
      <Form onSubmit={handleSecondOpinion} className="my-form mb-5">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Age"
            required
            name="age"
            value={values.age}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Sex</Form.Label>
          <Form.Control
            type="text"
            placeholder="sex"
            required
            name="sex"
            value={values.sex}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>History</Form.Label>
          <Form.Control
            type="text"
            placeholder="History"
            required
            name="history"
            value={values.history}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Reference</Form.Label>
          <Form.Control
            type="text"
            placeholder="Reference"
            required
            name="reference"
            value={values.reference}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <select
            name="type"
            value={values.type}
            onChange={handleBrandSelection}
            required
            className="type"
          >
            <option value="" disabled>
              Select Type
            </option>
            <option value="500">Xray</option>
            <option value="2000">CT</option>
            <option value="5000">MRI</option>
          </select>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>
            Upload Image/folder (upload your google drive link)
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="link"
            required
            name="link"
            value={values.link}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div className="g-recaptcha my-3">
          <ReCAPTCHA
            sitekey="6LelwgsbAAAAABnPca5i0OkuvByGedUq4Tr1M9CF"
            onChange={handleToken}
            onExpired={handleExpire}
          />
        </div>
        <div className="d-grid gap-2">
          <Button className="hero-btn my-2" type="submit" aria-required>
            submit
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default SecondOpinionForm
