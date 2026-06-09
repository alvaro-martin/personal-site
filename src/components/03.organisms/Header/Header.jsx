import { useState } from "react";
import { useTranslation } from "react-i18next";
import content from 'data/content.json';
import { Toggle } from "components/02.molecules";
import { H5 } from "components/01.atoms";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useTheme } from "styles/ThemeContext";

import USflag from 'assets/US-flag.png';
import ESflag from 'assets/ES-flag.png';

const Header = () => {
    const [t, i18n] = useTranslation("global");
    const {id, setTheme} = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        if (isOpen) setIsOpen(false);
    };

    return (
        <header className="bg-[color:var(--color-background6)] flex flex-row items-center justify-between h-[8rem] w-full p-4 fixed right-0 top-0 z-[2] border-b border-[color:var(--color-background2)] mb-[8rem]">
            <H5>{content.header.brandName}</H5>

            <div className={`flex flex-row items-center max-[1200px]:${isOpen ? 'absolute flex-col top-[6rem] right-0 box-border bg-[color:var(--color-background6)] w-full z-[2] border border-solid p-8' : 'hidden'}`}>
                <nav className={`flex flex-row items-center max-[1200px]:${isOpen ? 'flex-col' : ''}`}>
                    <a onClick={handleLinkClick} href='#home' className="text-[2rem] text-[color:var(--color-fontColor1)] font-bold p-4 no-underline cursor-pointer hover:text-[color:var(--color-fontColor4)]">{t("header.home")}</a>
                    <a onClick={handleLinkClick} href='#aboutme' className="text-[2rem] text-[color:var(--color-fontColor1)] font-bold p-4 no-underline cursor-pointer hover:text-[color:var(--color-fontColor4)]">{t("header.about")}</a>
                    <a onClick={handleLinkClick} href='#skills' className="text-[2rem] text-[color:var(--color-fontColor1)] font-bold p-4 no-underline cursor-pointer hover:text-[color:var(--color-fontColor4)]">{t("header.skills")}</a>
                    <a onClick={handleLinkClick} href='#services' className="text-[2rem] text-[color:var(--color-fontColor1)] font-bold p-4 no-underline cursor-pointer hover:text-[color:var(--color-fontColor4)]">{t("header.services")}</a>
                    <a onClick={handleLinkClick} href='#portfolio' className="text-[2rem] text-[color:var(--color-fontColor1)] font-bold p-4 no-underline cursor-pointer hover:text-[color:var(--color-fontColor4)]">{t("header.portfolio")}</a>
                    <a onClick={handleLinkClick} href='#contactme' className="text-[2rem] text-[color:var(--color-fontColor1)] font-bold p-4 no-underline cursor-pointer hover:text-[color:var(--color-fontColor4)]">{t("header.contactme")}</a>
                </nav>
                <Toggle isActive={id === 'dark'} onToggle={setTheme}/>
                <div className="flex flex-row items-center m-4">
                    <a onClick={() => i18n.changeLanguage("es")} className="h-[30px] w-[53px] mx-[0.3rem] cursor-pointer">
                        <img src={ESflag} alt='ES-flag' height='100%' width='100%' />
                    </a>
                    <a onClick={() => i18n.changeLanguage("en")} className="h-[30px] w-[53px] mx-[0.3rem] cursor-pointer">
                        <img src={USflag} alt='US-flag' height='100%' width='100%' />
                    </a>
                </div>
            </div>

            <div className="text-[color:var(--color-fontColor1)] cursor-pointer hidden max-[1200px]:flex" onClick={() => setIsOpen(!isOpen)}>
                <div className={isOpen ? 'hidden' : 'block'}><AiOutlineMenu id='menu' size={35} /></div>
                <div className={isOpen ? 'block' : 'hidden'}><AiOutlineClose id='cross' size={35} /></div>
            </div>
        </header>
    )
};

export {Header};
