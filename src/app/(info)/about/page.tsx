import AboutCoverSection from "@/components/About/AboutCoverSection";
import Skills from "@/components/About/Skills";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About me",
  description: `Learn more about Godskey, a passionate web developer with expertise in web design and development. Discover my journey, skills, and the innovative projects I've worked on. Let's connect and create exceptional web experiences together`,
};

const AboutPage = () => {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-2xl self-start mx-20 text-dark">
        Have a project in mind? Reach out to me &#128222; from{" "}
        <Link href={"/contact"} className="!underline underline-offset-2">
          here
        </Link>{" "}
        and let&apos;s make it happen.
      </h2>
    </>
  );
};

export default AboutPage;
