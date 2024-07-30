import { Blog } from "contentlayer/generated";

export type NavTypes = {
  id: number;
  link: string;
  title: string;
};

export type SocialTypes = {
  id: number;
  link: string;
  icon: React.ReactElement;
  style: string;
};

export type BlogPostTypes = Blog;

export type TocTypes = {
  level: string;
  text: string;
  slug: string;
};

export type SiteMetaDataTypes = {
  title: string;
  author: string;
  headerTitle: string;
  description: string;
  language: string;
  theme: string;
  siteUrl: string;
  siteLogo: string;
  socialBanner: string;
  email: string;
  github: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  locale: string;
};
