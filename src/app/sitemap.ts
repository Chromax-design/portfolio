import { siteMetadata } from "@/utils/siteMetaData";
import { sortBlogs } from "@/utils/utilities";
import { allBlogs } from "contentlayer/generated";
import { MetadataRoute } from "next";

export const revalidatePath = 30; // 30  secs

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = sortBlogs(allBlogs);
  const blogPost = blogs.map((blog) => ({
    url: `${siteMetadata.siteUrl}${blog.url}`,
    lastModified: new Date(blog.updatedAt).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 1 as const,
  }));

  const staticPages = [
    {
      url: `${siteMetadata.siteUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 1 as const,
    },
    {
      url: `${siteMetadata.siteUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.8 as const,
    },
    {
      url: `${siteMetadata.siteUrl}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as const,
      priority: 0.7 as const,
    },
  ];
  return [
    ...staticPages,
    ...blogPost
  ];
}
