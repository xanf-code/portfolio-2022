import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';

import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const computedFields: ComputedFields = {
    readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
    wordCount: {
        type: 'number',
        resolve: (doc) => doc.body.raw.split(/\s+/gu).length
    },
    tweetIds: {
        type: 'json',
        resolve: (doc) => {
            const tweetMatches = doc.body.raw.match(
                /<StaticTweet\sid="[0-9]+"\s\/>/g
            );
            const tweetIDs = tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]);
            return tweetIDs ?? [];
        }
    },
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
};

const Projects = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: 'projects/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        publishedAt: { type: 'string', required: true },
        description: { type: 'string', required: true },
        image: { type: 'string', required: true }
    },
    computedFields
}));

const Components = defineDocumentType(() => ({
    name: 'Component',
    filePathPattern: 'components/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        image: { type: 'string', required: true },
        publishedAt: { type: 'string', required: true },
        tag: { type: 'string', required: true }
    },
    computedFields
}));

const OtherPage = defineDocumentType(() => ({
    name: 'OtherPage',
    filePathPattern: '*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true }
    },
    computedFields
}));

const contentLayerConfig = makeSource({
    contentDirPath: 'data',
    documentTypes: [Projects, Components, OtherPage],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            rehypeCodeTitles,
            rehypePrism,
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ['anchor']
                    }
                }
            ]
        ]
    }
});

export default contentLayerConfig;