import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import img from "../../assets/images/scientific.svg"
import HeroImg from "../../components/HeroImg"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

const scientificResearch = () => {
  return (
    <Layout>
      <Seo Sitetitle="Scientific Medical Research" />
      <Container>
        <h1 className="text-center mt-5">Scientific Medical Research</h1>
        <div className="underline"></div>
        <div className="more-info my-5" id="scientific_research">
          <div className="requirement">
            <h4>Research Assistant : </h4>
            <ul>
              <li>Duration – 3 to 6 months</li>
              <li>Important field of focus and ongoing projects :</li>
              <ul>
                <li>
                  Scientific research focused on pediatric radiology
                  (Retrospective and prospective studies)
                </li>
                <li>Application of deep learning in aided diagnosis.</li>
                <li>Artificial intelligence in radiology.</li>
                <li>3D printing in medical imaging.</li>
              </ul>
            </ul>
          </div>
          <div className="requirement">
            <h4>Objectives : </h4>
            <ul>
              <li>Training and observing research methodology</li>
              <li>Promoting innovative work and scientific research</li>
              <li>
                Appropriate use of advance technology in medical field for
                diagnosis and management
              </li>
              <li>Exposure to machine learning and deep learning</li>
              <li>
                Working with AI team in medical imaging and understanding the
                need for future
              </li>
            </ul>
          </div>
          <div className="requirement">
            <h4>Curriculum : </h4>
            <ul>
              <li>
                Minimum 10 -12 hrs dedication towards research activity in the
                given topic
              </li>
              <li>Online / in person support and guidance</li>
              <li>Weekly monitoring and assessment of progress of work</li>
              <li>Working in collaboration with technical team in AI</li>
              <li>
                Scientific presentation in national or international conference
              </li>
              <li>
                Publication in indexed national and international journals
              </li>
            </ul>
          </div>
          <div className="requirement">
            <h4>Eligibility and Selection Process : </h4>
            <ul>
              <li>MBBS or BDS (Final year/Intern/Completed)</li>
              <li>
                Post graduate students, Senior residents, Assistant professor
                and registrars
              </li>
              <li>Biomedical and Bioengineering students and graduates</li>
              <li>
                Based on the CV and online interview candidates will be selected
              </li>
              <li>Fees depending on the project and duration chosen</li>
              <li>Certificate at the end of program</li>
              <li>
                Recommendation letter from the project lead (Dr Dhananjaya and
                Mr Kousik sankar)
              </li>
              <li>Financial support for innovative project</li>
            </ul>
          </div>
          <Link
            to="/scientific-research-apply"
            className="d-flex justify-content-center align-items-center"
          >
            <button className="btn hero-btn btn-lg btn-block text-white">
              Apply now
            </button>
          </Link>
        </div>
      </Container>
    </Layout>
  )
}

export default scientificResearch
