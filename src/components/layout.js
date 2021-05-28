import * as React from "react"
import Footer from "./Footer"
import Header from "./Header"
import "../css/style.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import TopHeader from "./TopHeader"
// bootstrap / dist / css / bootstrap.min.css

const Layout = ({ children }) => {
  return (
    <>
      <TopHeader />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
