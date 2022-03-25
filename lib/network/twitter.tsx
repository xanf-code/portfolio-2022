/*
    Get Images aswell
*/

import axios from "axios";

export async function getPosts(ID: string[]) {
    const params = {
        "ids": ID.join(','),
        "expansions": "author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id",
        "tweet.fields": "attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text",
        "user.fields": "id,name,username,verified,profile_image_url",
        "media.fields": "duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics"
    }

    const POST_ENDPOINT = 'https://api.twitter.com/2/tweets';

    const { data } = await axios.get(POST_ENDPOINT, {
        params: params,
        headers: {
            'Authorization': `Bearer ${process.env.BEARER_TOKEN}`,
            'Content-Type': 'application/json',
        },
    });

    const tweets = data.data;

    const authors: any = [];

    tweets.forEach((tweets) => {
        authors.push(tweets.author_id)
    })

    async function getAuthorInfo(AuthorID) {
        const params = {
            "ids": AuthorID.join(','),
            "user.fields": "name,profile_image_url,url,username,verified",
        }

        const USERS_ENDPOINT = 'https://api.twitter.com/2/users';

        const { data } = await axios.get(USERS_ENDPOINT, {
            params: params,
            headers: {
                'Authorization': `Bearer ${process.env.BEARER_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });

        return data;
    }

    const authorData = await getAuthorInfo(authors);

    const uniqueTweets: any = new Map(tweets.map(s => [s.author_id, s]));
    const result = authorData.data.map(({ id, ...rest }) => ({ ...rest, ...uniqueTweets.get(id) }));

    if (data) {
        return result;
    } else {
        return [];
    }
}