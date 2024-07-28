import { BlogPostTypes } from "@/data/types";
import Image from "next/image";
import Link from "next/link";
import Tags from "../Elements/Tags";
import { format } from "date-fns";

const BloglayoutTwo = ({ blogPost }: { blogPost: BlogPostTypes }) => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center text-dark">
      <Link
        href={blogPost.url}
        className="col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={blogPost.image?.filePath.replace("../public", "") || ""}
          alt={blogPost.title}
          placeholder="blur"
          blurDataURL={blogPost.image?.blurhashDataUrl}
          width={blogPost.image?.width}
          height={blogPost.image?.height}
          className=" aspect-square w-full h-full object-cover object-center"
        />
      </Link>
      <div className="col-span-8 w-full">
        <>
          {blogPost.tags && blogPost.tags.length > 0 ? (
            <span className="uppercase text-accent font-semibold text-sm">{blogPost.tags[0]}</span>
          ) : (
            <span className="uppercase text-accent font-semibold text-sm">General</span>
          )}
        </>
        <Link href={blogPost.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-lg">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blogPost.title}
            </span>
          </h2>
        </Link>
        <span className="capitalize text-dark/50 font-semibold text-base">{format(new Date(blogPost.publishedAt), "MMMM dd,yyyy")}</span>
      </div>
    </div>
  );
};

export default BloglayoutTwo;
