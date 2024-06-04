import { FiEdit } from "react-icons/fi";

const postSchema = {
  name: "post",
  title: "Posts",
  type: "document",
  icon: FiEdit,
  fields: [
    {
      name: "title",
      title: "Post Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "image",
      title: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "content",
      title: "Post Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "desc",
      title: "Description",
      type: "string",
    },
  ],
};

export default postSchema;