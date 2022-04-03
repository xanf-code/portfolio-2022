import Image from 'next/image';
import type { PropsWithChildren } from 'react';
import type { Component } from 'contentlayer/generated';
import Layout from './Layout';
import moment from 'moment';
import { useRouter } from 'next/router'

export default function BlogLayout({ children, post }: PropsWithChildren<{ post: Component }>) {

    const router = useRouter();

    return (
        <Layout title={`${post.title}`}>
            <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto">
                <h1 className="mb-2 text-[1.7em] font-bold tracking-wide leading-8 text-black dark:text-white">
                    {post.title}
                </h1>
                <p className='mb-4 text-gray-500 text-[1.25em] leading-7'>{post.description}</p>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
                    <div className="flex items-center">
                        <Image
                            alt="Darshan"
                            height={24}
                            width={24}
                            src="/images/mexd.webp"
                            className="rounded-full"
                        />
                        <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                            {'Darshan Aswath / '}
                            {moment(post.publishedAt).fromNow()}
                        </p>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0 mr-2">
                        {post.readingTime.text}
                    </p>
                </div>
                <hr className="w-full border-1 border-gray-200 dark:border-gray-800 my-5"></hr>
                <Image
                    priority
                    alt={post.title}
                    width={1800} height={1200}
                    src={`${post.image}`}
                    className="rounded-md"
                    objectFit='cover'
                />
                <div className="w-full prose dark:prose-dark max-w-none">
                    {children}
                </div>
                {/* Back button */}
                <div onClick={() => router.back()} className='mt-6 cursor-pointer hover:text-blue-600 hover:underline text-sm'>
                    cd..
                </div>
            </article>
        </Layout>
    );
}