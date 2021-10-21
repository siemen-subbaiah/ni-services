import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TranquilDoc from "../../assets/images/TranquilDoc.jpg"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

const TranquilDoc9 = () => {
  return (
    <Layout>
      <Seo Sitetitle="TranquilDoc-9" />
      <Container className="my-5">
        <div className="service-h-card">
          <div className="text-center">
            <img src={TranquilDoc} alt="TranquilDoc-img" className="tran2" />
          </div>
          <h4>TranquilDoc-9: Infatuation</h4>
          <p className="text-start">
            TranquilDoc is back after COVID19 pandemic. It's a series of event
            for all the young hard working dynamic doctors. Rejuvenate, Rejoice
            and reload.
          </p>
          <p className="text-start">
            <strong>Venue :</strong> Angrezi- Bollywood bar and Kitchen
          </p>
          <p className="text-start">
            {" "}
            <strong>Date :</strong> 06th November 2021
          </p>
          <p className="text-start">
            {" "}
            <strong>Time :</strong> 18:00 - 23:45 hrs.
          </p>
          <Link to="/event-details">
            <button className="btn text-white hero-btn">Register</button>
          </Link>
        </div>
      </Container>
    </Layout>
  )
}

export default TranquilDoc9
