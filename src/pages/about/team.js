import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import img from "../../assets/images/team.svg"
import HeroImg from "../../components/HeroImg"
import TeamComp from "../../components/TeamComp"
import { AiOutlineArrowUp } from "react-icons/ai"

const Team = () => {
  const [show, setShow] = useState(false)

  const backToTop = () => {
    if (window.pageYOffset > document.body.scrollHeight / 2.8) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", backToTop)
    return () => window.removeEventListener("scroll", backToTop)
  }, [])

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
        {show && (
          <a href="#" className="bt" aria-label="top">
            <AiOutlineArrowUp className="bt-i" />
          </a>
        )}
        <TeamComp />
      </Container>
    </Layout>
  )
}

export default Team
