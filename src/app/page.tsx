import Featuredpost from "@/components/Home/Featuredpost";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import RecentPosts from "@/components/Home/RecentPosts";
import { allBlogs } from "contentlayer/generated";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogPosts={allBlogs}/>
      <Featuredpost blogPosts={allBlogs}/>
      <RecentPosts blogPosts={allBlogs} />
    </main>
  );

}
