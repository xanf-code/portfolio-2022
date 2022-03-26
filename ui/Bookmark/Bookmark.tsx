export default function Bookmark() {
    return (
        <div>
            <div className="flex space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="dark:text-blue-600" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" ><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"></path></svg>
                <h2 className="uppercase tracking-wide font-bold ">Bookmarks</h2>
            </div>
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 my-2"></hr>
        </div>
    )
}