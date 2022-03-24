import Footer from "../ui/Footer/Footer"
import Header from "../ui/Header/Header"
import Head from 'next/head'

function Layout({ children, title }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <main className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-black">
                <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
                    {children}
                </div >
                <Footer />
            </main >
        </div>
    )
}

export default Layout