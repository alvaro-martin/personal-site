import { useTranslation } from "react-i18next";
import content from 'data/content.json';
import {TiArrowRightOutline} from 'react-icons/ti';
import { 
    BsLinkedin, 
    BsTwitter, 
    BsYoutube, 
    BsWhatsapp 
} from 'react-icons/bs';
import {BiWorld} from 'react-icons/bi';

import Photo from 'assets/me2.png';

const socialIcons = [
    { icon: BsLinkedin, url: content.social.linkedin },
    { icon: BsTwitter, url: content.social.twitter },
    { icon: BsYoutube, url: content.social.youtube },
    { icon: BsWhatsapp, url: content.social.whatsapp },
    { icon: BiWorld, url: content.social.website },
];

const Hero = () => {
    const [t] = useTranslation("global");
    
    return (
        <section id='home' className="w-full flex flex-row justify-center items-center mt-[6.5rem] pt-[9rem] max-[778px]:flex-col-reverse">
            <div className="flex flex-col w-[37rem] max-[650px]:w-[30rem]">
                <h1 className="text-[color:var(--color-fontColor1)] font-bold text-[3.1rem] mb-4">{t("hero.hello")}</h1>
                <p className="text-[color:var(--color-fontColor3)] font-bold text-[2rem]">{t("hero.title1")}</p>
                <p className="text-[color:var(--color-fontColor3)] font-bold text-[2rem]">{t("hero.title2")}</p>
                <p className="text-[color:var(--color-fontColor3)] font-bold text-[2rem]">{t("hero.title3")}</p>
                <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] my-4">{t("hero.description")}</p>
                <a href="#contactme" className="bg-[color:var(--color-background2)] text-[color:var(--color-fontColor2)] font-bold text-[2rem] rounded-[0.5rem] border-none w-[17rem] h-[6rem] flex flex-row items-center justify-center cursor-pointer no-underline">
                    {t("hero.button")}
                    <TiArrowRightOutline size={'3rem'} />
                </a>
            </div>
            <div className="w-[250px] h-[250px] m-[3rem] animate-[clipImage_1s_infinite] bg-[color:var(--color-background2)] flex justify-center items-center max-[650px]:w-[200px] max-[650px]:h-[200px]">
                <img src={Photo} alt={content.hero.photoAlt} width='85%' height='85%' />
            </div>
            <div className="flex flex-col items-center justify-center max-[778px]:flex-row">
                {socialIcons.map(({ icon: Icon, url }, idx) => (
                    <a key={idx} href={url} target='_blank' className="text-[color:var(--color-fontColor4)] text-[2rem] no-underline px-4 cursor-pointer my-[0.6rem]"><Icon /></a>
                ))}
            </div>
       </section>
    );
};

export {Hero};
