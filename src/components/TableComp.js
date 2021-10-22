import React from "react"
import { Table } from "react-bootstrap"

const TableComp = ({ users }) => {
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
        {users?.map((user, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.designation}</td>
              <td>{user.branch}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default TableComp
