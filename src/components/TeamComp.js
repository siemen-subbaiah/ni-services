import React, { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { data } from "../constants/TeamMembers"
import "aos/dist/aos.css"
import AOS from "aos"

const TeamComp = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Container className="my-5">
      <Row>
        {data.map(item => {
          return (
            <Col xl={12} key={item.id} data-aos="fade-up" id="team">
              <div className="team-card d-block d-lg-flex justify-content-center align-items-center">
                <div className="team-img text-center">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="team-det">
                  <h5 className="person-name"> {item.name}</h5>
                  <p className="role">{item.role}</p>
                  <p>{item.description}</p>
                  <p>
                    <strong>{item.education && "education : "}</strong>{" "}
                    {item?.education}
                  </p>

                  <p>
                    <strong>{item.expertise && "expertise : "}</strong>
                    {item?.expertise}
                  </p>
                  <p
                    className={
                      item.specialization === `Radiology`
                        ? "radiology"
                        : "padiology"
                    }
                  >
                    #{item.specialization}
                  </p>
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default TeamComp
