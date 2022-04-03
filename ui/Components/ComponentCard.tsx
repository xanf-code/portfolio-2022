import Link from "next/link"

function ComponentCard({ data }) {
    return (
        <div>
            <Link href={`/components/${data.slug}`}>
                <a>
                    <h1>{data.title}</h1>
                </a>
            </Link>
            <p>{data.tag}</p>
        </div>
    )
}

export default ComponentCard