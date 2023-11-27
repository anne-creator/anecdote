// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "date",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    author: {
      type: "string",
      required: true
    },
    authorImg: {
      type: "string",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" }
    },
    image: {
      type: "string"
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/blog\/?/, "")
    }
  }
}));
var Help = defineDocumentType(() => ({
  name: "Help",
  filePathPattern: `help/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    updatedAt: {
      type: "date",
      required: true
    },
    summary: {
      type: "string",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/help\/?/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Help]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-L5CA7MTR.mjs.map
