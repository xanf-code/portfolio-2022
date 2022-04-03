import Image from 'next/image'
import Link from 'next/link'
import dataJSON from '../../local/books.json'

function BooksBox() {

    const recent = dataJSON.recently[0];

    return (
        <Link href='/notes/books'>
            <a>
                <div className=" h-72 rounded-lg relative max-w-full overflow-hidden bg-black">
                    <Image priority className="absolute inset-0 w-full h-full object-cover opacity-40 hover:opacity-30 transition ease-in-out duration-200" src='/images/featured-image.webp' alt='notes-cover' layout="fill" objectFit="cover" />
                    <div className="absolute bottom-5 left-4 right-4 space-y-1">
                        <h1 className='text-white p-3 text-sm font-normal'>Recently read
                            <span className='pl-1 italic font-QuattroBold underline'>
                                {recent.name}
                            </span> 📚</h1>
                        <div className='bg-blue-700 rounded-md hover:bg-blue-800 transition ease-in-out duration-200'>
                            <h1 className='text-white p-3 text-center text-xs font-semibold'>See what I'm reading →</h1>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default BooksBox