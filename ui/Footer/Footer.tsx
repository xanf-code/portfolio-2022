import Image from "next/image"

function Footer() {
    return (
        <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8"></hr>
            <h1 className="text-base">Built with NextJS, TailwindCSS.</h1>
            <span className="text-base">/*Todo sh*t ton of work*/</span>
        </footer>
    )
}

export default Footer