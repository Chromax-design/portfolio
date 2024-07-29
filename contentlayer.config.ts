import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import Sluggger from "github-slugger"

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image: {
      type: "image",
    },
    isPublished: {
      type: "boolean",
      default: true,
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc:{
      type: 'json',
      resolve: async (doc)=> {
        const slugger = new Sluggger()
        const headingsRegex = /\n(#{1,6})\s+(.+)/g;
        const headingsArray = Array.from(doc.body.raw.matchAll(headingsRegex)).map((match)=>{
          const flag = match[1]
          const content = match[2]
          return {
            level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
            text : content,
            slug: content ? slugger.slug(content) : undefined
          }
        })
        return headingsArray
      }
    }
  },
}));

const options = {
  theme: "github-dark",
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutoLinkHeadings, { behaviour: "append" }],
      [rehypePrettyCode, options],
    ],
  },
});
