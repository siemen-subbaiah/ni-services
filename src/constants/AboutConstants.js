import React from "react"
import { FcAbout } from "react-icons/fc"
import { MdNaturePeople } from "react-icons/md"
import { BsFillPeopleFill, BsPeopleCircle } from "react-icons/bs"
export const data = [
  {
    id: 1,
    image: <FcAbout className="service-icon" />,
    title: "Who are we",
    description:
      "Our vision is to provide best quality telemedicine services including teleradiology.",
    link: "/about/mission",
  },
  {
    id: 2,
    image: <MdNaturePeople className="service-icon" />,
    title: "Board of Directors",
    description:
      "Meet the board of directors who are taking the services to more further heights.",
    link: "/about/directors",
  },
  {
    id: 3,
    image: <BsFillPeopleFill className="service-icon" />,
    title: "Our Team",
    description:
      "Take a look at our team members who are the heart and soul of our company.",
    link: "/about/team",
  },
  {
    id: 4,
    image: <BsPeopleCircle className="service-icon" />,
    title: "Join Our Team",
    description: `We’re always on the lookout for awesome people to join us in help building a better future.`,
    link: "/about/join-our-team",
  },
]
