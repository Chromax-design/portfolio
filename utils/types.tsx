import { PortableTextBlock } from "sanity";

export type PostsType = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  image: {
    imageUrl: string;
    alt: string;
  };
  desc: string;
};

export type NavItemType ={
  name: string;
  link: string;
  icon: React.ReactNode
}

export type SinglePostType = PostsType & {
  content : PortableTextBlock[]
}