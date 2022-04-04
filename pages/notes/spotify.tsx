import axios from "axios"
import { useQuery } from "react-query";
import Layout from "../../layout/Layout"
import FavSpotifyCards from "../../ui/Spotify/FavSpotifyCards";

let url: string;

const env = process.env.NODE_ENV;

if (env == "development") {
    url = 'http://localhost:3000/'
} else if (env == "production") {
    url = 'https://portfolio2022dem.vercel.app/'
}

const getPodcasts = async () => {
    const { data } = await axios.get(`${url}api/spotifypodcasts`);
    return data;
}
const getMusic = async () => {
    const { data } = await axios.get(`${url}api/spotifygetplaylist`);
    return data;
}

export default function spotify(props: any) {

    const podcastQuery = useQuery('podcast', getPodcasts, { initialData: props.podcast });

    const musicQuery = useQuery('music', getMusic, { initialData: props.music });

    return (
        <Layout title="Spotify | Darshan Aswath">
            <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 space-y-6">
                <div>
                    <h1 className="font-bold text-3xl md:text-4xl pb-2 text-left">Podcasts & Music</h1>
                    <p className="pb-2 font-Quattro text-sm text-gray-600 dark:text-gray-300">
                        Curated list of intersting Podcasts and lovely Songs i listen to on a daily basis on Spotify, updated daily.
                    </p>
                    <hr className="w-full border-1 border-gray-200 dark:border-gray-800 my-2 pb-2"></hr>
                    <h1 className="font-bold text-lg pb-3 text-left text-gray-600 dark:text-gray-300 pl-3">Podcasts</h1>
                    {podcastQuery.data?.map(podcast => {
                        return (
                            <div className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-3 transition ease-in-out duration-200" key={podcast.title}>
                                <FavSpotifyCards image={podcast.albumImageUrl} link={podcast.Url} title={podcast.title} artist={podcast.artist} />
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h1 className="font-bold text-lg pb-3 text-left text-gray-600 dark:text-gray-300 pl-3">Music</h1>
                    {musicQuery.data?.map(podcast => {
                        return (
                            <div className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-3 transition ease-in-out duration-200" key={podcast.title}>
                                <FavSpotifyCards image={podcast.albumImageUrl} link={podcast.Url} title={podcast.title} artist={podcast.artist} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const podcastData = await getPodcasts();
    const musicData = await getMusic();

    return {
        props: {
            music: musicData,
            podcast: podcastData
        }
    }
}