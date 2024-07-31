import { FaEnvelope, FaHome, FaUser } from "react-icons/fa";
import { NavTypes } from "./types";

export const navLinks: NavTypes[] = [
  { id: 1, link: "/", title: "Home", icon: <FaHome /> },
  { id: 2, link: "/about", title: "About", icon: <FaUser /> },
  { id: 3, link: "/contact", title: "Contact", icon: <FaEnvelope /> },
];
