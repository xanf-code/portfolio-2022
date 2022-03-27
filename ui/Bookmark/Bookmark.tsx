import axios from "axios"
import Link from "next/link";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import { useQuery } from "react-query"
import IndividualBook from "./IndividualBook";


export default function Bookmark() {

    const getBookmarks = async () => {
        const resp = await axios.get(`/api/Bookmarks?page=1&item=4`);
        return resp.data;
    }

    const { data, isLoading, isSuccess } = useQuery('bookmarks', getBookmarks);

    return (
        <div>
            <div className="flex space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="dark:text-blue-600" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" ><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"></path></svg>
                <h2 className="uppercase tracking-wide font-bold ">Bookmarks</h2>
            </div>
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 my-2 pb-2"></hr>

            {/* BOOKMARK ISLOADING AND SUCCESS STATES */}
            <div className="space-y-4">
                {data && data.data.map((book) => {
                    return (
                        <div id={book.response.meta.title}>
                            <IndividualBook data={book.response} url={book.url} />
                        </div>
                    )
                })}
                <Link href="">
                    <a>
                        <h1 className="flex justify-end text-xs pt-2 hover:underline hover:text-blue-500 text-gray-400">Read More..</h1>
                    </a>
                </Link>
            </div>
        </div>
    )
}