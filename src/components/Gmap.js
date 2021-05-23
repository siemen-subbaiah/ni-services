import React from "react"
import { Container } from "react-bootstrap"

const Gmap = () => {
  return (
    <div className="maps">
      <Container></Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.511552413517!2d77.55042621464553!3d13.003062790835228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d84ed8bb3e3%3A0xa2e66de281486576!2sNischidha%20Imaging%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1621776627194!5m2!1sen!2sin"
        height="450"
        title="maps"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
      ></iframe>
    </div>
  )
}

export default Gmap
