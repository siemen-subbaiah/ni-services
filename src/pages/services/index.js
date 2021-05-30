import React from "react"
import BackgroundImage from "../../components/BackgroundImage"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ServicesMain from "../../components/ServicesMain"

const services = () => {
  return (
    <Layout>
      <Seo Sitetitle="Services" />
      <BackgroundImage title="Services" description="" />
      <ServicesMain />
    </Layout>
  )
}

export default services
