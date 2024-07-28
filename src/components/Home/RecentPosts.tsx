import { BlogPostTypes } from "@/data/types";
import { sortBlogs } from "@/utils/utilities";
import Link from "next/link";
import BloglayoutThree from "../Blog/BloglayoutThree";

const RecentPosts = ({ blogPosts }: { blogPosts: BlogPostTypes[] }) => {
  const sortedBlog = sortBlogs(blogPosts);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="flex justify-between items-center w-full">
        <h2 className="inline-block font-bold capitalize text-4xl">
          recent post
        </h2>
        <Link
          href={"/categories/all"}
          className="underline underline-offset-2 text-lg text-accent capitalize font-medium"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlog.slice(4, 10).map((post) => {
          return (
            <article className=" col-span-1 row-span-1" key={post._id}>
              <BloglayoutThree blogPost={post} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
