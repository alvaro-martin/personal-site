import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useState } from "react";
import {useTranslation} from 'react-i18next';
import Democracia from 'assets/democracia.png';
import Nahui from 'assets/nahui.png';
import CIP from 'assets/cip.png';
import Sigfox1 from 'assets/sigfox1.png';
import Sigfox2 from 'assets/sigfox2.png';
import Hackster from 'assets/hackster.png';

const projects = [
    { img: Democracia, alt: 'democracia', titleKey: 'acknowledgments.project1.title', subtitleKey: 'acknowledgments.project1.subtitle', linkKey: 'acknowledgments.project1.link', buttonKey: 'acknowledgments.project1.button' },
    { img: Nahui, alt: 'nahui', titleKey: 'acknowledgments.project2.title', subtitleKey: 'acknowledgments.project2.subtitle', linkKey: 'acknowledgments.project2.link', buttonKey: 'acknowledgments.project2.button' },
    { img: CIP, alt: 'cip', titleKey: 'acknowledgments.project3.title', subtitleKey: 'acknowledgments.project3.subtitle', linkKey: 'acknowledgments.project3.link', buttonKey: 'acknowledgments.project3.button' },
    { img: Sigfox1, alt: 'sigfox1', titleKey: 'acknowledgments.project4.title', subtitleKey: 'acknowledgments.project4.subtitle' },
    { img: Sigfox2, alt: 'sigfox2', titleKey: 'acknowledgments.project5.title', subtitleKey: 'acknowledgments.project5.subtitle' },
    { img: Hackster, alt: 'hackster', titleKey: 'acknowledgments.project6.title', subtitleKey: 'acknowledgments.project6.subtitle', linkKey: 'acknowledgments.project6.link', buttonKey: 'acknowledgments.project6.button' },
];

const Awards = () => {
    const [t] = useTranslation("global");
    const [project, setProject] = useState(1);
    const numberProjects = 6;

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
            <h1 className="text-[color:var(--color-fontColor1)] font-bold text-[3rem]">{t("acknowledgments.title")}</h1>
            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] my-4">{t("acknowledgments.subtitle")}</p>
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

export { Awards };