import Image from "next/image"
import Link from "next/link"

function ComponentsBox({ image, title, svg, description, href }) {
    return (
        <Link href={href}>
            <a>
                <div className=" h-72 rounded-lg relative max-w-full overflow-hidden bg-black">
                    <Image priority className="absolute inset-0 w-full h-full object-cover opacity-30 hover:opacity-20 transition ease-in-out duration-200" src={image} layout="fill" objectFit="cover" />
                    <div className="absolute bottom-5 left-4 right-4 space-y-1">
                        <div className="flex items-center space-x-2">
                            {svg}
                            <h1 className="text-2xl font-bold text-white">{title}</h1>
                        </div>
                        <p className="text-gray-300 tracking-wider">{description}</p>
                    </div>
                </div>
            </a>
        </Link >
    )
}

export default ComponentsBox