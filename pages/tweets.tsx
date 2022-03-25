import Layout from "../layout/Layout"
import { getPosts } from "../lib/network/twitter"
import Container from "../ui/Tweet/container";

export default function Tweets({ tweets }) {

    return (
        <Layout title="Tweets | Darshan Aswath">
            <h1 className="font-bold text-3xl md:text-4xl pb-1">Favourite Tweets</h1>
            <p className="pb-6 font-Quattro text-sm text-gray-600 dark:text-gray-400">Ea consequat ea veniam ex non mollit ad eiusmod ullamco amet. Ea consequat ea veniam ex non mollit ad eiusmod ullamco amet.</p>
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
        "1501014877585825795",
        "1500215037142749188",
        "1507198237014376450",
        "1486892762821951489"
    ]);

    return {
        props: {
            tweets
        }
    };
}