const SkillList: string[] = [
  "next.js",
  "tailwind css",
  "figma",
  "javaScript",
  "web design",
  "Gatsby.js",
  "strapi",
  "firebase",
  "generative AI",
  "wireframing",
  "SEO",
  "framer motion",
  "sanity",
];

const Skills = () => {
  return (
    <section className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light">
      <span className="font-semibold text-lg sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
        I&apos; comfortable in...
      </span>
      <ul className="flex flex-wrap mt-8 justify-center xs:justify-start gap-3 xs:gap-4 md:gap-6">
        {SkillList.map((item) => (
          <li
            className="font-semibold dark:font-normal inline-block capitalize text-base xs:text-lg sm:text-xl md:text-2xl py-2 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-solid border-dark dark:border-light rounded hover:scale-105 transition-all ease duration-200 cursor-pointer"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
