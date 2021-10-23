import React, { useEffect, useState } from "react"
import { Button, Container, Form, Spinner } from "react-bootstrap"
import emailjs from "emailjs-com"
import { navigate } from "gatsby-link"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { db } from "../constants/firebase"
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore"

const EventDetails = () => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [designation, setDesignation] = useState("")
  const [profession, setProfession] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [users, setUsers] = useState([])

  // const rand = Math.floor(Math.random() * (999 - 100 + 1) + 100)

  useEffect(() => {
    const getUsers = async () => {
      const allUsers = query(
        collection(db, "users"),
        orderBy("timeStamp", "desc")
      )
      const userSnapShot = await getDocs(allUsers)
      const userList = setUsers(userSnapShot.docs.map(doc => doc.data()))
      console.log(userList)
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
      navigate("/payment-event")
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
      <Container>
        <h1 className="text-center my-5">Register for the event</h1>
        <Form className="my-form my-5" onSubmit={handleEmail}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <input
              type="hidden"
              name="reference_id"
              value={
                users[0]?.ref === undefined ? `TD91` : `TD9${users[0]?.ref + 1}`
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
      </Container>
    </Layout>
  )
}

export default EventDetails
