import React from "react"
import { Table } from "react-bootstrap"

const TableComp = ({ users }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID No</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Branch</th>
          <th>City/Town</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user, i) => {
          return (
            <tr key={i}>
              <td>{`TD10${user.ref}`}</td>
              <td>{user.name}</td>
              <td>{user.designation}</td>
              <td>{user.branch}</td>
              <td>{user.city}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default TableComp
