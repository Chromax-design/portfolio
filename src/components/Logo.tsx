import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center text-dark gap-2 dark:text-light">
      <div className="w-11 md:w-12 rounded-full overflow-hidden border-solid border-dark dark:border-gray border-2">
        <Image
          src={"/profile-img.png"}
          alt="Chromax dev"
          className="w-full h-auto rounded-full"
          width={100}
          height={100}
          priority
          sizes="33vw"
        />
      </div>
      <span className=" font-bold text-lg md:text-xl dark:font-semibold">Chroma<span className="uppercase">x</span></span>
    </Link>
  );
};

export default Logo;
