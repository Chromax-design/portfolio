import { BlogPostTypes } from "@/data/types";
import Image from "next/image";
import Tags from "../Elements/Tags";
import Link from "next/link";

const BloglayoutOne = ({ blogPost }: { blogPost: BlogPostTypes }) => {
  return (
    <div className="inline-block overflow-hidden rounded-xl relative h-full group">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark/5 from-0% to-dark/95 z-10 rounded-xl" />
      <Image
        src={blogPost.image?.filePath.replace("../public", "") || ""}
        alt={blogPost.title}
        placeholder="blur"
        blurDataURL={blogPost.image?.blurhashDataUrl}
        width={blogPost.image?.width}
        height={blogPost.image?.height}
        className="w-full h-full object-center object-cover rounded-xl cursor-pointer group-hover:scale-105 transition-all duration-300"
        sizes="(max-width: 1180px) 100vw, 50vw"
      />
      <div className="absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20 w-full">
        <>
          {blogPost.tags && blogPost.tags.length > 0 && (
            <Tags
              link={`${blogPost.tags[0]}`}
              name={blogPost.tags[0]}
              className="px-6 text-xs sm:text-sm py-1 sm:py-2 !border "
            />
          )}
        </>
        <Link href={blogPost.url} className="mt-6">
          <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blogPost.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BloglayoutOne;
