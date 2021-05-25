import React from "react"
import { FaMicroscope } from "react-icons/fa"
import { GiMicroscopeLens } from "react-icons/gi"
import { MdPeopleOutline, MdPayment } from "react-icons/md"
export const data = [
  {
    id: 1,
    image: <FaMicroscope className="service-icon" />,
    title: "Teleradiology",
    description:
      "Our services include 24X7 Teleradiology support, locum support and emergency support.",
    link: "/services/teleradiology",
  },
  {
    id: 2,
    image: <GiMicroscopeLens className="service-icon" />,
    title: "Telepathology",
    description:
      "Telepathology is the electronic transmission of computerized or digital images that can be utilized for diagnostic consultation",
    link: "/services/telepathology",
  },
  {
    id: 3,
    image: <MdPeopleOutline className="service-icon" />,
    title: "Second Opinion",
    description:
      "We provide second opinion from our experienced team and interpret your images and provide you detailed reports.",
    link: "/services/second-opinion",
  },
  {
    id: 4,
    image: <MdPayment className="service-icon" />,
    title: "Payment Options",
    description: `Pay for our services online using paytm or bank transfer and leave the hassle of carrying money.`,
    link: "/services/payment",
  },
]
