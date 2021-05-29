import React from "react"
import logo from "../assets/images/logo.png"

const TopHeader = () => {
  return (
    <div className="d-lg-flex justify-content-center align-items-center my-2 container top-heading d-none">
      <img src={logo} alt="" className="logo" />
      <h3 className="text-center top-header my-3">
        Nischidha Imaging Services
      </h3>
    </div>
  )
}

export default TopHeader
