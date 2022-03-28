function BookmarksPH() {
    return (
        <div className="rounded-lg bg-gray-50 dark:bg-[#191f21] flex space-y-1 dark:drop-shadow-sm">
            <img className={`hidden md:inline md:w-48 md:h-30 auto rounded-none rounded-l-md object-cover`} src='https://bit.ly/placeholder-img'></img>
            <div className="p-4 md:text-left space-y-2">
                <h1 className="font-bold leading-1 tracking-wide text-xl text-gray-700 dark:text-gray-300">... </h1>
                <p className="leading-1 tracking-wide text-gray-700 dark:text-gray-300 text-sm">.... </p>
                <div className="flex space-x-2 items-center pt-3">
                    <img src="https://bit.ly/placeholder-img" className="h-4 w-4 rounded-full" />
                    <h1 className="leading-1 tracking-wide text-xs text-gray-700 dark:text-gray-300">....</h1>
                </div>
            </div>
        </div>
    )
}

export default BookmarksPH