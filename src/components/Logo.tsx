import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center text-dark gap-2">
      <div className="w-12 rounded-full overflow-hidden border border-solid border-dark">
        <Image
          src={"/profile-img.jpg"}
          alt="Chromax dev"
          className="w-full h-auto rounded-full"
          width={100}
          height={100}
        />
      </div>
      <span className=" font-bold text-xl">Chromax</span>
    </Link>
  );
};

export default Logo;
