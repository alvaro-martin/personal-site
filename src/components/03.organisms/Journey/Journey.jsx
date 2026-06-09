import { useTranslation } from "react-i18next";
import { BsCalendar3 } from 'react-icons/bs';
import content from 'data/content.json';

const Journey = () => {
    const [t] = useTranslation("global");

    return (
        <section className="flex flex-col items-center my-16 pt-16">
            <h1 className="text-[color:var(--color-fontColor1)] font-bold text-[3rem]">{t("experience.title")}</h1>
            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] my-4">{t("experience.subtitle")}</p>
            <div className="grid grid-cols-[1fr_5rem_1fr] w-[50rem] max-[650px]:w-[30rem]">
                {content.journey.entries.map((exp, idx) => (
                    <div key={idx} style={{ gridColumn: `${exp.gcs} / ${exp.gce}`, gridRow: `${exp.grs} / ${exp.gre}` }} className="flex flex-col h-[10rem]">
                        <p className="text-[color:var(--color-fontColor1)] text-[2rem] font-bold max-[650px]:text-[1.5rem]">{t(exp.titleKey)}</p>
                        <p className="text-[color:var(--color-fontColor3)] text-[1.8rem] mb-2 max-[650px]:text-[1.5rem]">{t(exp.companyKey)}</p>
                        <div className="flex flex-row items-center">
                            <BsCalendar3 size={20} />
                            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] ml-2">{t(exp.dateKey)}</p>
                        </div>
                    </div>
                ))}
                {content.journey.entries.map((exp, idx) => (
                    <div key={`dec-${idx}`} style={{ gridColumn: '2 / 3', gridRow: `${exp.decoratorGrs} / ${exp.decoratorGre}` }} className="flex flex-col items-center">
                        <div className="w-[2.3rem] h-[2.3rem] rounded-full bg-[color:var(--color-background2)]" />
                        <div className="bg-[color:var(--color-background2)] w-[0.2rem] h-[10rem]" />
                    </div>
                ))}
            </div>
        </section>
    )
};

export { Journey };
