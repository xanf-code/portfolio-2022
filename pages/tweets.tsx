import Layout from "../layout/Layout"
import { getPosts } from "../lib/network/twitter"
import Container from "../ui/Tweet/container";

export default function Tweets({ tweets }) {

    console.log(tweets);

    return (
        <Layout title="Tweets | Darshan Aswath">
            <div className='space-y-4'>
                {tweets.map((tweet: any) => {
                    return (
                        <div key={tweet.id}>
                            <Container data={tweet} />
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const tweets = await getPosts([
        "1505668279678824448",
        "1507197787041112069",
        "1499474083058229254",
        "1315710272854806533",
        "1282017541020213248",
        "1507095931023409160"
    ]);

    return {
        props: {
            tweets
        }
    };
}