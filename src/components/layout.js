import * as React from "react"
import Footer from "./Footer"
import Header from "./Header"
import "../css/style.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// bootstrap / dist / css / bootstrap.min.css

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
