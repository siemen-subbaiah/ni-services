import React from "react"
import logo from "../assets/images/logo.png"

const TopHeader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-2 container top-heading">
      <img src={logo} alt="" className="logo" width="60" height="60" />
      <h3 className="text-center top-header my-3">
        Nischidha Imaging Services
      </h3>
    </div>
  )
}

export default TopHeader
