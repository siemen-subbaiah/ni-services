import React from "react"
import Body from "../components/Body"
import ContactHome from "../components/ContactHome"
import Gmap from "../components/Gmap"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ServicesHome from "../components/ServicesHome"
import Testimonials from "../components/Testimonials"

const index = () => {
  return (
    <Layout>
      <Seo Sitetitle="Home" />
      <Hero />
      <Body />
      <ServicesHome />
      <Testimonials />
      <ContactHome />
      <Gmap />
    </Layout>
  )
}

export default index
