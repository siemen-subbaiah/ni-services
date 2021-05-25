import React from "react"
import { Container } from "react-bootstrap"
import BackgroundImage from "../components/BackgroundImage"
import Layout from "../components/layout"
import Seo from "../components/seo"

const covid = () => {
  return (
    <Layout>
      <Seo Sitetitle="Covid" />
      <BackgroundImage
        title="Covid"
        description="Our company provides teleradiology services (i.e. CT, MRI, X-ray) to hospitals and diagnostic centres in remote parts of India and other parts of world"
      />
      <div className="main-info">
        <Container>
          <p className="my-4">
            Dedicated healthcare facility by providing Intensive Care Unit (ICU)
            in treatment and management of moderate to severe COVID pneumonia in
            Bengaluru (Rural & Urban). Shall provide 24x7 supervised ICU care in
            collaboration with multiple small hospitals.
          </p>
          <p>
            COVID-19 is a major threat to public health. COVID-19 pandemic has
            spread to almost every country on earth taking lives, shutting down
            economies, and creating worldwide havoc and panic. Some coronavirus
            positive cases may be pre-symptomatic while a few may experience
            mild to moderate, or even severe symptoms. Depending on the severity
            of the symptoms, few may require hospitalization or even critical
            care.
          </p>
          <p>
            To address the need for treating severe illness our Group has come
            out with an innovative COVID-19 ICU care service.
          </p>
          <p>
            An intensive care unit (ICU), is a special department of a hospital
            or health care facility that provides intensive care medicine. COVID
            Intensive care units cater to patients with severe or
            life-threatening illnesses, which require constant care, close
            supervision from life support equipment and medication in order to
            ensure normal bodily functions.
          </p>
          <p>
            They are staffed by highly trained physicians, intensivists,
            nurses and respiratory therapists who specialize in caring for
            critically ill patients. ICUs are also distinguished from general
            hospital wards by a higher staff-to-patient ratio and access to
            advanced medical resources and equipment that is not routinely
            available elsewhere.
          </p>
          <p>
            Patients may be referred directly from an emergency department of
            hospital or from a clinic if they rapidly deteriorate and the
            patient is at high risk of complications.
          </p>
        </Container>
      </div>
    </Layout>
  )
}

export default covid
