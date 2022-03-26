import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center max-w-2xl mx-auto w-full mb-8">
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8"></hr>
            <div className="flex-col md:flex-row md:flex justify-between px-8 space-y-6 md:space-y-0">
                <div>
                    <h1 className="text-sm font-semibold tracking-wider uppercase">General</h1>
                    <Linker href='/' text="Home" />
                    <Linker href='/projects' text="Projects" />
                    <Linker href='/uses' text="Uses" />
                    <Linker href='/words' text="Words" />
                </div>
                <div>
                    <h1 className="text-sm font-semibold tracking-wider uppercase">Specific</h1>
                    <Linker href='/components' text="Components" />
                    <Linker href='/changelog' text="Changelog" />
                    <Linker href='/resume' text="Resume" />
                    <Linker href='/spotify' text="Spotify" />
                </div>
                <div>
                    <a href="https://twitter.com/darshanaswath__" target="_blank">
                        <div className="flex space-x-2 items-center text-center hover:underline pb-3">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path opacity="0.25" d="M20.9999 7.5C21.4999 15 15.9999 21 8.99995 21C6.58804 21 4.17613 20.6768 2.28388 19.7706C1.85051 19.5631 2.0199 18.985 2.49936 18.9532C4.82944 18.7987 6.75765 18.2423 7.99995 17C11.0001 14 11.5 13 12.2646 9.02396C12.0933 8.54804 11.9999 8.03492 11.9999 7.5C11.9999 5.01472 14.0147 3 16.4999 3C18.0181 3 19.3607 3.75182 20.1757 4.90346L21.8929 4.65815C22.3207 4.59703 22.6194 5.07087 22.3796 5.43047L20.9999 7.5Z" fill="var(--colors-gray10)"></path><path d="M7.99998 16.9999C2.58358 15.1944 1.64928 8.49939 2.62226 5.00708C2.73651 4.59701 3.26964 4.59488 3.48453 4.96234C5.14601 7.80359 8.30518 9.38991 12.2646 9.02385C18.5 9.02385 17 19.9999 7.99998 16.9999Z" fill="var(--colors-gray10)"></path></svg>
                            <h1 className="text-sm font-medium text-gray-500 dark:text-gray-400">Twitter</h1>
                        </div>
                    </a>
                    <a href="https://github.com/xanf-code" target="_blank">
                        <div className="flex space-x-2 items-center text-center hover:underline pb-3">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path></svg>
                            <h1 className="text-sm font-medium text-gray-500 dark:text-gray-400">Github</h1>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/darshanaswath/" target='_blank'>
                        <div className="flex space-x-2 items-center hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 23"><path fill="currentColor" d="M21.6,0 L0.988235294,0 C0.423529412,0 0,0.418546713 0,0.976608997 L0,21.4853979 C0,21.9039446 0.423529412,22.3224913 0.988235294,22.3224913 L21.7411765,22.3224913 C22.3058824,22.3224913 22.7294118,21.9039446 22.7294118,21.3458824 L22.7294118,0.976608997 C22.5882353,0.418546713 22.1647059,0 21.6,0 Z M6.63529412,18.9741176 L3.38823529,18.9741176 L3.38823529,8.37093426 L6.77647059,8.37093426 L6.77647059,18.9741176 L6.63529412,18.9741176 Z M5.08235294,6.97577855 C3.95294118,6.97577855 3.10588235,5.99916955 3.10588235,5.02256055 C3.10588235,3.90643599 3.95294118,3.06934256 5.08235294,3.06934256 C6.21176471,3.06934256 7.05882353,3.90643599 7.05882353,5.02256055 C6.91764706,5.99916955 6.07058824,6.97577855 5.08235294,6.97577855 Z M19.2,18.9741176 L15.8117647,18.9741176 L15.8117647,13.8120415 C15.8117647,12.5564014 15.8117647,11.0217301 14.1176471,11.0217301 C12.4235294,11.0217301 12.1411765,12.4168858 12.1411765,13.8120415 L12.1411765,19.1136332 L8.75294118,19.1136332 L8.75294118,8.37093426 L12,8.37093426 L12,9.76608997 C12.4235294,8.92899654 13.5529412,8.09190311 15.1058824,8.09190311 C18.4941176,8.09190311 19.0588235,10.3241522 19.0588235,13.1144637 L19.0588235,18.9741176 L19.2,18.9741176 Z"></path></svg>
                            <h1 className="text-sm font-medium text-gray-500 dark:text-gray-400 pt-1.5">LinkedIn</h1>
                        </div>
                    </a>

                </div>
            </div>
            <h1 className="text-sm font-Quattro pt-8 md:pt-6">© 2022 Darshan</h1>
        </footer>
    )
}


function Linker({ text, href }) {
    return (
        <Link href={href}>
            <a>
                <h1 className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:underline pt-4">{text}</h1>
            </a>
        </Link>
    )
}