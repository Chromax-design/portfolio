import { BlogPostTypes } from "@/data/types";
import { sortBlogs } from "@/utils/utilities";
import Image from "next/image";
import Link from "next/link";
import Tags from "../Elements/Tags";

const HomeCoverSection = ({ blogPosts }: { blogPosts: BlogPostTypes[] }) => {
  const sortedPosts = sortBlogs(blogPosts);
  const heroPost = sortedPosts[0];

  return (
    <section className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark/5 from-0% to-dark/95 z-0 rounded-3xl" />
        <Image
          src={heroPost.image?.filePath.replace("../public", "") || ""}
          alt={heroPost.title}
          placeholder="blur"
          blurDataURL={heroPost.image?.blurhashDataUrl}
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
          sizes="100vw"
          priority
        />
        <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light capitalize">
          <>
            {heroPost.tags && heroPost.tags.length > 0 && (
              <Tags link={`${heroPost.tags[0]}`} name={heroPost.tags[0]} />
            )}
          </>
          <Link href={heroPost.url} className="mt-6">
            <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl text-light">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                {heroPost.title}
              </span>
            </h1>
          </Link>
          <p className="mt-4 hidden sm:inline-block md:text-lg lg:text-xl font-inter">
            {heroPost.description}
          </p>
        </div>
      </article>
    </section>
  );
};

export default HomeCoverSection;
