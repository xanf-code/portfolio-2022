function BookmarksPH() {
    return (
        <div className="rounded-lg bg-gray-50 dark:bg-[#191f21] flex space-y-1 dark:drop-shadow-sm">
            <img className='hidden md:inline md:w-48 md:h-30 auto rounded-none rounded-l-md object-cover animate-pulse' src='https://bit.ly/placeholder-img' alt="placeholder"></img>
            <div className="p-4 md:text-left space-y-2 pt-2">
                <div className="bg-gray-100 dark:bg-gray-800 inline-block rounded-md px-1 w-96 h-6 animate-pulse"> </div>
                <div className="bg-gray-100 dark:bg-gray-800 inline-block rounded-md px-1 w-72 h-3 animate-pulse"> </div>
                <div className="bg-gray-100 dark:bg-gray-800 inline-block rounded-md px-1 w-72 h-3 animate-pulse"> </div>
                <div className="flex space-x-2 items-center pt-3">
                    <img src="https://bit.ly/placeholder-img" className="h-4 w-4 rounded-full animate-pulse" alt="placeholder-child" />
                    <div className="bg-gray-100 dark:bg-gray-800 inline-block rounded-md px-1 w-10 h-3 animate-pulse"> </div>
                </div>
            </div>
        </div>
    )
}

export default BookmarksPH