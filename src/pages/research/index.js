import React from "react"
import BackgroundImage from "../../components/BackgroundImage"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ResearchMain from "../../components/ResearchMain"

const index = () => {
  return (
    <Layout>
      <Seo Sitetitle="Research" />
      <BackgroundImage title="Research" description="" />
      <ResearchMain />
    </Layout>
  )
}

export default index
