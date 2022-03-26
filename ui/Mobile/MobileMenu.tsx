import cn from 'classnames';
import Link from 'next/link';
import useDelayedRender from 'use-delayed-render';
import { useState, useEffect } from 'react';
import styles from '../../styles/mobile-menu.module.css';

export default function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
        isMenuOpen,
        {
            enterDelay: 20,
            exitDelay: 300
        }
    );

    function toggleMenu() {
        if (isMenuOpen) {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
        } else {
            setIsMenuOpen(true);
            document.body.style.overflow = 'hidden';
        }
    }

    useEffect(() => {
        return function cleanup() {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <>
            <button
                className={cn(styles.burger, 'visible md:hidden')}
                aria-label="Toggle menu"
                type="button"
                onClick={toggleMenu}
            >
                <MenuIcon data-hide={isMenuOpen} />
                <CrossIcon data-hide={!isMenuOpen} />
            </button>
            {isMenuMounted && (
                <ul
                    className={cn(
                        styles.menu,
                        'flex flex-col absolute bg-[#fcfcfc] dark:bg-[#161616]',
                        isMenuRendered && styles.menuRendered
                    )}
                >
                    <li
                        className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                        style={{ transitionDelay: '150ms' }}
                    >

                        <div className='flex space-x-4 pb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z" /><path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z" fill="currentColor" /></svg>
                            <Link href="/">
                                <a className="flex w-auto text-base">Home</a>
                            </Link>
                        </div>
                    </li>
                    <li
                        className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                        style={{ transitionDelay: '175ms' }}
                    >
                        <div className='flex space-x-4 pb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z" /><path d="M9.973 18h4.054c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM14 20h-4v1h4v-1zm-8.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15zM13 10.004h2.5l-4.5 6v-4H8.5L13 6v4.005z" fill="currentColor" /></svg>
                            <Link href="/projects">
                                <a className="flex w-auto text-base">Projects</a>
                            </Link>
                        </div>
                    </li>
                    <li
                        className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                        style={{ transitionDelay: '200ms' }}
                    >
                        <div className='flex space-x-4 pb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z" /><path d="M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z" fill="currentColor" /></svg>
                            <Link href="/components">
                                <a className="flex w-auto text-base">Components</a>
                            </Link>
                        </div>
                    </li>
                    <li
                        className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                        style={{ transitionDelay: '250ms' }}
                    >
                        <div className='flex space-x-4 pb-4 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z" /><path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z" fill='currentColor' /></svg>
                            <Link href="/tweets">
                                <a className="flex w-auto text-base">Tweets</a>
                            </Link>
                        </div>
                    </li>
                    <li
                        className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
                        style={{ transitionDelay: '275ms' }}
                    >
                        <div className='flex space-x-4 pb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z" fill='currentColor' /></svg>
                            <Link href="/uses">
                                <a className="flex w-auto text-base">Uses</a>
                            </Link>
                        </div>
                    </li>
                </ul>
            )}
        </>
    );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
    return (
        <svg
            className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                d="M2.5 7.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.5 12.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
    return (
        <svg
            className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
            {...props}
        >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
        </svg>
    );
}