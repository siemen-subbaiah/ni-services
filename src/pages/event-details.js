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
import qrCode2 from "../assets/images/payme.jpeg"
import ReCAPTCHA from "react-google-recaptcha"

import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore"

// const FORMSPARK_ACTION_URL = "https://submit-form.com/rUSK5Dl0"

const EventDetails = () => {
  const [loading, setLoading] = useState(false)
  const [code, setCode] = useState("")
  const [name, setName] = useState("")
  const [designation, setDesignation] = useState("")
  const [profession, setProfession] = useState("")
  const [number, setNumber] = useState("")
  const [transID, setTransID] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
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
        collection(db, "users2"),
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

    if (code === "TD10R") {
      try {
        setLoading(true)
        await addDoc(collection(db, "users2"), {
          branch: profession,
          designation,
          email,
          name,
          number,
          city,
          ref: users[0]?.ref === undefined ? 1 : users[0]?.ref + 1,
          timeStamp: serverTimestamp(),
        })
        const data = await emailjs.sendForm(
          "service_pjnb6jh",
          "template_gqva02p",
          e.target,
          "user_4R2FqenjHSloK3tZPzmV4"
        )
        const res = await data.text
        setLoading(false)
        navigate("/events/TranquilDoc-10")
        console.log(res)
      } catch (error) {
        alert(error)
      }
      e.target.reset()
    } else {
      alert("Invalid code")
    }
  }

  return (
    <Layout>
      <Seo Sitetitle="Event details" />
      <h1 className="text-center my-5">Register for the event</h1>
      <Container>
        <Row className="justify-content-center align-items-center my-5">
          <Col lg={6} md={12}>
            <p>Registration fees: 2000rs</p>
            <div className="sup-apps d-flex justify-content-start align-items-center">
              <a
                href="upi://pay?pa=dhananjayakvn@okhdfcbank&pn=Dhananjaya K V N&tn=Payment for Tranquildoc-10: Reigning
 Event&cu=INR&am=2000"
              >
                <img src={gpay} alt="gpay-logo" />
              </a>
              <a
                href="upi://pay?pa=dhananjayakvn@okhdfcbank&pn=Dhananjaya K V N&tn=Payment for Tranquildoc-10: Reigning
 Event&cu=INR&am=2000"
              >
                <img src={phonepay} alt="phonepay-logo" />
              </a>
              <a
                href="upi://pay?pa=dhananjayakvn@okhdfcbank&pn=Dhananjaya K V N&tn=Payment for Tranquildoc-10: Reigning
 Event&cu=INR&am=2000"
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
            <img src={qrCode2} alt="qr-code" className="img-fluid qr-img2" />
          </Col>
          <Col>
            <Form className="my-form my-5" method="POST" onSubmit={handleEmail}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter code"
                  required
                  name="code"
                  value={code}
                  onChange={e => setCode(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <input
                  type="hidden"
                  name="reference_id"
                  value={
                    users[0]?.ref === undefined
                      ? `TD101`
                      : `TD10${users[0]?.ref + 1}`
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
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>City/Town</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter your city/town"
                  required
                  name="city"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <p>
                  After successful payment, please enter the transaction number:
                </p>
                <Form.Label>Transaction Number</Form.Label>
                <Form.Control
                  type="tel"
                  required
                  name="transID"
                  value={transID}
                  pattern="[1-9]{1}[0-9]{9}"
                  maxLength="10"
                  onChange={e => setTransID(e.target.value)}
                />
              </Form.Group>
              <div className="g-recaptcha my-3">
                <ReCAPTCHA
                  sitekey="6LelwgsbAAAAABnPca5i0OkuvByGedUq4Tr1M9CF"
                  onChange={handleToken}
                  onExpired={handleExpire}
                />
              </div>
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
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default EventDetails
