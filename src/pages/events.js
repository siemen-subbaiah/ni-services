import React from "react"
import { Container } from "react-bootstrap"
import BackgroundImage from "../components/BackgroundImage"
import Layout from "../components/layout"
import Seo from "../components/seo"

const events = () => {
  return (
    <Layout>
      <Seo Sitetitle="Events" />
      <BackgroundImage title="Events" description="" />
      <Container>
        <h1 className="my-5 text-center">COMING SOON</h1>
      </Container>
    </Layout>
  )
}

export default events
