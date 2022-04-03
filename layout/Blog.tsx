import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import type { PropsWithChildren } from 'react';
import type { Component } from 'contentlayer/generated';
import Layout from './Layout';

export default function BlogLayout({ children, post }: PropsWithChildren<{ post: Component }>) {
    return (
        <Layout
            title={`${post.title}`}
        >
            <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                    {post.title}
                </h1>

                <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
                    <div className="flex items-center">
                        <Image
                            alt="Darshan"
                            height={24}
                            width={24}
                            src="/images/mexd.png"
                            className="rounded-full"
                        />
                        <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                            {'Darshan Aswath / '}
                            {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
                        </p>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0 mr-2">
                        {post.readingTime.text}
                    </p>
                </div>
                <div className="w-full mt-4 prose dark:prose-dark max-w-none">
                    {children}
                </div>
            </article>
        </Layout>
    );
}