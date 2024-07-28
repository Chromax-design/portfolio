"use client";

import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import Socials from "./Socials";
import Link from "next/link";

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
    <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-3/5 font-light text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 min-w-[384px] flex gap-2 items-stretch bg-light p-2 rounded mx-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full bg-dark/0 text-dark focus:border-dark focus:ring-0 border-0 border-b pb-1"
        />

        <input
          type="submit"
          className="bg-dark  text-light cursor-pointer font-medium rounded px-5 py-1"
        />
      </form>
      <div className="mt-8">
        <Socials isWhite={true} />
      </div>
      <div className="w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex items-center justify-between">
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
