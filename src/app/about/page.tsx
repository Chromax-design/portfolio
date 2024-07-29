import AboutCoverSection from "@/components/About/AboutCoverSection";
import Skills from "@/components/About/Skills";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-2xl self-start mx-20 text-dark">
        Have a project in mind? Reach out to me &#128222; from{" "}
        <Link href={"/contact"} className="!underline underline-offset-2">here</Link> and let's make it happen.
      </h2>
    </>
  );
};

export default page;
