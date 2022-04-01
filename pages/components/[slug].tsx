import { allComponents } from '../../.contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Layout from '../../layout/Layout'
import { NextPage } from 'next'

const IndividualComponent: NextPage = ({ resource }: any) => {
    const MDXContent = useMDXComponent(resource.body.code)
    return (
        <Layout title={resource.title}>
            <MDXContent />
        </Layout>
    )
}

export default IndividualComponent

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
    const resource = allComponents.find((resource) => resource.slug === params.slug)

    return {
        props: { resource }
    }
}