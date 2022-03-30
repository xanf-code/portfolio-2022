import { defineDocumentType, makeSource } from "contentlayer/source-files";

const computedFields: any = {
    slug: {
        type: "string",
        resolve: (doc: { _raw: { sourceFileName: string; }; }) => doc._raw.sourceFileName.replace(/\.md/, ""),
    },
};

const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.md`,
    contentType: "markdown",
    fields: {
        title: { type: "string", required: true },
        date: { type: "string", required: true },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: "posts",
    documentTypes: [Post],
});