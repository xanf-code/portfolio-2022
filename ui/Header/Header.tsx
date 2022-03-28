import { useTheme } from "next-themes"
import { useState, useEffect } from "react";
import NextLink from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import MobileMenu from "../Mobile/MobileMenu";

function NavItem({ href, text }) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <NextLink href={href}>
            <a
                className={cn(
                    isActive
                        ? 'font-semibold text-gray-800 dark:text-gray-200'
                        : 'font-normal text-gray-600 dark:text-gray-400',
                    'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
                )}
            >
                <span className="capsize">{text}</span>
            </a>
        </NextLink>
    );
}

function Header() {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    function playSound() {
        new Audio("/static/Blow.mp3").play()
    }

    useEffect(() => {
        setMounted(true);
    }, [])

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <button onClick={() => {
                    setTheme('light')
                    playSound()
                }} aria-label="Toggle Dark Mode" type="button" className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all">🌤</button>
            );
        } else {
            return (
                <button onClick={() => {
                    setTheme('dark')
                    playSound()
                }} aria-label="Toggle Dark Mode" type="button" className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all">🌚</button>
            );
        }
    }

    return (
        <div className="flex flex-col justify-center px-8">
            <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900  bg-opacity-60 dark:text-gray-100">
                <div className="ml-[-0.60rem]">
                    <MobileMenu />
                    <NavItem href="/" text="Home" />
                    <NavItem href="/projects" text="Projects" />
                    <NavItem href="/components" text="Components" />
                    <NavItem href="/tweets" text="Tweets" />
                    <NavItem href="/notebook" text="Notebook" />
                </div>
                <div>
                    {renderThemeChanger()}
                </div>
            </nav>
        </div>
    )
}

export default Header