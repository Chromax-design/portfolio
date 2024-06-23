import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentBlog from "@/components/RecentBlog";
import RecentProjects from "@/components/RecentProjects";
import Nav from "@/components/ui/Nav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        <Nav items={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <RecentBlog />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
