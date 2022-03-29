import { trimString } from "../../utils/trimtext"

function IndividualBook({ data, url, tag }) {

    return (
        <a href={url} target="_blank">
            <div className="rounded-lg bg-gray-50 dark:bg-[#191f21] flex space-y-1 dark:drop-shadow-sm">
                <img className="hidden md:inline md:w-48 md:h-30 auto rounded-none rounded-l-md object-cover" src={data.meta.image} alt={data.meta.title}></img>
                <div className="p-4 md:text-left space-y-2 pt-2">
                    <div className="bg-gray-100 dark:bg-gray-800 inline-block rounded-md px-1">
                        <h1 className="leading-1 tracking-wide text-xs text-gray-700 dark:text-gray-300 italic p-1">{tag}</h1>
                    </div>
                    <h1 className="font-bold leading-1 tracking-wide text-xl text-gray-700 dark:text-gray-300">{trimString(data.meta.title, 42)} </h1>
                    <p className="leading-1 tracking-wide text-gray-700 dark:text-gray-300 text-sm">{trimString(data.meta.description, 120)} </p>
                    <div className="flex space-x-2 items-center pt-3">
                        <img src={data.meta.site.favicon} alt={data.meta.site.name} className="h-4 w-4" />
                        <h1 className="leading-1 tracking-wide text-xs text-gray-700 dark:text-gray-300">{!data.meta.site.name ? "Some Dev" : data.meta.site.name}</h1>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default IndividualBook