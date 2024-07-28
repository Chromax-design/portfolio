import { BlogPostTypes } from "@/data/types";
import { compareDesc, parseISO } from "date-fns";

export const sortBlogs = (blogs: BlogPostTypes[]): BlogPostTypes[] => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
