import React from "react"
import { AiOutlineThunderbolt } from "react-icons/ai"
import { GiArchiveResearch } from "react-icons/gi"
export const data = [
  {
    id: 1,
    image: <GiArchiveResearch className="service-icon" />,
    title: "Scientific Medical Research",
    description: `Medical research encompasses a wide array of research, extending from "basic research" (also called bench science or bench research)`,
    link: "/research/scientific-research",
  },
  {
    id: 2,
    image: <AiOutlineThunderbolt className="service-icon" />,
    title: "Deep Learning",
    description:
      "Deep learning is a subset of machine learning in artificial intelligence that has networks capable of learning unsupervised from data that is unstructured or unlabeled",
    link: "/research/deep-learning",
  },
]
