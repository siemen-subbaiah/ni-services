import React from "react"
import { Container } from "react-bootstrap"
import CovidForm from "../components/CovidForm"
import Layout from "../components/layout"
import Seo from "../components/seo"

const covidRequest = () => {
  return (
    <Layout>
      <Seo Sitetitle="Covid form" />
      <Container className="covid-form">
        <h1 className="mt-3 text-center">Online request form</h1>
        <div className="underline"></div>
        <CovidForm />
      </Container>
    </Layout>
  )
}

export default covidRequest
