import { allComponents } from '../../.contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import BlogLayout from '../../layout/Blog'
import { Component } from '../../.contentlayer/generated'
import components from '../../ui/MDX/components'

export default function IndividualComponent({ resource }: { resource: Component }) {
    const MDXContent = useMDXComponent(resource.body.code)

    return (
        <BlogLayout post={resource}>
            <MDXContent components={
                {
                    ...components,
                } as any
            } />
        </BlogLayout>
    )
}

export async function getStaticPaths() {
    return {
        paths: allComponents.map((component) => ({
            params: {
                slug: component.slug,
            }
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const resource: any = allComponents.find((resource) => resource.slug === params.slug)
    return {
        props: { resource, }
    }
}