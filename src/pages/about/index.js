import React from "react"
import BackgroundImage from "../../components/BackgroundImage"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import AboutMain from "../../components/AboutMain"
import Testimonials from "../../components/Testimonials"

const about = () => {
  return (
    <Layout>
      <Seo Sitetitle="About" />
      <BackgroundImage title="About us" description="" />
      <AboutMain />
      <Testimonials />
    </Layout>
  )
}

export default about
