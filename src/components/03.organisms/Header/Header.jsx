import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import content from 'data/content.json';
import { Toggle } from "components/02.molecules";
import { H5 } from "components/01.atoms";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useTheme } from "styles/ThemeContext";

import USflag from 'assets/US-flag.png';
import ESflag from 'assets/ES-flag.png';

const navLinks = [
    { key: "header.home", href: "#home" },
    { key: "header.about", href: "#aboutme" },
    { key: "header.skills", href: "#skills" },
    { key: "header.services", href: "#services" },
    { key: "header.portfolio", href: "#portfolio" },
    { key: "header.contactme", href: "#contactme" },
];

const Header = () => {
    const [t, i18n] = useTranslation("global");
    const { id, setTheme, language, setLanguage } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (language && i18n.language !== language) {
            i18n.changeLanguage(language);
        }
    }, [language, i18n]);

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    };

    const handleLinkClick = () => {
        if (isOpen) setIsOpen(false);
    };

    return (
        <header className="bg-background6 flex flex-row items-center justify-between h-20 w-full px-4 fixed right-0 top-0 z-sticky border-b border-border">
            <H5>{content.header.brandName}</H5>

            {/* Desktop nav */}
            <div className="hidden lg:flex flex-row items-center gap-2">
                <nav aria-label="Main navigation">
                    <ul className="flex flex-row items-center list-none gap-0">
                        {navLinks.map(({ key, href }) => (
                            <li key={href}>
                                <a
                                    onClick={handleLinkClick}
                                    href={href}
                                    className="nav-link"
                                >
                                    {t(key)}
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
                        className="h-[30px] w-[53px] mx-1 cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2 transition-opacity duration-normal hover:opacity-80"
                    >
                        <img src={ESflag} alt="Spanish" height="100%" width="100%" />
                    </button>
                    <button
                        type="button"
                        onClick={() => handleLanguageChange("en")}
                        aria-label="Switch to English"
                        className="h-[30px] w-[53px] mx-1 cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2 transition-opacity duration-normal hover:opacity-80"
                    >
                        <img src={USflag} alt="English" height="100%" width="100%" />
                    </button>
                </div>
            </div>

            {/* Mobile menu button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="text-text lg:hidden cursor-pointer p-2 rounded focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2 transition-colors duration-normal hover:text-text-accent"
            >
                {isOpen ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
            </button>

            {/* Mobile nav */}
            {isOpen && (
                <nav
                    id="mobile-menu"
                    aria-label="Mobile navigation"
                    className="absolute top-20 left-0 w-full bg-background6 flex flex-col items-center py-8 border-b border-border shadow-lg lg:hidden z-fixed"
                >
                    <ul className="flex flex-col items-center list-none gap-4">
                        {navLinks.map(({ key, href }) => (
                            <li key={href}>
                                <a
                                    onClick={handleLinkClick}
                                    href={href}
                                    className="nav-link text-center"
                                >
                                    {t(key)}
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
                                className="h-[30px] w-[53px] cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2 transition-opacity duration-normal hover:opacity-80"
                            >
                                <img src={ESflag} alt="Spanish" height="100%" width="100%" />
                            </button>
                            <button
                                type="button"
                                onClick={() => handleLanguageChange("en")}
                                aria-label="Switch to English"
                                className="h-[30px] w-[53px] cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2 transition-opacity duration-normal hover:opacity-80"
                            >
                                <img src={USflag} alt="English" height="100%" width="100%" />
                            </button>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
};

export { Header };
