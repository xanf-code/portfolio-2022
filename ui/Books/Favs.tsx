import { trimString } from "../../utils/trimtext"

function Favs({ favs }) {
    return (
        <div className="mt-6">
            <div className="flex space-x-2 items-center">
                <svg className="h-6 w-6 dark:text-blue-600" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 20H17.1717L12.7072 15.5354C12.3166 15.1449 11.6835 15.1449 11.2929 15.5354L6.82843 20L5 20V7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34314 19 7V20ZM17 7C17 6.44772 16.5523 6 16 6H8C7.44772 6 7 6.44772 7 7V17L9.87873 14.1212C11.0503 12.9497 12.9498 12.9497 14.1214 14.1212L17 16.9999V7Z" fill="currentColor" /></svg>
                <h2 className="uppercase tracking-wide font-bold ">favorites</h2>
            </div >
            <hr className="border-1 border-gray-200 dark:border-gray-800 my-2"></hr>
            <div className="gap-6 grid grid-cols-2 md:grid-cols-4 pt-3" >
                {favs.map(book => {
                    return (
                        <a href={book.buy} target='_blank'>
                            <div>
                                <img className='w-40 h-56 shadow-md' src={book.cover} alt="" />
                                <h1 className="font-medium pt-2 text-lg">{trimString(book.name, 15)}</h1>
                                <p className="text-sm italic text-gray-400">{book.author}</p>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Favs