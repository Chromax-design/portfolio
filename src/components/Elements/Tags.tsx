import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

const Tags = ({
  link = "#",
  name,
  className,
}: {
  link: string;
  name: string;
  className?: string;
}) => {
  return (
    <Link
      href={`/categories/${link}}`}
      className={cn(
        "inline-block capitalize py-3 px-10 bg-dark text-light rounded-full font-semibold border-solid border-light border-2 hover:scale-105 transition-all duration-200",
        className
      )}
    >
      {name}
    </Link>
  );
};

export default Tags;
