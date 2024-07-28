import { BlogPostTypes } from "@/data/types";
import { sortBlogs } from "@/utils/utilities";
import BloglayoutOne from "../Blog/BloglayoutOne";
import BloglayoutTwo from "../Blog/BloglayoutTwo";

const Featuredpost = ({ blogPosts }: { blogPosts: BlogPostTypes[] }) => {
  const sortedBlogs = sortBlogs(blogPosts);

  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-4xl">
        featured post
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-16">
        <article className="col-span-1 row-span-2">
          <BloglayoutOne blogPost={sortedBlogs[1]} />
        </article>
        <article className="col-span-1 row-span-1">
          <BloglayoutTwo blogPost={sortedBlogs[2]} />
        </article>
        <article className="col-span-1 row-span-1">
          <BloglayoutTwo blogPost={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default Featuredpost;
