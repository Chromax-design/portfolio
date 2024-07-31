import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center text-dark gap-2 dark:text-light">
      <div className="w-11 md:w-12 rounded-full overflow-hidden border-solid border-dark dark:border-light border">
        <Image
          src={"/profile-img.jpg"}
          alt="Chromax dev"
          className="w-full h-auto rounded-full"
          width={100}
          height={100}
        />
      </div>
      <span className=" font-bold text-lg md:text-xl dark:font-semibold">Chromax</span>
    </Link>
  );
};

export default Logo;
