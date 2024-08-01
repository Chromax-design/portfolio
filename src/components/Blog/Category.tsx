import { cn } from "@/utils/cn";
import Link from "next/link";
import { slug } from "github-slugger";

const Category = ({
  link = "#",
  name,
  className,
  isActive,
}: {
  link: string;
  name: string;
  className?: string;
  isActive?: boolean;
}) => {
  return (
    <Link
      href={`/categories/${slug(link)}`}
      className={cn(
        "inline-block py-1.5 md:py-2 px-6 md:px-10 bg-light dark:bg-dark text-dark dark:text-light rounded-full border-solid border-dark dark:border-light border-2 hover:scale-105 transition-all duration-200",
        { "bg-dark dark:bg-light text-light dark:text-dark": isActive },
        className
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
