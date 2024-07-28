import { BlogPostTypes } from "@/data/types"

const RecentPosts = ({blogPosts}: {blogPosts: BlogPostTypes[]}) => {
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-4xl">
        recent post
      </h2>
    </section>
  )
}

export default RecentPosts