import { BlogPostTypes } from "@/data/types";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import ViewCounter from "./ViewCounter";

const BlogDetails = ({
  singlePost,
  slug,
}: {
  singlePost: BlogPostTypes;
  slug: string;
}) => {
  return (
    <div className="px-2 md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-lg gap-6">
      <time>{format(parseISO(singlePost.publishedAt), "LLLL d, yyy")}</time>
      <ViewCounter slug={slug} noCount={false} showCount={true} />
      <div>{singlePost.readingTime?.text}</div>
      {singlePost.tags && (
        <Link href={`/categories/${singlePost?.tags[0]}`} className="m-3">
          #{singlePost?.tags[0]}
        </Link>
      )}
    </div>
  );
};

export default BlogDetails;
