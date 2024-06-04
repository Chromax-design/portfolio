import { createClient, groq } from "next-sanity";

export const getPosts = async () => {
  const client = createClient({
    projectId: "y5yzf64p",
    dataset: "production",
    apiVersion: "2024-06-04",
  });

  try {
    const data = client.fetch(
      groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      image {
        alt,
        "imageUrl": asset->url
      },
      desc
    }`
    );

    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};
