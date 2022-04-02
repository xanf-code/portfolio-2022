import Image from "next/image"
import Link from "next/link"

function FavSpotifyCards({ image, title, artist, link }) {
    return (
        <Link href={link}>
            <a>
                <div className="flex items-center space-x-3">
                    <Image className="rounded-md" src={image} width={50} height={50} alt={title} />
                    <div>
                        <h1 className="font-semibold">{title}</h1>
                        <p className="text-xs font-Quattro">{artist}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default FavSpotifyCards