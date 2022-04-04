import Image from "next/image"
import Link from "next/link"
import { trimString } from "../../utils/trimtext"

function FavSpotifyCards({ image, title, artist, link }) {
    return (
        <Link href={link}>
            <a>
                <div className="flex items-center space-x-3">
                    <Image className="rounded-md" src={image} width={50} height={50} alt={title} />
                    <div>
                        <h1 className="font-semibold">{trimString(title, 40)}</h1>
                        <p className="text-xs font-Quattro">{artist}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default FavSpotifyCards