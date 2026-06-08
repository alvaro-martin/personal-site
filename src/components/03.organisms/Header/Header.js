import { useState } from "react";
import { useTheme } from "styled-components";
import { HeaderLink, HeaderWrapper, IconWrapper, LanguageButton, LanguageButtonWrapper, LinkButtonsHeaderWrapper, NavLinkWrapper } from "./Header.styles";
import { useTranslation } from "react-i18next";
import USflag from 'assets/US-flag.png';
import ESflag from 'assets/ES-flag.png';
import { Toggle } from "components/02.molecules";
import { H5 } from "components/01.atoms";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Header = () => {
    const [t, i18n] = useTranslation("global");
    const {id, setTheme} = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <HeaderWrapper>
            <H5>Alvaro Martín</H5>
            <LinkButtonsHeaderWrapper isOpen={isOpen}>
                <NavLinkWrapper isOpen={isOpen} >
                    <HeaderLink 
                        onClick={()=>{if(isOpen === true){setIsOpen(!isOpen)}}}
                        href='#home'
                            >{t("header.home")}
                    </HeaderLink>
                    <HeaderLink 
                        onClick={()=>{if(isOpen === true){setIsOpen(!isOpen)}}} 
                        href='#aboutme' >
                            {t("header.about")}
                    </HeaderLink>
                    <HeaderLink 
                        onClick={()=>{if(isOpen === true){setIsOpen(!isOpen)}}} 
                        href='#skills' >
                            {t("header.skills")}
                    </HeaderLink>
                    <HeaderLink 
                        onClick={()=>{if(isOpen === true){setIsOpen(!isOpen)}}} 
                        href='#services' >
                            {t("header.services")}
                    </HeaderLink>
                    <HeaderLink 
                        onClick={()=>{if(isOpen === true){setIsOpen(!isOpen)}}} 
                        href='#portfolio' >
                            {t("header.portfolio")}
                    </HeaderLink>
                    <HeaderLink 
                        onClick={()=>{if(isOpen === true){setIsOpen(!isOpen)}}} 
                        href='#contactme' >
                            {t("header.contactme")}
                    </HeaderLink>
                </NavLinkWrapper>
                <Toggle isActive={id === 'dark'} onToggle={setTheme}/>
                <LanguageButtonWrapper>
                    <LanguageButton onClick={() => i18n.changeLanguage("es")}>
                        <img src={ESflag} alt='ES-flag' height='100%' width='100%' />
                    </LanguageButton>
                    <LanguageButton onClick={() => i18n.changeLanguage("en")}>
                        <img src={USflag} alt='US-flag' height='100%' width='100%' />
                    </LanguageButton>
                </LanguageButtonWrapper>
            </LinkButtonsHeaderWrapper>
            <IconWrapper onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                <AiOutlineMenu id='menu' size={35} />
                <AiOutlineClose id='cross' size={35} />
            </IconWrapper>
        </HeaderWrapper>
    )
};

export {Header};