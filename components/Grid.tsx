import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full">
        {gridItems.map(({title, description, className, img, id, imgClassName, titleClassName, spareImg}) => (
          <BentoGridItem
            title={title}
            titleClassName={titleClassName}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            spareImg={spareImg}
            id={id}
            key={id}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
