import { useTranslation } from "react-i18next";
import { BsCalendar3 } from 'react-icons/bs';
import content from 'data/content.json';
import { useScrollReveal } from 'hooks/useScrollReveal';

const Journey = () => {
    const [t] = useTranslation("global");
    const ref = useScrollReveal();

    return (
        <section ref={ref} aria-labelledby="journey-heading" className="section-wrapper py-16">
            <h1 id="journey-heading" className="section-heading">
                {t("experience.title")}
            </h1>
            <p className="section-subtitle">
                {t("experience.subtitle")}
            </p>
            <div className="grid grid-cols-[1fr_5rem_1fr] w-full max-w-[50rem] px-6 md:max-w-[30rem] sm:grid-cols-[1fr_3rem_1fr]">
                {content.journey.entries.map((exp, idx) => (
                    <article
                        key={idx}
                        style={{
                            gridColumn: `${exp.gcs} / ${exp.gce}`,
                            gridRow: `${exp.grs} / ${exp.gre}`,
                            animationDelay: `${idx * 150}ms`
                        }}
                        className={`card-reveal journey-entry flex flex-col h-[10rem] ${exp.gcs === 1 ? 'journey-entry-left' : 'journey-entry-right'}`}
                    >
                        <h2 className="text-text text-xl font-bold leading-snug md:text-base">
                            {t(exp.titleKey)}
                        </h2>
                        <p className="text-text-muted text-lg mb-2 md:text-base">
                            {t(exp.companyKey)}
                        </p>
                        <div className="flex flex-row items-center gap-2">
                            <BsCalendar3 size={20} className="text-text-muted" aria-hidden="true" />
                            <time className="text-text-muted text-base">
                                {t(exp.dateKey)}
                            </time>
                        </div>
                    </article>
                ))}
                {content.journey.entries.map((exp, idx) => (
                    <div
                        key={`dec-${idx}`}
                        style={{
                            gridColumn: '2 / 3',
                            gridRow: `${exp.decoratorGrs} / ${exp.decoratorGre}`,
                            animationDelay: `${idx * 100}ms`
                        }}
                        className="card-reveal journey-decorator flex flex-col items-center"
                        aria-hidden="true"
                    >
                        <div className="journey-dot w-[2.3rem] h-[2.3rem] rounded-full bg-primary" />
                        <div className="journey-line bg-primary w-[0.2rem] flex-1" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export { Journey };
