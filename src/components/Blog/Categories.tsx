import React from "react";
import Category from "./Category";
import { slug } from "github-slugger";

const Categories = ({
  allCategories,
  currentCategory,
}: {
  allCategories: string[];
  currentCategory: string;
}) => {
  return (
    <div className="px-0 md:px-10 xxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium gap-2 mx-5 md:mx-10">
      {allCategories.map((category) => (
        <Category
          key={category}
          link={category}
          name={category}
          isActive={currentCategory === slug(category)}
        />
      ))}
    </div>
  );
};

export default Categories;
