import React from "react"
import FormContact from "../components/FormContact"
import Gmap from "../components/Gmap"
import Layout from "../components/layout"
import Seo from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <Seo Sitetitle="Contact" />
      <FormContact
        heading="Please get in touch"
        para="Interested in our services? Get in touch with us via the form below and we'll get back to you as soon as possible!"
      />
      <Gmap />
    </Layout>
  )
}

export default contact
