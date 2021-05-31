import React from "react"
import logo from "../assets/images/logo.png"

const TopHeader = () => {
  return (
    <>
      <div className="d-flex justify-content-center justify-content-lg-around align-items-center my-2 container top-heading d-lg-none">
        <img src={logo} alt="" className="logo" width="70" height="70" />
        <h3 className="text-center top-header my-3">
          Nischidha Imaging Services
        </h3>
      </div>
      <div className="d-none my-2 top-heading d-lg-block">
        <img src={logo} alt="" className="logo" width="75" height="75" />
        <h3 className="top-header d-inline t-head">
          Nischidha Imaging Services
        </h3>
      </div>
    </>
  )
}

export default TopHeader
