import React from "react";
import { Card, CardDescription, CardTitle } from "./ui/CardEffect";
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
          <Card className="mt-10">
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
              <CardTitle className="text-lg">{post.title}</CardTitle>
            </Link>
            <CardDescription className=" sm:text-base">
              {post.des}
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
