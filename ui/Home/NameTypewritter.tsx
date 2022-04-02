import Link from "next/link"

function NameTypewritter() {
    return (
        <div className="flex-1 flex flex-col w-full">
            <div className="relative flex items-center mb-6">
                <div className="absolute ml-1 md:ml-0 mr-4 sm:mr-8 transform -rotate-6 rounded-lg h-24 w-24 dark:bg-gradient-to-r dark:from-pink-700 dark:to-purple-600 dark:opacity-75 dark:blur-lg" />
                <img src="/images/mexd.png" alt="darshan-aswath" className="ml-1 md:ml-0 mr-4 sm:mr-8 transform -rotate-6 rounded-lg h-24 w-24" />
                <div>
                    <h1 className="font-bold text-4xl md:text-5xl tracking-tight font-IBMSans">Darshan Aswath</h1>
                    <h2 className="text-stone-700 dark:text-stone-200 text-sm">
                        <Link href='/projects'>
                            <a>
                                <span className="hover:underline pr-1">Engineer</span>
                            </a>
                        </Link>
                        and maybe an <Link href='/components'>
                            <a>
                                <span className="hover:underline">Artist (?)</span>
                            </a>
                        </Link>.
                    </h2>
                </div>
            </div>
            <p className="text-sm tracking-wide text-justify leading-6">I'm developing myself on learning Software Architecture, Clean Code, Design Patterns, Devops, Designs and all that cliché computer stuff. I enjoy expressing myself through designs and code that's why I created my
                <Link href='/components'>
                    <a>
                        <span className="ml-1 hover:underline underline-offset-2 bg-gradient-to-r from-red-200 via-amber-400 to-red-400 bg-200% rounded-sm py-0.5 px-1.5 transition-all delay-200 duration-1.4 ease-quad-long bg-n-top text-black">/component</span>
                    </a>
                </Link> for experimental projects.
            </p>
        </div>
    )
}

export default NameTypewritter