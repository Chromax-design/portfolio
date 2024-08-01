import { cn } from "@/utils/cn";
import Link from "next/link";
import { slug } from "github-slugger";

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
      href={`/categories/${slug(link)}`}
      className={cn(
        "inline-block capitalize py-2 sm:py-3 px-6 sm:px-10 bg-dark text-light rounded-full font-semibold border-solid border-light border-2 hover:scale-105 transition-all duration-200 text-sm sm:text-base",
        className
      )}
    >
      {name}
    </Link>
  );
};

export default Tags;
