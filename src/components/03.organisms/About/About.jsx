import { useTranslation } from "react-i18next";
import content from 'data/content.json';
import { HiDownload } from 'react-icons/hi';

import Intercon from 'assets/intercon.png';

const About = () => {
    const [t] = useTranslation("global");

    return (
        <section id="aboutme" aria-labelledby="about-heading" className="section-wrapper">
            <h1 id="about-heading" className="section-heading">
                {t("about.title")}
            </h1>
            <p className="section-subtitle">
                {t("about.subtitle")}
            </p>
            <div className="flex flex-row items-center justify-center my-8 gap-8 max-w-4xl px-6 md:flex-col">
                <div className="w-[250px] h-[350px] rounded-xl overflow-hidden shrink-0">
                    <img
                        src={Intercon}
                        alt={content.about.photoAlt}
                        width="100%"
                        height="100%"
                        loading="lazy"
                        decoding="async"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex flex-col justify-between">
                    <p className="text-text-muted text-base leading-relaxed max-w-[65ch] mb-8">
                        {t("about.description")}
                    </p>
                    <div className="flex flex-row items-center mb-8 gap-6">
                        {content.about.stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center text-center w-28">
                                <p className="text-text text-3xl font-bold mb-1_5">
                                    {stat.value}
                                </p>
                                <p className="text-text-muted text-base">
                                    {t(stat.labelKey)}
                                </p>
                            </div>
                        ))}
                    </div>
                    <a
                        href={t("about.cvLink")}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full md:w-auto"
                    >
                        {t("about.cv")}
                        <HiDownload size="3rem" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export { About };
