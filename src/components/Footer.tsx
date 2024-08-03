"use client";

import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/utils/Icons";
import { siteMetadata } from "@/utils/siteMetaData";

type FormValues = {
  email: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
          email: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex gap-1 sm:gap-2 items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b pb-1"
        />

        <input
          type="submit"
          className="bg-dark dark:bg-light text-light dark:text-dark cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>
      <div className="flex gap-2 mt-8">
        <a href={siteMetadata.linkedin} className="w-6 h-6">
          <LinkedInIcon className="hover:scale-125 duration-200 transition-all" />
        </a>
        <a href={siteMetadata.twitter} className="w-6 h-6">
          <TwitterIcon className="hover:scale-125 duration-200 transition-all" />
        </a>
        <a
          href={siteMetadata.github}
          className="w-6 h-6 fill-light dark:fill-dark"
        >
          <GithubIcon className="hover:scale-125 duration-200 transition-all" />
        </a>
      </div>
      <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row gap-2 items-center justify-between">
        <span className="text-center">
          &copy; {new Date().getFullYear()} Chromax. All rights reserved.
        </span>
        <Link href={"/sitemap.xml"} className="underline text-center">
          sitemap.xml
        </Link>
        <div>
          made with &hearts; by
          <Link href={"/"} className="underline">
            {" "}
            Chromax dev
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
