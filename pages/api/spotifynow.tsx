
import type { NextApiRequest, NextApiResponse } from 'next';
import { getLatestSong, getNowPlaying } from '../../lib/network/spotify';

const getLatest = async (res: NextApiResponse) => {
    const lastresponse = await getLatestSong();
    const latest = await lastresponse.json();
    return res.status(200).json({
        isPlaying: false,
        album: latest.items[0].track.album.name,
        albumImageUrl: latest.items[0].track.album.images[0].url,
        artist: latest.items[0].track.artists.map((_artist) => _artist.name).join(', '),
        playedAt: latest.items[0].played_at,
        songUrl: latest.items[0].track.external_urls.spotify,
        title: latest.items[0].track.name
    })

}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await getNowPlaying();

    if (response.status >= 400 || response.status === 204 || response.statusText === 'No Content') {
        const data = await getLatest(res);
        return data;
    }
    else if (response.statusText === "OK" && response.status === 200) {
        const data = await response.json();

        if (data.item === null) {
            const data = await getLatest(res);
            return data;
        }
        const isPlaying = data.is_playing;
        const title = data.item?.name;
        const artist = data.item?.artists.map((_artist) => _artist.name).join(', ');
        const album = data.item?.album.name;
        const albumImageUrl = data.item?.album.images[0].url;
        const songUrl = data.item?.external_urls.spotify;

        return res.status(200).json({
            album,
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title
        });

    } else {
        const data = await getLatest(res);
        return data;
    }
}