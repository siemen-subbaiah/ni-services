import { Link } from "gatsby"
import * as React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo Sitetitle="404: Not found" />
    <Container className="text-center my-6">
      <h1 className="mt-5">404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">
        <button className="btn hero-btn text-white mb-3">Home</button>
      </Link>
    </Container>
  </Layout>
)

export default NotFoundPage
