import sortBy from 'sort-by'
import { quotes } from '../../data/quotesdata'
import Layout from '../../layout/Layout'

const Quotes = () => {
    const sortedQuotes = quotes.sort(sortBy("metadata"))

    return (
        <Layout title="Quotes | Darshan Aswath">
            <h1 className="font-bold text-3xl md:text-4xl pb-2">Quotes</h1>
            <p className="pb-2 font-Quattro text-sm text-gray-600 dark:text-gray-300">
                A collection of passages that have stuck with me, and that I like to come back to when I need some inspiration.
            </p>
            <div className='w-full pb-1'>
                <a className='text-right hover:dark:text-blue-500 hover:text-blue-500 transform ease-in duration-200 pb-1 dark:text-gray-400' href="https://github.com/xanf-code/portfolio-2022/tree/main/data/quotesdata.tsx" target="_blank">
                    <h1 className='text-sm font-medium pr-2'>Edit on GitHub</h1>
                </a>
            </div>
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 my-2 pb-5"></hr>
            <div className='md:masonry-2-col'>
                {sortedQuotes.map((quote, i) => (
                    <div className='break-inside' key={i}>
                        <p className='font-normal leading-1 tracking-wider'>{quote.content}</p>
                        <p className='mt-3 mb-3 font-bold text-gray-600 dark:text-gray-300  font-Quattro'>— {quote.metadata}</p>
                        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 my-4"></hr>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Quotes