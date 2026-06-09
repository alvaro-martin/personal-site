import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useState } from "react";
import {useTranslation} from 'react-i18next';
import content from 'data/content.json';

import Democracia from 'assets/democracia.png';
import Nahui from 'assets/nahui.png';
import CIP from 'assets/cip.png';
import Sigfox1 from 'assets/sigfox1.png';
import Sigfox2 from 'assets/sigfox2.png';
import Hackster from 'assets/hackster.png';

const imageMap = {
    democracia: Democracia,
    nahui: Nahui,
    cip: CIP,
    sigfox1: Sigfox1,
    sigfox2: Sigfox2,
    hackster: Hackster,
};

const projects = content.awards.projects.map(p => ({
    ...p,
    img: imageMap[p.imageKey],
}));

const Awards = () => {
    const [t] = useTranslation("global");
    const [project, setProject] = useState(1);
    const numberProjects = projects.length;

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
