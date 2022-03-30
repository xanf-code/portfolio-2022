import Link from "next/link"

function QuotesBox({ randomQuote }) {
    return (
        <Link href='/notes/quotes'>
            <a>
                <div className="bg-[#f5f5f5] dark:bg-gray-800 h-72 rounded-lg relative">
                    <div className='flex p-2 justify-between flex-col'>
                        <p className='absolute top-8 left-4 right-4 text-sm italic text-gray-600 dark:text-gray-400'>
                            {randomQuote.content}
                        </p>
                        <div className="absolute bottom-5 left-4 right-4">
                            <div className='bg-yellow-500 rounded-md hover:bg-yellow-600 transition ease-in-out duration-200'>
                                <h1 className='text-gray-700 p-3 text-center text-xs font-semibold'>More Quotes →</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default QuotesBox