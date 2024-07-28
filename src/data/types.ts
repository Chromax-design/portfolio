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
