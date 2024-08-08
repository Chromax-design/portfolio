import BlogDetails from "@/components/Blog/BlogDetails";
import RenderMdx from "@/components/Blog/RenderMdx";
import Tags from "@/components/Elements/Tags";
import { TocTypes } from "@/data/types";
import { siteMetadata } from "@/utils/siteMetaData";
import { allBlogs, ImageFieldData } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return allBlogs.map((singleItem) => ({
    slug: singleItem._raw.flattenedPath,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const singlePost = allBlogs.find(
    (singleItem) => singleItem._raw.flattenedPath === slug
  );
  if (!singlePost) {
    return;
  }

  const publishedAt = new Date(singlePost.publishedAt).toISOString();
  const modifiedAt = new Date(
    singlePost.updatedAt || singlePost.publishedAt
  ).toISOString();

  let imageList: string[] | ImageFieldData = [siteMetadata.socialBanner];
  if (singlePost.image) {
    imageList =
      typeof singlePost.image.filePath === "string"
        ? [
            `${siteMetadata.siteUrl}${singlePost.image.filePath.replace(
              "../public",
              ""
            )}`,
          ]
        : singlePost.image;
  }

  const ogImages = Array.isArray(imageList)
    ? imageList.map((img) => {
        return {
          url: img.includes("https") ? img : `${siteMetadata.siteUrl}${img}`,
        };
      })
    : [];

  const author = singlePost?.author ? singlePost.author : siteMetadata.author;

  return {
    title: singlePost.title,
    description: singlePost.description,
    openGraph: {
      title: singlePost.title,
      description: "The React Framework for the Web",
      url: `${siteMetadata.siteUrl}${singlePost.url}}`,
      siteName: siteMetadata.title,
      images: ogImages,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      author: author,
    },
    twitter: {
      card: "summary_large_image",
      title: singlePost.title,
      description: singlePost.description,
      creator: author,
      images: ogImages,
    },
  };
}

const Singlepost = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const singlePost = allBlogs.find(
    (singleItem) => singleItem._raw.flattenedPath === slug
  );

  let imageList: string[] | ImageFieldData = [siteMetadata.socialBanner];
  if (singlePost?.image) {
    imageList =
      typeof singlePost.image.filePath === "string"
        ? [
            `${siteMetadata.siteUrl}${singlePost.image.filePath.replace(
              "../public",
              ""
            )}`,
          ]
        : singlePost.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: singlePost?.title,
    description: singlePost?.description,
    image: imageList,
    datePublished: new Date(
      singlePost?.publishedAt ? singlePost?.publishedAt : ""
    ).toISOString(),
    dateModified: new Date(
      singlePost?.updatedAt ? singlePost?.updatedAt : ""
    ).toISOString(),
    author: [
      {
        "@type": "Person",
        name: singlePost?.author ? singlePost.author : siteMetadata.author,
        url: `${siteMetadata.siteUrl}/profile-img.jpg`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          <h1 className=" inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl leading-normal relative w-5/6">
            {singlePost?.title}
          </h1>
        </div>
        <div className="absolute top-0 right-0 h-full w-full bg-dark/60 dark:bg-dark/70" />
        <Image
          src={singlePost?.image?.filePath.replace("../public", "") || ""}
          alt={singlePost?.title || ""}
          placeholder="blur"
          blurDataURL={singlePost?.image?.blurhashDataUrl}
          width={singlePost?.image?.width}
          height={singlePost?.image?.height}
          className="w-full h-full object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      {singlePost && <BlogDetails singlePost={singlePost} slug={slug} />}
      <div className="grid grid-cols-12 gap-y-8 lg:gap-8 xxl:gap-16 mt-8 px-5 md:px-10">
        <div className="col-span-12 lg:col-span-4">
          <details
            className="border border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
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
                      className=" data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start gap-2"
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
    </>
  );
};

export default Singlepost;
