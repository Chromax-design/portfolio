import BlogDetails from "@/components/Blog/BlogDetails";
import RenderMdx from "@/components/Blog/RenderMdx";
import Tags from "@/components/Elements/Tags";
import { TocTypes } from "@/data/types";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import GithubSlugger from "github-slugger";

const slugger = new GithubSlugger();
export async function generateStaticParams() {
  return allBlogs.map((singleItem) => ({
    slug: singleItem._raw.flattenedPath,
  }));
}

const Singlepost = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const singlePost = allBlogs.find(
    (singleItem) => singleItem._raw.flattenedPath === slug
  );
  // console.log(singlePost)

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className=" w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {singlePost?.tags && singlePost?.tags.length > 0 ? (
            <Tags
              link={`${singlePost?.tags[0]}`}
              name={singlePost?.tags[0]}
              className="px-6 text-sm py-2"
            />
          ) : (
            <Link href={"/categories/all"}>general</Link>
          )}
          <h1 className=" inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal relative w-5/6">
            {singlePost?.title}
          </h1>
        </div>
        <div className="absolute top-0 right-0 h-full w-full bg-dark/60" />
        <Image
          src={singlePost?.image?.filePath.replace("../public", "") || ""}
          alt={singlePost?.title || ""}
          placeholder="blur"
          blurDataURL={singlePost?.image?.blurhashDataUrl}
          width={singlePost?.image?.width}
          height={singlePost?.image?.height}
          className="w-full h-full object-cover object-center"
        />
      </div>
      {singlePost && <BlogDetails singlePost={singlePost} slug={slug} />}
      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
        <div className="col-span-4">
          <details
            className="border border-solid border-dark text-dark rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              table of content
            </summary>
            <ul className="mt-4 font-inter text-sm">
              {singlePost?.toc.map((item: TocTypes) => {
                return (
                  <li key={item.slug} className="py-1">
                    <a
                      href={`#${item.slug}`}
                      data-level={item.level}
                      className=" data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-3 flex items-center justify-start gap-2"
                    >
                      {item.level == "three" && (
                        <span className=" flex w-1 h-1 rounded-full bg-dark">
                          &nbsp;
                        </span>
                      )}
                      <span className="hover:underline">{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        {singlePost && <RenderMdx singlePost={singlePost} />}
      </div>
    </article>
  );
};

export default Singlepost;
