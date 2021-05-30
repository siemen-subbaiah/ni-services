import React from "react"
import { Container } from "react-bootstrap"
import HeroImg from "../../components/HeroImg"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import img from "../../assets/images/mission.svg"

const mission = () => {
  return (
    <Layout>
      <Seo Sitetitle="Mission" />
      <Container>
        <h1 className="mt-5 text-center">WHO WE ARE</h1>
        <div className="underline"></div>
        <p className="my-5">
          Our company provides teleradiology services (i.e. CT, MRI, X-ray) to
          hospitals and diagnostic centres in remote parts of India and other
          parts of world. It is a health care company that uses technology for
          providing teleradiology services to consultants and patients. The
          reports generated are of international standard by qualified (as per
          MCI guidelines), skilled, devoted and hard working consultants in
          Radiodiagnosis. Second opinion can be obtained and also offering the
          weekends support, flexible scheduling and excellent reporting quality.
        </p>
        <h1 className="mt-5 text-center" id="mission">
          OUR MISSION
        </h1>
        <div className="underline"></div>
        <p className="my-5">
          Our vision is to provide best quality telemedicine services including
          teleradiology and telepathology. To provide high quality healthcare at
          an affordable cost. Using the latest imaging technologies to provide
          diagnostic services for all our clients in the healthcare and their
          patients. We intend to support the referring physician with our
          knowledge and expertise in our field. We believe in working as a team
          and strive to maintain patient-specific imaging and
          physician-responsive clinical services with accuracy, efficiency,
          compassion and professional integrity. By working as a team, we will
          streamline the operational aspects of our division making us more
          efficient and cost-effective. We will explore the forefronts of our
          specialty by the ethical practice of both basic and clinical
          investigations. Quality of the reports generated are of international
          standard and second opinion can be obtained.
        </p>
        <p>
          Our company provides teleradiology services (i.e. CT, MRI, X-ray) to
          hospitals and diagnostic centres in remote parts of India and other
          parts of world. It is a health care company that uses technology for
          providing teleradiology services to consultants and patients. The
          reports generated are of international standard by qualified (as per
          MCI guidelines), skilled, devoted and hard working consultants in
          Radiodiagnosis. Second opinion can be obtained and also offering the
          weekends support, flexible scheduling and excellent reporting quality.
          We aim to increase the productivity and progress of our customers by
          our professionalism and quality reports in a given timeframe, adhering
          to the values of integrity and confidentiality.
        </p>
      </Container>
    </Layout>
  )
}

export default mission
