import { getSinglePost } from "@/schemaTypes/sanity-utils";
import formatDate from "@/utils/formatDate";
import { PortableText, PortableTextComponents } from "next-sanity";
import React, { FC } from "react";

type Props = {
  params: { slug: string };
};

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-4 mt-5">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-3 mt-5">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mb-2 mt-5">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 font-normal md:text-lg md:leading-8">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-4">{children}</ul>,
    number: ({ children }) => (
      <ol className="mt-2 md:text-lg md:leading-8">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
    ),
    number: ({ children }) => (
      <li
        style={{ listStyleType: "disclosure-closed" }}
        className="mt-3 list-inside"
      >
        {children}
      </li>
    ),
  },
};

const BlogDetails = async ({ params }: Props) => {
  const singlePost = await getSinglePost(params.slug);

  return (
    <section className="max-w-5xl mx-auto py-20">
      <div className="mb-10">
        <p className="uppercase text-sm font-medium tracking-wide">
          {formatDate(new Date(singlePost?._createdAt ?? "").toString())}
        </p>
        <h1 className="text-4xl sm:text-5xl capitalize mx-auto font-semibold mt-1">
          {singlePost?.title}
        </h1>
      </div>
      <div className="relative aspect-video overflow-hidden mb-10">
        <img
          src={singlePost?.image?.imageUrl}
          alt={singlePost?.image?.alt}
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="max-w-3xl">
        <PortableText
          components={components}
          onMissingComponent={false}
          value={singlePost?.content ?? []}
        />
      </div>
    </section>
  );
};

export default BlogDetails;
