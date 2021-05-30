import React from "react"
import { Container } from "react-bootstrap"
import BackgroundImage from "../components/BackgroundImage"
import Layout from "../components/layout"
import Seo from "../components/seo"

const threeprinting = () => {
  return (
    <Layout>
      <Seo Sitetitle="3d printing" />
      <BackgroundImage title="3D Printing" description="" />
      <Container>
        <div className="more-info my-5">
          <h3 className="my-3">What is 3D Printing?</h3>
          <p>
            3D printing is an innovative technology that lets you create a
            physical object from a digital model. 3D printers offer amazing
            results and let you create anything you can imagine.
          </p>
          <h3 className="my-3">How does 3D Printing work?</h3>
          <p>
            3D printing is also called additive manufacturing, because unlike
            the traditional subtractive manufacturing, 3D printing doesn’t
            remove material, it adds it, layer after layer. In order to print
            something, first you’ll need a 3D model of the object you want to
            create, which you can design in a 3D modeling program (CAD -
            Computer Aided Design), or use a 3D scanner to scan the object you
            want to print.
          </p>
          <p>
            Once your design’s ready, all you need to do is import it into print
            software. It will then turn your design into a gcode file ready to
            be printed as a physical object. Although there are several 3D
            printing technologies, most of them create the object by laying down
            many successive thin layers of a material. Usually, desktop 3D
            printers use plastic filaments (1) which are fed into the printer by
            the feeder (2). The filament is melted in the print head (3) which
            extrudes the material onto the build plate (4) creating your object
            layer by layer. Once the printer starts printing, all you have to do
            is wait – it’s that easy
          </p>
          <h3 className="my-3">3D printing in medical imaging</h3>
          <p>
            It’s been proven that the interaction doctors have with patients is
            fundamental to helping them cope with their condition, as it gives
            them a deeper insight. However, should the patient require an
            operation of great complexity, such as having a brain tumor removed,
            they can experience confusion when talking things through with their
            neurosurgeon. It can be hard for the doctor to clearly explain the
            surgical plan and risks. 3D printing is able to play its part in
            this process by creating models taken from the same MRI scans,
            acting as a powerful tool to help patients visually understand their
            problem in three dimensions, what treatment is needed and the risks
            involved.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default threeprinting
