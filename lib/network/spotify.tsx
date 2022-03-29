const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token: any = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING = `https://api.spotify.com/v1/me/player/currently-playing`;
const GET_TOKEN = `https://accounts.spotify.com/api/token`;
const LATEST_SONG = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

const getAccessToken = async () => {
    const response = await fetch(GET_TOKEN, {
        method: "POST",
        headers: {
            'Authorization': `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'

        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token,
        })
    })
    const data = await response.json();
    return data.access_token;
}

export const getNowPlaying = async () => {
    const token = await getAccessToken();

    const response = await fetch(NOW_PLAYING, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return response;
}

export const getLatestSong = async () => {
    const token = await getAccessToken();

    const response = await fetch(LATEST_SONG, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return response;
}
