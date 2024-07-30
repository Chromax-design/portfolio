import { FaGithub, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import { NavTypes, SocialTypes } from "./types";
import { siteMetadata } from "@/utils/siteMetaData";

export const navLinks: NavTypes[] = [
  { id: 1, link: "/", title: "home" },
  { id: 2, link: "/about", title: "about" },
  { id: 3, link: "/contact", title: "contact" },
];

export const socialIcons: SocialTypes[] = [
  { id: 1, link: siteMetadata.linkedin, icon: <FaLinkedin />, style: "text-[#0077B5]" },
  { id: 2, link: siteMetadata.twitter, icon: <FaTwitter />, style: "text-[#1DA1F2]" },
  { id: 3, link: siteMetadata.github, icon: <FaGithub />, style: "text-[#24292e]" },
  { id: 4, link: "https://www.pinterest.com", icon: <FaPinterest />, style: "text-[#E60023]" },
];
