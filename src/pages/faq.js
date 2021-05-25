import React from "react"
import BackgroundImage from "../components/BackgroundImage"
import ContactHome from "../components/ContactHome"
import FaqMainComp from "../components/FaqMainComp"
import Layout from "../components/layout"
import Seo from "../components/seo"

const faq = () => {
  return (
    <Layout>
      <Seo Sitetitle="FAQ" />
      <BackgroundImage title="FAQs" description="" />
      <FaqMainComp />
      <ContactHome />
    </Layout>
  )
}

export default faq
