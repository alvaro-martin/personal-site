import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useState } from "react";
import {useTranslation} from 'react-i18next';
import SanMarcos from 'assets/sanmarcos.png';
import SmartCampus from 'assets/smartcampus.png';
import LoRaWAN from 'assets/lorawan.png';
import Gesture from 'assets/covid.png';
import RSSI from 'assets/rssi.png';
import Bayes from 'assets/bayes.png';
import Piscigranja from 'assets/piscigranja.png';

const projects = [
    { img: Piscigranja, alt: 'piscigranja', titleKey: 'research.project1.title', subtitleKey: 'research.project1.subtitle' },
    { img: SanMarcos, alt: 'sanmarcos', titleKey: 'research.project2.title', subtitleKey: 'research.project2.subtitle' },
    { img: SmartCampus, alt: 'smartcampus', titleKey: 'research.project3.title', subtitleKey: 'research.project3.subtitle', linkKey: 'research.project3.link', buttonKey: 'research.project3.button' },
    { img: LoRaWAN, alt: 'lorawan', titleKey: 'research.project4.title', subtitleKey: 'research.project4.subtitle', linkKey: 'research.project4.link', buttonKey: 'research.project4.button' },
    { img: Gesture, alt: 'gesture', titleKey: 'research.project5.title', subtitleKey: 'research.project5.subtitle', linkKey: 'research.project5.link', buttonKey: 'research.project5.button' },
    { img: RSSI, alt: 'rssi', titleKey: 'research.project6.title', subtitleKey: 'research.project6.subtitle', linkKey: 'research.project6.link', buttonKey: 'research.project6.button' },
    { img: Bayes, alt: 'bayes', titleKey: 'research.project7.title', subtitleKey: 'research.project7.subtitle', linkKey: 'research.project7.link', buttonKey: 'research.project7.button' },
];

const Research = () => {
    const [t] = useTranslation("global");
    const [project, setProject] = useState(1);
    const numberProjects = 7;

    const DecreaseIndex = () => {
        if(project === 1){
            setProject(project + numberProjects - 1);
        } else {
            setProject(project - 1);
        }
    };

    const IncreaseIndex = () => {
        if(project === numberProjects){
            setProject(project - numberProjects +1);
        } else {
            setProject(project + 1);
        }
    }

    const current = projects[project - 1];

    return (
        <section className="flex flex-col items-center my-16">
            <h1 className="text-[color:var(--color-fontColor1)] font-bold text-[3rem]">{t("research.title")}</h1>
            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] my-4">{t("research.subtitle")}</p>
            <div className="flex flex-row items-center justify-between">
                <div className="w-[4rem] h-[4rem] cursor-pointer" onClick={DecreaseIndex}>
                    <IoIosArrowBack size={30} />
                </div>
                <div className="flex flex-row items-center justify-center mx-8 max-[1000px]:flex-col">
                    <div className="w-[500px] h-[350px] m-4 [&>img]:rounded-xl max-[650px]:w-[200px] max-[650px]:h-[220px] max-[650px]:m-4 max-[650px]:mx-0">
                        <img src={current.img} alt={current.alt} width='100%' height='100%' />
                    </div>
                    <div className="flex flex-col ml-8">
                        <p className="text-[color:var(--color-fontColor1)] font-bold text-[2rem] w-[30rem] mb-8 max-[650px]:w-[20rem]">{t(current.titleKey)}</p>
                        <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] w-[30rem] mb-8 max-[650px]:w-[20rem]">{t(current.subtitleKey)}</p>
                        {current.linkKey && (
                            <a href={t(current.linkKey)} target='_blank' className="bg-[color:var(--color-background2)] text-[color:var(--color-fontColor2)] font-bold text-[2rem] rounded-[0.5rem] border-none w-[19rem] h-[6rem] flex flex-row items-center justify-center no-underline cursor-pointer">
                                {t(current.buttonKey)}
                            </a>
                        )}
                    </div>
                </div>
                <div className="w-[4rem] h-[4rem] cursor-pointer" onClick={IncreaseIndex}>
                    <IoIosArrowForward size={30} />
                </div>
            </div>
        </section>
    );
};

export { Research };