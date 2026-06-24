import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import content from 'data/content.json';
import { Toggle } from "components/02.molecules";
import { H5 } from "components/01.atoms";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useTheme } from "styles/ThemeContext";

import USflag from 'assets/US-flag.webp';
import ESflag from 'assets/ES-flag.webp';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(
        () => window.matchMedia(query).matches
    );
    useEffect(() => {
        const mq = window.matchMedia(query);
        const handler = (e) => setMatches(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, [query]);
    return matches;
};

const navLinks = [
    { key: "header.home", href: "#home" },
    { key: "header.about", href: "#aboutme" },
    { key: "header.languages", href: "#languages" },
    { key: "header.portfolio", href: "#portfolio" },
    { key: "header.research", href: "#research" },
    { key: "header.awards", href: "#awards" },
    { key: "header.hobbies", href: "#hobbies" },
];

const Header = () => {
    const [t, i18n] = useTranslation("global");
    const { id, setTheme, language, setLanguage } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 1400px)');

    useEffect(() => {
        if (language && i18n.language !== language) {
            i18n.changeLanguage(language);
        }
    }, [language, i18n]);

    useEffect(() => {
        if (isDesktop) setIsOpen(false);
    }, [isDesktop]);

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    };

    const handleLinkClick = () => {
        if (isOpen) setIsOpen(false);
    };

    return (
        <>
            <header className="bg-background6 flex flex-row items-center justify-between h-20 w-full px-4 fixed left-0 right-0 top-0 z-50 overflow-hidden">
                {/* Matrix rain background */}
                <div className="matrix-rain" aria-hidden="true">
                    <div className="matrix-column" style={{ left: '1%', animationDuration: '4.5s', animationDelay: '0s' }}>01010</div>
                    <div className="matrix-column" style={{ left: '5%', animationDuration: '5.5s', animationDelay: '1.2s' }}>10ai10</div>
                    <div className="matrix-column" style={{ left: '9%', animationDuration: '3.8s', animationDelay: '0.5s' }}>ai01ai</div>
                    <div className="matrix-column" style={{ left: '13%', animationDuration: '5.0s', animationDelay: '2.1s' }}>0ai10a</div>
                    <div className="matrix-column" style={{ left: '17%', animationDuration: '4.2s', animationDelay: '0.8s' }}>10010</div>
                    <div className="matrix-column" style={{ left: '22%', animationDuration: '5.8s', animationDelay: '1.8s' }}>ai1001</div>
                    <div className="matrix-column" style={{ left: '27%', animationDuration: '3.5s', animationDelay: '0.3s' }}>010ai1</div>
                    <div className="matrix-column" style={{ left: '32%', animationDuration: '4.8s', animationDelay: '2.5s' }}>1010a</div>
                    <div className="matrix-column" style={{ left: '37%', animationDuration: '5.2s', animationDelay: '1.0s' }}>ai0101</div>
                    <div className="matrix-column" style={{ left: '42%', animationDuration: '3.6s', animationDelay: '1.5s' }}>0110a</div>
                    <div className="matrix-column" style={{ left: '47%', animationDuration: '5.0s', animationDelay: '0.7s' }}>10ai01</div>
                    <div className="matrix-column" style={{ left: '52%', animationDuration: '4.0s', animationDelay: '2.0s' }}>0ai101</div>
                    <div className="matrix-column" style={{ left: '57%', animationDuration: '5.5s', animationDelay: '0.4s' }}>ai1010</div>
                    <div className="matrix-column" style={{ left: '62%', animationDuration: '3.9s', animationDelay: '1.3s' }}>0101a</div>
                    <div className="matrix-column" style={{ left: '67%', animationDuration: '4.6s', animationDelay: '2.3s' }}>100ai1</div>
                    <div className="matrix-column" style={{ left: '73%', animationDuration: '5.3s', animationDelay: '0.6s' }}>01ai01</div>
                    <div className="matrix-column" style={{ left: '79%', animationDuration: '3.7s', animationDelay: '1.7s' }}>ai0110</div>
                    <div className="matrix-column" style={{ left: '85%', animationDuration: '4.9s', animationDelay: '0.9s' }}>10101</div>
                    <div className="matrix-column" style={{ left: '91%', animationDuration: '5.1s', animationDelay: '2.2s' }}>010ai0</div>
                    <div className="matrix-column" style={{ left: '96%', animationDuration: '4.3s', animationDelay: '1.4s' }}>ai1001</div>
                </div>

                <div className="flex items-center">
                    <H5>{content.header.brandName}</H5>

                    {/* Code symbol animation */}
                    <span className="code-symbol-wrap" aria-hidden="true">
                        <span className="code-char code-lt">{"<"}</span>
                        <span className="code-char code-slash">{"/"}</span>
                        <span className="code-char code-gt">{">"}</span>
                    </span>
                </div>

                {/* Desktop nav */}
                {isDesktop && (
                    <div className="flex flex-row items-center gap-2">
                        <nav aria-label="Main navigation">
                            <ul className="flex flex-row items-center list-none gap-0">
                                {navLinks.map(({ key, href }) => (
                                    <li key={href}>
                                    <a
                                        onClick={handleLinkClick}
                                        href={href}
                                        className="nav-link"
                                    >
                                        <span>{t(key)}</span>
                                    </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <Toggle isActive={id === 'dark'} onToggle={setTheme} />
                        <div className="flex flex-row items-center mx-4">
                            <button
                                type="button"
                                onClick={() => handleLanguageChange("es")}
                                aria-label="Switch to Spanish"
                                className="h-[30px] w-[53px] mx-1 cursor-pointer rounded overflow-hidden focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2 transition-opacity duration-normal hover:opacity-80"
                            >
                                <img src={ESflag} alt="Spanish" height="100%" width="100%" className="object-cover rounded" />
                            </button>
                            <button
                                type="button"
                                onClick={() => handleLanguageChange("en")}
                                aria-label="Switch to English"
                                className="h-[30px] w-[53px] mx-1 cursor-pointer rounded overflow-hidden focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2 transition-opacity duration-normal hover:opacity-80"
                            >
                                <img src={USflag} alt="English" height="100%" width="100%" className="object-cover rounded" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Mobile menu button */}
                {!isDesktop && (
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        className="text-text cursor-pointer p-2 rounded focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2 transition-colors duration-normal hover:text-text-accent"
                    >
                        {isOpen ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
                    </button>
                )}
            </header>

            {/* Full-viewport separator — always visible below header */}
            <div className="fixed top-20 left-0 right-0 h-px bg-border z-50" aria-hidden="true" />

            {/* Mobile menu overlay */}
            {!isDesktop && isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />
                    {/* Menu dropdown — box below header */}
                    <nav
                        id="mobile-menu"
                        aria-label="Mobile navigation"
                        className="fixed top-20 left-0 right-0 bg-background6 flex flex-col items-center py-6 z-50 border border-text-accent"
                    >
                        <ul className="flex flex-col items-center list-none gap-4">
                            {navLinks.map(({ key, href }) => (
                                <li key={href}>
                                    <a
                                        onClick={handleLinkClick}
                                        href={href}
                                        className="nav-link text-center"
                                    >
                                        <span>{t(key)}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex flex-col items-center gap-4">
                            <Toggle isActive={id === 'dark'} onToggle={setTheme} />
                            <div className="flex flex-row items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => handleLanguageChange("es")}
                                    aria-label="Switch to Spanish"
                                    className="h-[30px] w-[53px] cursor-pointer rounded overflow-hidden focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2 transition-opacity duration-normal hover:opacity-80"
                                >
                                    <img src={ESflag} alt="Spanish" height="100%" width="100%" className="object-cover rounded" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleLanguageChange("en")}
                                    aria-label="Switch to English"
                                    className="h-[30px] w-[53px] cursor-pointer rounded overflow-hidden focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2 transition-opacity duration-normal hover:opacity-80"
                                >
                                    <img src={USflag} alt="English" height="100%" width="100%" className="object-cover rounded" />
                                </button>
                            </div>
                        </div>
                    </nav>
                </>
            )}
        </>
    );
};

export { Header };
