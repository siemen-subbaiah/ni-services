import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

const deepLearning = () => {
  return (
    <Layout>
      <Seo Sitetitle="Deep Learning (Artificial Intelligence)" />
      <Container>
        <h1 className="text-center mt-5">
          Deep Learning (Artificial Intelligence)
        </h1>
        <div className="underline"></div>
        <div className="more-info my-5" id="deep_learning">
          <div className="requirement">
            <h4>Internship : </h4>
            <ul>
              <li>Duration – 3 to 6 months</li>
              <li>Deep learning in radiology imaging and health informatics</li>
              <li>
                These projects involve using deep learning techniques using CNNs
                applied to multiple radiology images like CT, MRI, X-ray etc for
                image segmentation/diagnosis recommendations with applications
                in oncology imaging, brain imaging etc.
              </li>
              <li>The expected deliverables are as follows : </li>
              <ul>
                <li>
                  Working prototype with/without UI (to be decided based on the
                  specific nature of the project)
                </li>
                <li>
                  Working code in github/Atlassian with full access and full
                  rights of use/IP to Dr Dhananjaya with detailed manual on
                  usage
                </li>
                <li>
                  Any conference artefacts if applicable:- The intern(s)’s
                  name(s) along with the medical mentor (Dr Dhananjaya) will be
                  the primary names for any conference presentation. Adding any
                  other contributors will be at the sole discretion of Dr
                  Dhananjaya.
                </li>
              </ul>
              <li>
                The plan is to use the above deliverables with a working
                prototype and a user-friendly UI in alignment with the National
                Rural Health Mission pan-India
              </li>
              <li>
                A Certificate with each intern candidate’s name will be given at
                the end of the internship.
              </li>
              <li>
                Monetary rewards may also be given at the end of the internship.
                The decision to do so as well as the amount of the reward will
                be at the sole discretion of Dr Dhananjaya with advisory inputs
                from Mr Kousik Sankar R. The criteria for such monetary rewards
                would be the nature of the work done by the intern, the problem
                complexity, the potential impact of the solution, the pro-active
                nature of the intern candidate and the success metrics of the
                working prototype.
              </li>
              <li>
                Letter of recommendation Based on the performance of the
                intern(s), Dr Dhananjaya and Mr Kousik would be happy to write a
                good letter of recommendation for the intern(s).
              </li>
            </ul>
          </div>
          <Link
            to="/deep-learning-apply"
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

export default deepLearning
