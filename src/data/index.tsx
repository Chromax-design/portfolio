import { FaGithub, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import { NavTypes, SocialTypes } from "./types";

export const navLinks: NavTypes[] = [
  { id: 1, link: "/", title: "home" },
  { id: 2, link: "/about", title: "about" },
  { id: 3, link: "/contact", title: "contact" },
];

export const socialIcons: SocialTypes[] = [
  { id: 1, link: "", icon: <FaLinkedin />, style: "text-[#0077B5]" },
  { id: 2, link: "", icon: <FaTwitter />, style: "text-[#1DA1F2]" },
  { id: 3, link: "", icon: <FaGithub />, style: "text-[#24292e]" },
  { id: 4, link: "", icon: <FaPinterest />, style: "text-[#E60023]" },
];
