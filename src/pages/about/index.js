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
      <BackgroundImage
        title="About us"
        description="Our company provides teleradiology services (i.e. CT, MRI, X-ray) to hospitals and diagnostic centres in remote parts of India and other parts of world"
      />
      <AboutMain />
      <Testimonials />
    </Layout>
  )
}

export default about
