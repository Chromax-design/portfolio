import BloglayoutThree from "@/components/Blog/BloglayoutThree";
import Categories from "@/components/Blog/Categories";
import { allBlogs } from "contentlayer/generated";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();
export async function generateStaticParams() {
  const categories = ["all"];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    blog.tags?.map((tag) => {
      let sluggified = slugger.slug(tag);
      if (!categories.includes(sluggified)) {
        paths.push({ slug: sluggified });
      }
    });
  });

  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return {
    title: `${slug.replaceAll("-", " ")} Blogs`,
    description: `learn more about ${
      slug === "all" ? "web development" : slug.replaceAll("-", "")
    } through our collection of export blogs and tutorials`,
  };
}

const Categorypage = ({ params }: { params: { slug: string } }) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags?.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }
      return params.slug === slugified;
    });
  });
  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-5 sm:px-10 md:px-24 xxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge
        </span>
      </div>

      <Categories allCategories={allCategories} currentCategory={params.slug} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 px-5 sm:px-10 md:px-24 xxl:px-32">
        {blogs.map((blog) => (
          <article key={blog._id} className="col-span-1 row-span-1 relative">
            <BloglayoutThree blogPost={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default Categorypage;
