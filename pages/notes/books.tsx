import bookJSON from '../../local/books.json'
import Layout from '../../layout/Layout';
import Favs from '../../ui/Books/Favs';
import Recents from '../../ui/Books/Recents';
import { NextPage } from 'next';

const books: NextPage = () => {
    return (
        <Layout title='Books | Darshan Aswath'>
            <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
                <h1 className="font-bold text-3xl md:text-4xl pb-2">Books</h1>
                <p className="pb-2 font-Quattro text-sm text-gray-600 dark:text-gray-300">
                    A few excellent reads that have shaped who I am, how I work, or how I think about the world around me.
                </p>
                <div className='w-full pb-1'>
                    <a className='text-right hover:dark:text-blue-500 hover:text-blue-500 transform ease-in duration-200 pb-1 dark:text-gray-400' href="https://github.com/xanf-code/portfolio-2022/tree/main/local/books.json" target="_blank">
                        <h1 className='text-sm font-medium pr-2'>Edit on GitHub</h1>
                    </a>
                </div>
                <hr className="w-full border-1 border-gray-200 dark:border-gray-800 my-2 pb-5"></hr>
                <Recents recents={bookJSON.recently} />
                <Favs favs={bookJSON.favourites} />
            </div>
        </Layout>
    )
}

export default books