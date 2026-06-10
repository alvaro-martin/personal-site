import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useState } from "react";
import { useTranslation } from 'react-i18next';
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

    const decreaseIndex = () => {
        setProject(prev => prev === 1 ? numberProjects : prev - 1);
    };

    const increaseIndex = () => {
        setProject(prev => prev === numberProjects ? 1 : prev + 1);
    };

    const current = projects[project - 1];

    return (
        <section aria-labelledby="awards-heading" className="section-wrapper">
            <h1 id="awards-heading" className="section-heading">
                {t("acknowledgments.title")}
            </h1>
            <p className="section-subtitle">
                {t("acknowledgments.subtitle")}
            </p>
            <div
                role="region"
                aria-label="Awards carousel"
                aria-live="polite"
                className="flex flex-row items-center justify-between gap-4 px-4"
            >
                <button
                    type="button"
                    onClick={decreaseIndex}
                    aria-label="Previous award"
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
                    aria-label="Next award"
                    className="carousel-arrow"
                >
                    <IoIosArrowForward size={30} />
                </button>
            </div>
        </section>
    );
};

export { Awards };
