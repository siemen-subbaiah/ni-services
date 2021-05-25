import React from "react"
import BackgroundImage from "../../components/BackgroundImage"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ResearchMain from "../../components/ResearchMain"

const index = () => {
  return (
    <Layout>
      <Seo Sitetitle="Research" />
      <BackgroundImage
        title="Research"
        description="Our company provides teleradiology services (i.e. CT, MRI, X-ray) to hospitals and diagnostic centres in remote parts of India and other parts of world"
      />
      <ResearchMain />
    </Layout>
  )
}

export default index
