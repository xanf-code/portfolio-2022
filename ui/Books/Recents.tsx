import { trimString } from "../../utils/trimtext"

function Recents({ recents }) {
    return (
        <div>
            <div className="flex space-x-2 items-center">
                <svg className="h-6 w-6 dark:text-blue-600" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7H11V12H16V14H9V7Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill="currentColor" /></svg>
                <h2 className="uppercase tracking-wide font-bold ">Recently Read</h2>
            </div >
            <hr className="border-1 border-gray-200 dark:border-gray-800 my-2"></hr>
            <div className="flex overflow-x-auto gap-6 scrollbar-hide max-w-2xl pt-3" >
                {recents.map(book => {
                    return (
                        <a href={book.buy} target='_blank'>
                            <div className="shrink-0">
                                <img className='w-40 h-56 shadow-md' src={book.cover} alt="" />
                                <h1 className="font-medium pt-2 text-lg">{trimString(book.name, 12)}</h1>
                                <p className="text-sm italic text-gray-400">{book.author}</p>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Recents