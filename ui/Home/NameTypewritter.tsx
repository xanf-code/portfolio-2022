import Link from "next/link"

function NameTypewritter() {
    return (
        <div className="flex-1 flex flex-col w-full">
            <div className="flex items-center mb-6">
                <img src="/images/mexd.png" alt="" className="mr-4 sm:mr-8 transform -rotate-6 rounded-lg h-24 w-24" />
                <div>
                    <h1 className="font-bold text-4xl md:text-5xl tracking-tight font-IBMSans">Darshan Aswath</h1>
                    <h2 className="text-stone-700 dark:text-stone-200 text-sm">Software Engineer
                        and maybe an Artist (?).
                    </h2>
                </div>
            </div>
            <p className="text-sm tracking-wider text-justify leading-6">I'm developing myself on learning Software Architecture, Clean Code, Design Patterns, Devops, Designs and all that cliché computer stuff. I enjoy expressing myself through photography, music, drawing and code that's why I created my
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