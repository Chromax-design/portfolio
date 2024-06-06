import { PostsType, SinglePostType } from "@/utils/types";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "y5yzf64p",
  dataset: "production",
  apiVersion: "2024-06-04",
});

export const getPosts = async (): Promise<PostsType[] | null> => {
  const query = groq`*[_type == "post"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    image {
      alt,
      "imageUrl": asset->url
    },
    desc
  }`;

  try {
    const data = client.fetch(query, {}, {next: {revalidate: 60}});

    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};

export const getSinglePost = async (
  slug: string | string[]
): Promise<SinglePostType | null> => {
  const params = { slug };
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    image {
      alt,
      "imageUrl": asset->url
    },
    desc,
    content
  }`;

  try {
    const data = client.fetch(query, params, {next: {revalidate: 60}});
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};
