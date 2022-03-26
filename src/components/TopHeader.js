import React from "react"
import logo from "../assets/images/logo.png"
import { Link } from "gatsby"

const TopHeader = () => {
  return (
    <>
      <div className="d-flex justify-content-center justify-content-lg-around align-items-center my-2 container top-heading d-lg-none">
        <Link to="/">
          <img src={logo} alt="" className="logo" width="60" height="60" />
        </Link>
        <Link to="/">
          <h3 className="text-center top-header my-3">
            Nischidha Imaging Services
          </h3>
        </Link>
      </div>
      <div className="d-none my-2 top-heading d-lg-block">
        <Link to="/">
          <img src={logo} alt="" className="logo" width="75" height="75" />
        </Link>
        <Link to="/">
          <h1 className="top-header d-inline t-head">
            Nischidha Imaging Services
          </h1>
        </Link>
      </div>
    </>
  )
}

export default TopHeader
