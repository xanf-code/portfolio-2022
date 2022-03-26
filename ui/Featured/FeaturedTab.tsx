function FeaturedTab() {
    return (
        <div className="py-2">
            <div className="flex space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <h2 className="uppercase tracking-wide font-bold ">Featured</h2>
            </div>
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 my-2"></hr>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-100 h-72 rounded-lg">
                    el1
                </div>
                <div className="bg-gray-100 h-72 rounded-lg">
                    el2
                </div>
                <div className="bg-gray-100 h-72 rounded-lg">
                    el3
                </div>
                <div className="bg-gray-100 h-72 rounded-lg">
                    el4
                </div>
            </div>
        </div>
    )
}

export default FeaturedTab