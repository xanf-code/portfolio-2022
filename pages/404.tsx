import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';


export default function NotFound() {

    const [fact, setFact] = useState("");

    useEffect(() => {
        axios.get('https://uselessfacts.jsph.pl/random.json?language=en').then(response => setFact(response.data.text));
    }, [])

    return (
        <Layout title="404">
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    404 - This page was not found. You can stay and enjoy this fact instead.
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    {fact}
                </p>
                <Link href="/">
                    <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
                        Return Home
                    </a>
                </Link>
            </div>
        </Layout>
    );
}