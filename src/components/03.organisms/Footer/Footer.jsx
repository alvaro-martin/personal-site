import { 
    BsLinkedin, 
    BsTwitter, 
    BsYoutube, 
    BsWhatsapp 
} from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import {useTranslation} from "react-i18next";
import content from 'data/content.json';

const socialIcons = [
    { icon: BsLinkedin, url: content.social.linkedin },
    { icon: BsTwitter, url: content.social.twitter },
    { icon: BsYoutube, url: content.social.youtube },
    { icon: BsWhatsapp, url: content.social.whatsapp },
    { icon: BiWorld, url: content.social.website },
];

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
                    {content.footer.anchors.map((anchor, idx) => (
                        <a key={idx} href={anchor.href} className="text-[color:var(--color-fontColor2)] text-[2rem] no-underline px-4 cursor-pointer">{t(anchor.labelKey)}</a>
                    ))}
                </div>
                <div className="flex flex-row items-center justify-center">
                    {socialIcons.map(({ icon: Icon, url }, idx) => (
                        <a key={idx} href={url} target='_blank' className="text-[color:var(--color-fontColor2)] text-[2rem] no-underline px-4 cursor-pointer"><Icon /></a>
                    ))}
                </div>
            </div>
            <p className="text-[1.7rem] text-[color:var(--color-fontColor2)] m-4">{t("footer.madeBy")}</p>
            <p className="text-[1.5rem] text-[color:var(--color-fontColor3)] m-8">&copy; {content.footer.copyrightYear}. {t("footer.copyright")}</p>
        </footer>
    )
};

export {Footer};
