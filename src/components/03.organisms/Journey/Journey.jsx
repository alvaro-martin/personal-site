import { useTranslation } from "react-i18next";
import { BsCalendar3 } from 'react-icons/bs';

const experiences = [
    { titleKey: "experience.aubo.title", companyKey: "experience.aubo.company", dateKey: "experience.aubo.date", gcs: 1, gce: 2, grs: 1, gre: 2, decoratorGrs: 1, decoratorGre: 2 },
    { titleKey: "experience.iotperu.title", companyKey: "experience.iotperu.company", dateKey: "experience.iotperu.date", gcs: 3, gce: 4, grs: 2, gre: 3, decoratorGrs: 2, decoratorGre: 3 },
    { titleKey: "experience.bigdata.title", companyKey: "experience.bigdata.company", dateKey: "experience.bigdata.date", gcs: 1, gce: 2, grs: 3, gre: 4, decoratorGrs: 3, decoratorGre: 4 },
    { titleKey: "experience.iotunmsm.title", companyKey: "experience.iotunmsm.company", dateKey: "experience.iotunmsm.date", gcs: 3, gce: 4, grs: 4, gre: 5, decoratorGrs: 4, decoratorGre: 5 },
    { titleKey: "experience.priconsa.title", companyKey: "experience.priconsa.company", dateKey: "experience.priconsa.date", gcs: 1, gce: 2, grs: 5, gre: 6, decoratorGrs: 5, decoratorGre: 6 },
    { titleKey: "experience.agp.title", companyKey: "experience.agp.company", dateKey: "experience.agp.date", gcs: 3, gce: 4, grs: 6, gre: 7, decoratorGrs: 6, decoratorGre: 7 },
    { titleKey: "experience.milpo.title", companyKey: "experience.milpo.company", dateKey: "experience.milpo.date", gcs: 1, gce: 2, grs: 7, gre: 8, decoratorGrs: 7, decoratorGre: 8 },
    { titleKey: "experience.uni.title", companyKey: "experience.uni.company", dateKey: "experience.uni.date", gcs: 3, gce: 4, grs: 8, gre: 9, decoratorGrs: 8, decoratorGre: 9 },
];

const Journey = () => {
    const [t] = useTranslation("global");

    return (
        <section className="flex flex-col items-center my-16 pt-16">
            <h1 className="text-[color:var(--color-fontColor1)] font-bold text-[3rem]">{t("experience.title")}</h1>
            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] my-4">{t("experience.subtitle")}</p>
            <div className="grid grid-cols-[1fr_5rem_1fr] w-[50rem] max-[650px]:w-[30rem]">
                {experiences.map((exp, idx) => (
                    <div key={idx} style={{ gridColumn: `${exp.gcs} / ${exp.gce}`, gridRow: `${exp.grs} / ${exp.gre}` }} className="flex flex-col h-[10rem]">
                        <p className="text-[color:var(--color-fontColor1)] text-[2rem] font-bold max-[650px]:text-[1.5rem]">{t(exp.titleKey)}</p>
                        <p className="text-[color:var(--color-fontColor3)] text-[1.8rem] mb-2 max-[650px]:text-[1.5rem]">{t(exp.companyKey)}</p>
                        <div className="flex flex-row items-center">
                            <BsCalendar3 size={20} />
                            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] ml-2">{t(exp.dateKey)}</p>
                        </div>
                    </div>
                ))}
                {experiences.map((exp, idx) => (
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