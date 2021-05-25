import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import img from "../../assets/images/team.svg"
import HeroImg from "../../components/HeroImg"
import TeamComp from "../../components/TeamComp"

const team = () => {
  return (
    <Layout>
      <Seo Sitetitle="Our Team" />
      <Container>
        <HeroImg
          title="Our Team"
          description="Take a look at our team members who are the heart and soul of our company."
          path={img}
          id="#team"
        />
        <TeamComp />
      </Container>
    </Layout>
  )
}

export default team
