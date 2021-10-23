import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TranquilDoc from "../../assets/images/TranquilDoc.jpg"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import TableComp from "../../components/TableComp"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../../constants/firebase"
import sponser1 from "../../assets/images/sponser1.png"
import sponser2 from "../../assets/images/sponser2.png"

const TranquilDoc9 = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const allUsers = query(
        collection(db, "users"),
        orderBy("timeStamp", "asc")
      )
      const userSnapShot = await getDocs(allUsers)
      const userList = setUsers(userSnapShot.docs.map(doc => doc.data()))
      console.log(userList)
    }
    getUsers()
  }, [])

  return (
    <Layout>
      <Seo Sitetitle="TranquilDoc-9" />
      <Container className="my-5">
        <div className="service-h-card my-5">
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
          <div className="my-3">
            <a href="https://facebook.com/events/s/tranquidoc-9-infatuation/3074057026210813/">
              Check updates in{" "}
              <span style={{ color: "#3b5998 " }}>Facebook</span>
            </a>
          </div>
          <div className="my-1 d-flex align-items-center  flex-column flex-lg-row">
            <a href="https://www.instagram.com/buyoproperty/?utm_medium=copy_link">
              <img src={sponser1} alt="sponser" className="sponser img-fluid" />
            </a>
            <a href="https://www.instagram.com/buyoproperty/?utm_medium=copy_link">
              <img
                src={sponser2}
                alt="sponser img-fluid"
                className="sponser2 ms-0 my-2 my-lg-0 ms-lg-4"
              />
            </a>
          </div>
        </div>
        <TableComp className="my-5" users={users} />
      </Container>
    </Layout>
  )
}

export default TranquilDoc9
