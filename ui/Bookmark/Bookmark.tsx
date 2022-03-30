import axios from "axios"
import Link from "next/link";
import { useQuery } from "react-query"
import BookmarksPH from "../PlaceHolder/BookmarksPH";
import IndividualBook from "./IndividualBook";


const getBookmarks = async () => {
    const resp = await axios.get(`/api/Bookmarks?page=1&item=3`);
    return resp.data;
}

export default function Bookmark({ bookmarks }: any) {

    const { data, isLoading, isError } = useQuery('bookmarks', getBookmarks, { initialData: bookmarks })

    return (
        <div>
            <div className="flex space-x-2 items-center py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="dark:text-blue-600" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" ><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"></path></svg>
                <h2 className="uppercase tracking-wide font-bold ">Bookmarks</h2>
            </div>
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 pb-4"></hr>

            {/* BOOKMARK ISLOADING AND SUCCESS STATES */}
            {isLoading || isError ?
                <div className="flex flex-col space-y-4">
                    <BookmarksPH />
                    <BookmarksPH />
                    <BookmarksPH />
                </div> :
                <div className="space-y-4">
                    {data && data.data.map((book) => {
                        return (
                            <div key={book.id}>
                                <IndividualBook data={book.response} url={book.url} tag={book.tag} />
                            </div>
                        )
                    })}
                    <Link href="">
                        <a>
                            <h1 className="flex justify-end text-xs pt-2 hover:underline hover:text-blue-500 text-gray-400">Read More..</h1>
                        </a>
                    </Link>
                </div>
            }
        </div>
    )
}

export async function getServerSideProps() {
    const bookmarks = await getBookmarks()
    return { props: { bookmarks } }
}