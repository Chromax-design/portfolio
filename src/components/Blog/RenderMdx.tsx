"use client";
import { BlogPostTypes } from "@/data/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
  Image,
};

const RenderMdx = ({ singlePost }: { singlePost: BlogPostTypes }) => {
  const MDXContent = useMDXComponent(singlePost.body.code);
  return (
    <div className=" col-span-8 font-inter prose max-w-max prose-blockquote:bg-accent/20 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
