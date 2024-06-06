import { FloatingNav } from "@/components/ui/FloatingNav";
import { blogNavItems, socialMedia } from "@/data";
import { Open_Sans } from "next/font/google";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className={OpenSans.className}>
        <FloatingNav navItems={blogNavItems} />
        {children}
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-2 pb-10">
          <p className="text-sm md:font-normal font-light">
            Copyright &copy; {new Date().getFullYear()} Chromax Dev
          </p>
          <div className=" flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className=" w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img
                  src={profile.img}
                  alt="social icon"
                  width={20}
                  height={20}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
