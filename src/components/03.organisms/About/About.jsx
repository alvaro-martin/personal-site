import { useTranslation } from "react-i18next";
import content from 'data/content.json';
import { HiDownload } from 'react-icons/hi';
import { useScrollReveal } from 'hooks/useScrollReveal';

import Intercon from 'assets/intercon.png';

const About = () => {
    const [t] = useTranslation("global");
    const revealRef = useScrollReveal();

    return (
        <section id="aboutme" aria-labelledby="about-heading" className="section-wrapper">
            <h1 id="about-heading" className="section-heading">
                {t("about.title")}
            </h1>
            <p className="section-subtitle">
                {t("about.subtitle")}
            </p>
            <div ref={revealRef} className="flex flex-col items-center justify-center my-8 gap-8 max-w-4xl px-6 md:flex-row">
                <div className="card-reveal w-[250px] h-[350px] rounded-xl overflow-hidden shrink-0" style={{ animationDelay: '0ms' }}>
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
                    <p className="card-reveal text-text-muted text-base leading-relaxed max-w-[65ch] mb-8" style={{ animationDelay: '200ms' }}>
                        {t("about.description")}
                    </p>
                    <a
                        href={t("about.cvLink")}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-reveal btn-primary w-full md:w-auto"
                        style={{ animationDelay: '400ms' }}
                    >
                        {t("about.cv")}
                        <span className="download-icon" aria-hidden="true">
                            <HiDownload size="3rem" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export { About };
