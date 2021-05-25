import React from "react"
import BackgroundImage from "../../components/BackgroundImage"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ServicesMain from "../../components/ServicesMain"

const services = () => {
  return (
    <Layout>
      <Seo Sitetitle="Services" />
      <BackgroundImage
        title="Services"
        description="Our services include 24X7 Teleradiology support,Telepathology support, locum support and emergency support."
      />
      <ServicesMain />
    </Layout>
  )
}

export default services
