import React, { useEffect } from "react"
import { Accordion, Card, Col, Container, Row } from "react-bootstrap"
import { data } from "../constants/TeamMembers"
import "aos/dist/aos.css"
import AOS from "aos"

const TeamComp = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  const pathology = data
    .map(item => item)
    .filter(item => item.specialization === "Pathology")

  const radiology = data
    .map(item => item)
    .filter(item => item.specialization === "Radiology")

  return (
    <Container className="my-5">
      <Row>
        <Col xl={12} id="team">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <h1 className="h5">Radiology</h1>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {radiology.map(item => {
                    return (
                      <div
                        className="team-card d-block d-lg-flex justify-content-center align-items-center"
                        key={item.id}
                        data-aos="fade-up"
                      >
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
                    )
                  })}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <h1 className="h5">Pathology</h1>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  {pathology.map(item => {
                    return (
                      <div
                        className="team-card d-block d-lg-flex justify-content-center align-items-center"
                        key={item.id}
                        data-aos="fade-up"
                      >
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
                    )
                  })}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}

export default TeamComp
