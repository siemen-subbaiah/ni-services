import React from "react"
import Layout from "../components/layout"
import ResearchForm from "../components/ResearchForm"
import Seo from "../components/seo"

const deepLearningForm = () => {
  return (
    <Layout>
      <Seo Sitetitle="Apply-Deep Learning" />
      <div className="deep-apply">
        <h1 className="mt-4 text-center">Entry Form - Deep Learning</h1>
        <div className="underline"></div>
        <ResearchForm />
      </div>
    </Layout>
  )
}

export default deepLearningForm
