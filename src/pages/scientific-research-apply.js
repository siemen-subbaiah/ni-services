import React from "react"
import Layout from "../components/layout"
import ResearchForm from "../components/ResearchForm"
import Seo from "../components/seo"

const scientificResearchForm = () => {
  return (
    <Layout>
      <Seo Sitetitle="Apply-Scientific Research" />
      <div className="scientific-apply">
        <h1 className="mt-4 text-center">Entry Form - Scientific Research</h1>
        <div className="underline"></div>
        <ResearchForm />
      </div>
    </Layout>
  )
}

export default scientificResearchForm
