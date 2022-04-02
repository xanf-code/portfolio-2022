import type { NextApiRequest, NextApiResponse } from 'next';
import { getPodcasts } from '../../lib/network/spotify';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await getPodcasts();
    const { tracks } = await response.json();

    const track = tracks.items.reverse().slice(0, 10).map((track) => ({
        albumImageUrl: track.track.album.images[0].url,
        artist: track.track.artists.map((_artist) => _artist.name).join(', '),
        Url: track.track.external_urls.spotify,
        title: track.track.name
    }));

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=43200'
    );

    return res.status(200).json(track);
}