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
        "inline-block py-2 px-10 bg-light text-dark rounded-full border-solid border-dark border-2 hover:scale-105 transition-all duration-200",
        { "bg-dark text-light": isActive },
        className
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
