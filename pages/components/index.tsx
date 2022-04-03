import Link from 'next/link'
import { allComponents } from '../../.contentlayer/generated'
import Layout from '../../layout/Layout'

const components = ({ component }: any) => {

    return (
        <Layout title="Components | Darshan Aswath">
            {component.map(data => {
                return (
                    <div key={data._id}>
                        <Link href={`/components/${data.slug}`}>
                            <a>
                                <h1>{data.title}</h1>
                            </a>
                        </Link>
                    </div>
                )
            })}
        </Layout>
    )
}

export default components

export async function getStaticProps() {
    const component = allComponents.sort((a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    return { props: { component } }
}