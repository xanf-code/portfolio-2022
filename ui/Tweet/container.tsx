import Image from "next/image"
import moment from "moment"

import image from '../../public/images/Badge.svg.png'

function kFormatter(num: number) {
    return Math.abs(num) > 999 ? Math.sign(num) * (+(Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}

function Container({ data }) {

    const formattedText = data.text.replace(/https:\/\/[\n\S]+/g, '');

    return (
        <div className="border-2 p-4 border-gray-200 dark:border-gray-900 rounded-lg bg-gray-100 dark:bg-black">
            {/* Header */}
            <a href={`https://twitter.com/${data.username}`} target="_blank">
                <div className="flex justify-between items-center">
                    <div className="flex flex-row items-center">
                        <div className="relative w-12 h-12">
                            <Image className="rounded-full border border-gray-100 shadow-sm" height={50} width={50} src={data.profile_image_url} />
                        </div>
                        <div className="flex flex-col px-4">
                            <div className="flex items-center space-x-1.5">
                                <h1 className=" font-QuattroBold text-base">{data.name}</h1>
                                {data.verified && <div className="w-4 h-4">
                                    <Image src={image} width={0} height={0} />
                                </div>}
                            </div>
                            <span className="text-gray-500 font-Quattro text-sm dark:text-gray-400">@{data.username}</span>
                        </div>
                    </div>
                    <h1 className="text-gray-500 font-Quattro text-sm dark:text-gray-400 pr-2">
                        {moment(data.created_at).fromNow()}
                    </h1>
                </div>
            </a>

            {/* Content */}
            <p className="mt-4 mb-1 leading-normal whitespace-pre-wrap text-gray-700 dark:text-gray-300 font-Quattro">{formattedText}</p>

            {/* Footer */}
            <div className="flex justify-between py-5 pr-4 items-center">
                <a href={`https://twitter.com/${data.username}/status/${data.id}`} target="_blank">
                    <div className="flex space-x-6">
                        <div className="flex space-x-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0H24V24H0z" /><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z" fill="currentColor" /></svg>
                            <h1 className="text-gray-900 dark:text-gray-300 font-Quattro text-sm">{kFormatter(data.public_metrics.like_count)}</h1>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z" /><path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z" fill="currentColor" /></svg>
                            <h1 className="text-gray-900 dark:text-gray-300 font-Quattro text-sm">{kFormatter(data.public_metrics.retweet_count)}</h1>
                        </div>
                    </div>
                </a>
                <a href={`https://twitter.com/${data.username}/status/${data.id}`} target="_blank">
                    <span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" fill="currentColor" /><path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" fill="currentColor" /><path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" fill="currentColor" /></svg>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Container