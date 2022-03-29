
import type { NextApiRequest, NextApiResponse } from 'next';
import { getLatestSong, getNowPlaying } from '../../lib/network/spotify';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await getNowPlaying();
    const lastresponse = await getLatestSong();

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ isPlaying: false });
    }

    const song = await response.json();
    const latest = await lastresponse.json();

    if (song.item === null) {
        return res.status(200).json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=60, stale-while-revalidate=30'
    );

    if (isPlaying) {
        return res.status(200).json({
            album,
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title
        });
    } else {
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
}