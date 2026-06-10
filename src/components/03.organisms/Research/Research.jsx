import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import content from 'data/content.json';

import SanMarcos from 'assets/sanmarcos.png';
import SmartCampus from 'assets/smartcampus.png';
import LoRaWAN from 'assets/lorawan.png';
import Gesture from 'assets/covid.png';
import RSSI from 'assets/rssi.png';
import Bayes from 'assets/bayes.png';
import Piscigranja from 'assets/piscigranja.png';

const imageMap = {
    piscigranja: Piscigranja,
    sanmarcos: SanMarcos,
    smartcampus: SmartCampus,
    lorawan: LoRaWAN,
    covid: Gesture,
    rssi: RSSI,
    bayes: Bayes,
};

const projects = content.research.projects.map(p => ({
    ...p,
    img: imageMap[p.imageKey],
}));

const Research = () => {
    const [t] = useTranslation("global");
    const [project, setProject] = useState(1);
    const numberProjects = projects.length;

    const decreaseIndex = () => {
        setProject(prev => prev === 1 ? numberProjects : prev - 1);
    };

    const increaseIndex = () => {
        setProject(prev => prev === numberProjects ? 1 : prev + 1);
    };

    const current = projects[project - 1];

    return (
        <section aria-labelledby="research-heading" className="section-wrapper">
            <h1 id="research-heading" className="section-heading">
                {t("research.title")}
            </h1>
            <p className="section-subtitle">
                {t("research.subtitle")}
            </p>
            <div
                role="region"
                aria-label="Research carousel"
                aria-live="polite"
                className="flex flex-row items-center justify-between gap-4 px-4"
            >
                <button
                    type="button"
                    onClick={decreaseIndex}
                    aria-label="Previous research"
                    className="carousel-arrow"
                >
                    <IoIosArrowBack size={30} />
                </button>

                <div className="flex flex-row items-center justify-center gap-8 md:flex-col">
                    <div className="w-full max-w-[500px] h-[350px] m-4 rounded-xl overflow-hidden shrink-0 md:max-w-[200px] md:h-[220px]">
                        <img
                            src={current.img}
                            alt={current.alt}
                            width="100%"
                            height="100%"
                            loading="lazy"
                            decoding="async"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col max-w-[30rem] md:max-w-[20rem]">
                        <h2 className="text-text text-xl font-bold mb-6 leading-snug">
                            {t(current.titleKey)}
                        </h2>
                        <p className="text-text-muted text-base mb-6 leading-relaxed max-w-[65ch]">
                            {t(current.subtitleKey)}
                        </p>
                        {current.linkKey && (
                            <a
                                href={t(current.linkKey)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full md:w-[19rem]"
                            >
                                {t(current.buttonKey)}
                            </a>
                        )}
                    </div>
                </div>

                <button
                    type="button"
                    onClick={increaseIndex}
                    aria-label="Next research"
                    className="carousel-arrow"
                >
                    <IoIosArrowForward size={30} />
                </button>
            </div>
        </section>
    );
};

export { Research };
