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
    <div className="px-20 mt-10 border-t-2 text-dark border-b-2 border-solid border-dark py-4 flex items-start flex-wrap font-medium gap-2 mx-10">
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
