import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TranquilDoc from "../../assets/images/TranquilDoc.jpg"
import TranquilDoc10Img from "../../assets/images/TranquilDoc-10.jpeg"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import TableComp from "../../components/TableComp"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../../constants/firebase"
import sponser1 from "../../assets/images/sponser1.png"
import sponser2 from "../../assets/images/sponser2.png"

const TranquilDoc10 = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const allUsers = query(
        collection(db, "users2"),
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
      <Seo Sitetitle="TranquilDoc-10" />
      <Container className="my-5">
        <div className="service-h-card my-5">
          <div className="text-center">
            <img
              src={TranquilDoc10Img}
              alt="Tranquil10-img"
              className="tran2 mb-5"
            />
          </div>
          <h4>Tranquildoc-10: Reigning</h4>
          <p className="text-start">
            <strong>Venue :</strong> Skyye, UB City, Bengaluru
          </p>
          <p className="text-start">
            {" "}
            <strong>Date :</strong> 23rd July 2022
          </p>
          <p className="text-start">
            {" "}
            <strong>Time :</strong> 8PM - 12AM.
          </p>
          <div className="my-3">
            <a href="https://m.facebook.com/story.php?story_fbid=pfbid027bs2M9RDWDreVqEzRRddtAUKDKjj1dxznHTNNKcRikPxTs6zxgJMS6Cs6sfi7DWLl&id=770927989">
              Check updates in{" "}
              <span style={{ color: "#3b5998 " }}>Facebook</span>
            </a>
          </div>
          <Link to="/event-details">
            <button className="btn text-white hero-btn">Register</button>
          </Link>
          {/* <div className="my-1 d-flex align-items-center  flex-column flex-lg-row">
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
          </div> */}
        </div>
        <TableComp className="my-5" users={users} />
      </Container>
    </Layout>
  )
}

export default TranquilDoc10
