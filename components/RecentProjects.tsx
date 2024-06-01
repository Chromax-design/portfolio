import { projects } from "@/data";
import React from "react";
import { HoverEffect } from "./ui/CardEffect";

const Recentprojects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
};

export default Recentprojects;
