import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TeamComp from "../../components/TeamComp"

const Team = () => {
  return (
    <Layout>
      <Seo Sitetitle="Our Team" />
      <Container>
        <h1 className="text-center mt-5">Our Team</h1>
        <div className="underline"></div>
        <TeamComp />
      </Container>
    </Layout>
  )
}

export default Team
