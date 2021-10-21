import React from "react"
import { Table } from "react-bootstrap"

const TableComp = () => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Sl no</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Branch</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Associate</td>
          <td>2017</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Developer</td>
          <td>2018</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>Technical Support</td>
          <td>2021</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableComp
