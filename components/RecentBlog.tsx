import React from "react";
import { posts } from "@/data";
import Link from "next/link";

const RecentBlog = () => {
  return (
    <div className="pb-20" id="testimonials">
      <h1 className="heading">
        My <span className="text-purple">recent articles</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div className="mt-10 rounded-3xl h-full w-full p-4 overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
            <Link
              className="relative flex items-center justify-center mb-10"
              href={""}
              key={post.id}
            >
              <div className="relative h-full w-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                <img
                  src={post.img}
                  alt="background image"
                  className="w-full hover:scale-105 transition"
                />
              </div>
            </Link>
            <Link href={""}>
              <h4 className="text-lg text-zinc-100 font-bold tracking-wide mt-4">{post.title}</h4>
            </Link>
            <p className=" sm:text-base mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
              {post.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
