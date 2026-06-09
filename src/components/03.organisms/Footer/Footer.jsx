import { 
    BsLinkedin, 
    BsTwitter, 
    BsYoutube, 
    BsWhatsapp 
} from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import {useTranslation} from "react-i18next";

const Footer = () => {
    const [t] = useTranslation("global");
    
    return (
        <footer className="bg-[color:var(--color-background5)] text-white flex flex-col items-center py-12 px-16 pt-4 max-[900px]:px-4">
            <div className="flex flex-row justify-between mb-16 w-full max-[900px]:flex-col max-[900px]:items-center">
                <div className="flex flex-col justify-center my-0 mb-8 max-[900px]:items-center">
                    <p className="text-[color:var(--color-fontColor2)] text-[3rem] font-bold mb-2">{t("footer.title")}</p>
                    <p className="text-[color:var(--color-fontColor2)] text-[1.5rem]">{t("footer.subtitle1")}</p>
                    <p className="text-[color:var(--color-fontColor2)] text-[1.5rem]">{t("footer.subtitle2")}</p>
                    <p className="text-[color:var(--color-fontColor2)] text-[1.5rem]">{t("footer.subtitle3")}</p>
                </div>
                <div className="flex flex-row justify-center items-center my-0 mb-8 flex-wrap">
                    <a href='#aboutme' className="text-[color:var(--color-fontColor2)] text-[2rem] no-underline px-4 cursor-pointer">{t("footer.link1")}</a>
                    <a href='#skills' className="text-[color:var(--color-fontColor2)] text-[2rem] no-underline px-4 cursor-pointer">{t("footer.link2")}</a>
                    <a href='#services' className="text-[color:var(--color-fontColor2)] text-[2rem] no-underline px-4 cursor-pointer">{t("footer.link3")}</a>
                    <a href='#portfolio' className="text-[color:var(--color-fontColor2)] text-[2rem] no-underline px-4 cursor-pointer">{t("footer.link4")}</a>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <a href='https://www.linkedin.com/in/almartinuni/' target='_blank' className="text-[color:var(--color-fontColor2)] text-[2rem] no-underline px-4 cursor-pointer"><BsLinkedin /></a>
                    <a href='https://twitter.com/AuboIoT' target='_blank' className="text-[color:var(--color-fontColor2)] text-[2rem] no-underline px-4 cursor-pointer"><BsTwitter /></a>
                    <a href='https://www.youtube.com/channel/UCe9h3MH2VjcRy5csMZDcWWg' target='_blank' className="text-[color:var(--color-fontColor2)] text-[2rem] no-underline px-4 cursor-pointer"><BsYoutube /></a>
                    <a href='https://wa.me/message/PPPUMYTCGAVEI1' target='_blank' className="text-[color:var(--color-fontColor2)] text-[2rem] no-underline px-4 cursor-pointer"><BsWhatsapp /></a>
                    <a href="https://aubo.io" target='_blank' className="text-[color:var(--color-fontColor2)] text-[2rem] no-underline px-4 cursor-pointer"><BiWorld /></a>
                </div>
            </div>
            <p className="text-[1.7rem] text-[color:var(--color-fontColor2)] m-4">{t("footer.madeBy")}</p>
            <p className="text-[1.5rem] text-[color:var(--color-fontColor3)] m-8">&copy; 2022. {t("footer.copyright")}</p>
        </footer>
    )
};

export {Footer};