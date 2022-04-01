import axios from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import { useQuery } from 'react-query';
import Layout from '../layout/Layout';

const fetchQuotes = async () => {
    const { data } = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
    return data.text;
}

const NotFound: NextPage = () => {

    const { data, isLoading, isError, isSuccess } = useQuery('quotes', fetchQuotes)

    const quoteData = () => {
        if (isLoading) {
            return (
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Gathering fact...
                </p>
            )
        }

        if (isError) {
            return (<p className="text-gray-600 dark:text-gray-400 mb-8">
                oops, something went wrong!
            </p>)
        }
        if (isSuccess) {
            return (<p className="text-gray-600 dark:text-gray-400 mb-8">
                {data}
            </p>)
        }
    }

    return (
        <Layout title="404">
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    404 - This page was not found. You can stay and enjoy this fact instead.
                </h1>
                {quoteData()}
                <Link href="/">
                    <a className="p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
                        Return Home
                    </a>
                </Link>
            </div>
        </Layout>
    );
}

export default NotFound