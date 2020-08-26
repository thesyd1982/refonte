import React from "react";

import {
  GrFacebookOption,
  GrTwitter,
  GrInstagram,
  GrLinkedinOption,
  GrPhone,
} from "react-icons/gr";

import { FiPhone } from "react-icons/fi";
const data = {
  links: [
    {
      id: 1,
      text: "Contact",
      path: "/contact",
      icon: "",
    },
    {
      id: 2,
      text: "Plan du site",
      path: "/site-map",
      icon: "",
    },
    {
      id: 3,
      text: "Téléchargement",
      path: "/downloads",
      icon: "",
    },
    {
      id: 4,
      text: "Mentions légales",
      path: "/legal-notice",
      icon: "",
    },
    {
      id: 5,
      text: "Espace Client",
      path: "/my-account",
      icon: "",
    },
  ],
  "social-links": [
    {
      id: 1,
      path: "/contact",
      icon: <GrFacebookOption />,
    },
    {
      id: 2,
      path: "/contact",
      icon: <GrTwitter />,
    },
    {
      id: 3,
      path: "/contact",
      icon: <GrInstagram />,
    },
    {
      id: 4,
      path: "/contact",
      icon: <GrLinkedinOption />,
    },
  ],
  "phone-links": [
    {
      id: 1,
      text: "06 51 83 80 73",
      path: ":tel 0651838073",
      icon: <FiPhone />,
    },
  ],
};

export default data;
