import moment from "moment"
import Image from "next/image"
import { trimString } from "../../utils/trimtext"

function Card({ data }) {
    return (
        <a href={data.songUrl} target='_blank'>
            <div className="flex items-center space-x-2">
                <Image className="rounded-md" src={data.albumImageUrl} width={50} height={50} />
                <div className=" space-y-1 py-2">
                    <h1 className="text-sm leading-3 tracking-wide font-semibold">{trimString(data.title, 40)}</h1>
                    <h1 className="font-Quattro text-xs italic">{trimString(data.artist, 40)}</h1>
                    <h1 className="font-Quattro text-xs italic">{data.isPlaying ? 'Listening on Spotify' : `Listened on Spotify ${moment(data.playedAt).fromNow()}`}</h1>
                </div>
            </div>
        </a>
    )
}

export default Card