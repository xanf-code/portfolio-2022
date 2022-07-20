import { NextPage } from "next";
import { IDS } from "../data/tweets";
import Layout from "../layout/Layout";
import { getPosts } from "../lib/network/twitter";
import Container from "../ui/Tweet/container";

const Tweets: NextPage = ({ tweets }: any) => {
  return (
    <Layout title="Tweets | Darshan Aswath">
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <h1 className="font-bold text-3xl md:text-4xl pb-2">
          Favourite Tweets
        </h1>
        <p className="pb-2 font-Quattro text-sm text-gray-600 dark:text-gray-300">
          As i spend most of my time on twitter, here are the collection of some
          of my favourite tweets that inspire me :)
        </p>
        <div className="w-full pb-1">
          <a
            className="text-right hover:dark:text-blue-500 hover:text-blue-500 transform ease-in duration-200 pb-1 dark:text-gray-400"
            href="https://github.com/xanf-code/portfolio-2022/tree/main/data/tweets.tsx"
            target="_blank"
          >
            <h1 className="text-sm font-medium pr-2">Edit on GitHub</h1>
          </a>
        </div>
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 my-2 pb-5"></hr>
        <div className="space-y-6">
          {tweets.map((tweet: any) => {
            return (
              <div key={tweet.id}>
                <Container data={tweet} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Tweets;

export async function getServerSideProps() {
  const tweets = await getPosts(IDS);
  return {
    props: {
      tweets,
    },
  };
}
