import Image from "next/image"

function Footer() {
    return (
        <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
            <hr class="w-full border-1 border-gray-200 dark:border-gray-800 mb-8"></hr>
            <a
                className="flex items-center justify-center gap-2"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </a>
        </footer>
    )
}

export default Footer