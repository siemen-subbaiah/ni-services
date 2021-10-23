import React, { useEffect, useState } from "react"
import { Button, Container, Form, Spinner, Row, Col } from "react-bootstrap"
import emailjs from "emailjs-com"
import { navigate } from "gatsby-link"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { db } from "../constants/firebase"
import gpay from "../assets/images/g-pay.png"
import paytm from "../assets/images/paytmupi.png"
import phonepay from "../assets/images/phonepay.png"
import qrCode from "../assets/images/qr-code2.jpg"
import ReCAPTCHA from "react-google-recaptcha"

import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore"

const FORMSPARK_ACTION_URL = "https://submit-form.com/rUSK5Dl0"

const EventDetails = () => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [designation, setDesignation] = useState("")
  const [profession, setProfession] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [users, setUsers] = useState([])

  // const rand = Math.floor(Math.random() * (999 - 100 + 1) + 100)

  const [setForm] = useState("")

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

  useEffect(() => {
    const getUsers = async () => {
      const allUsers = query(
        collection(db, "users"),
        orderBy("timeStamp", "desc")
      )
      const userSnapShot = await getDocs(allUsers)
      setUsers(userSnapShot.docs.map(doc => doc.data()))
    }
    getUsers()
  }, [])

  console.log(users[0]?.ref)

  const handleEmail = async e => {
    e.preventDefault()

    try {
      setLoading(true)
      await addDoc(collection(db, "users"), {
        branch: profession,
        designation,
        email,
        name,
        number,
        ref: users[0]?.ref === undefined ? 1 : users[0]?.ref + 1,
        timeStamp: serverTimestamp(),
      })
      const data = await emailjs.sendForm(
        "service_pjnb6jh",
        "template_eqgjkus",
        e.target,
        "user_4R2FqenjHSloK3tZPzmV4"
      )
      const res = await data.text
      setLoading(false)
      console.log(res)
    } catch (error) {
      alert(error)
    }

    typeof window !== "undefined"
      ? localStorage.setItem(
          "data",
          JSON.stringify({
            name,
            designation,
            profession,
            email,
            number,
            ref:
              users[0]?.ref === undefined ? `TD91` : `TD9${users[0]?.ref + 1}`,
          })
        )
      : null
    e.target.reset()
  }

  return (
    <Layout>
      <Seo Sitetitle="Event details" />
      <h1 className="text-center my-5">Register for the event</h1>
      <Container>
        <Row className="justify-content-center align-items-center my-5">
          <Col lg={6} md={12}>
            <p className="my-3">
              Registration Fees : 1180Rs (1000RS + GST 18%)
            </p>
            <div className="sup-apps d-flex justify-content-start align-items-center">
              <a
                href="upi://pay?pa=dhananjayakvn@okhdfcbank&pn=Dhananjaya K V N&tn=Payment for TranquilDoc-9
 Event&cu=INR"
              >
                <img src={gpay} alt="gpay-logo" />
              </a>
              <a
                href="upi://pay?pa=dhananjayakvn@okhdfcbank&pn=Dhananjaya K V N&tn=Payment for TranquilDoc-9
 Event&cu=INR"
              >
                <img src={phonepay} alt="phonepay-logo" />
              </a>
              <a
                href="upi://pay?pa=dhananjayakvn@okhdfcbank&pn=Dhananjaya K V N&tn=Payment for TranquilDoc-9
 Event&cu=INR"
              >
                <img src={paytm} alt="paytm-logo" />
              </a>
            </div>
            <p>
              <strong>Mobile Number : </strong>
              9844546546
            </p>
            <p className="mb-4">
              The QR Code can be scanned using any UPI supported apps or click
              on the preferred apps above to donate.
            </p>
            <img src={qrCode} alt="qr-code" className="img-fluid qr-img2" />
          </Col>
          <Col>
            <Form
              className="my-form my-5"
              method="POST"
              action={FORMSPARK_ACTION_URL}
              onSubmit={handleEmail}
            >
              <input
                type="hidden"
                name="_redirect"
                value="https://nischidhaimagingservices.com/events/TranquilDoc-9"
              />
              <input
                type="hidden"
                name="_email.template.title"
                value="Event Details"
              />
              <input
                type="hidden"
                name="_email.template.footer"
                value="false"
              />
              <Form.Group controlId="exampleForm.ControlInput1">
                <input
                  type="hidden"
                  name="reference_id"
                  value={
                    users[0]?.ref === undefined
                      ? `TD91`
                      : `TD9${users[0]?.ref + 1}`
                  }
                />
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
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  name="number"
                  value={number}
                  pattern="[1-9]{1}[0-9]{9}"
                  maxLength="10"
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
            <Form
              className="my-form my-3 my-lg-0"
              method="POST"
              action={FORMSPARK_ACTION_URL}
            >
              <input
                type="hidden"
                name="_redirect"
                value="https://nischidhaimagingservices.com/events/TranquilDoc-9"
              />
              <input
                type="hidden"
                name="_email.template.title"
                value="Event Details"
              />
              <input
                type="hidden"
                name="_email.template.footer"
                value="false"
              />

              <input
                type="hidden"
                name="Name"
                value={
                  typeof window !== "undefined"
                    ? JSON.parse(localStorage.getItem("data"))?.name
                    : null
                }
              />
              <input
                type="hidden"
                name="Designation"
                value={
                  typeof window !== "undefined"
                    ? JSON.parse(localStorage.getItem("data"))?.designation
                    : null
                }
              />
              <input
                type="hidden"
                name="Profession"
                value={
                  typeof window !== "undefined"
                    ? JSON.parse(localStorage.getItem("data"))?.profession
                    : null
                }
              />
              <input
                type="hidden"
                name="Email"
                value={
                  typeof window !== "undefined"
                    ? JSON.parse(localStorage.getItem("data"))?.email
                    : null
                }
              />
              <input
                type="hidden"
                name="Number"
                value={
                  typeof window !== "undefined"
                    ? JSON.parse(localStorage.getItem("data"))?.number
                    : null
                }
              />
              <input
                type="hidden"
                name="reference_id"
                value={
                  typeof window !== "undefined"
                    ? JSON.parse(localStorage.getItem("data"))?.ref
                    : null
                }
              />
              <Form.Group controlId="exampleForm.ControlInput1">
                <p>
                  After successful payment, please enter the transaction number:
                </p>
                <Form.Label>Transaction Number</Form.Label>
                <Form.Control type="number" required name="transaction-id" />
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
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default EventDetails
