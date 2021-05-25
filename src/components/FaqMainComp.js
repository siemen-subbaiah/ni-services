import React from "react"
import { Accordion, Card, Col, Container, Row } from "react-bootstrap"
import { IoMdArrowDropdown } from "react-icons/io"
import { data } from "../constants/FaqMain"

const FaqMainComp = () => {
  return (
    <Container>
      <h1 className="my-4 text-center">Frequently asked questions</h1>
      <Accordion defaultActiveKey="0" className="my-4">
        <Row>
          {data.map(item => {
            return (
              <Col lg={6} md={12} key={item.id}>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey={item.id}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <h5>{item.question}</h5>
                    <IoMdArrowDropdown />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={item.id}>
                    <Card.Body>
                      <p>{item.ans}</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Accordion>
    </Container>
  )
}

export default FaqMainComp
