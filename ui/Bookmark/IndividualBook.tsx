function IndividualBook({ data }) {
    return (
        <div className="rounded-lg bg-gray-50 dark:bg-[#191f21] cursor-pointer flex space-y-1 dark:drop-shadow-sm">
            <img className="hidden md:inline md:w-48 auto rounded-none rounded-l-md object-cover" src={data.meta.image} alt="" width="384" height="512"></img>
            <div className="p-4 md:text-left">
                <h1 className="font-bold leading-1 tracking-wide text-xl text-gray-700 dark:text-gray-300">{data.meta.title} </h1>
                <p className="leading-1 tracking-wide text-gray-700 dark:text-gray-300 text-sm">{data.meta.description} </p>
                <div className="flex space-x-2 items-center pt-3">
                    <img src={data.meta.site.favicon} alt={data.meta.site.name} className="h-4 w-4" />
                    <h1 className="leading-1 tracking-wide text-xs text-gray-700 dark:text-gray-300">{!data.meta.site.name ? "Some Dev" : data.meta.site.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default IndividualBook