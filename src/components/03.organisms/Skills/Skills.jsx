import { useTranslation } from "react-i18next";
import { BiChevronDownSquare } from 'react-icons/bi';
import { MdOutlineEngineering, MdWeb } from 'react-icons/md';
import { TiWeatherCloudy } from "react-icons/ti";
import { RiBusWifiLine } from "react-icons/ri";
import { FaRobot, FaFlagUsa } from "react-icons/fa";
import { useState } from "react";
import content from 'data/content.json';

const iconMap = {
    MdOutlineEngineering,
    MdWeb,
    TiWeatherCloudy,
    RiBusWifiLine,
    FaRobot,
    FaFlagUsa,
};

const ProgressBar = ({ percent }) => (
    <div
        className="w-[35rem] h-4 mt-2"
        style={{
            background: `linear-gradient(to right, var(--color-background2) ${percent}, var(--color-background3) ${percent})`
        }}
    />
);

const SkillSection = ({ icon: Icon, titleKey, subtitleKey, skills, isOpen, onToggle }) => (
    <div className="flex flex-col m-8">
        <div className="flex flex-row items-center justify-between w-[35rem]">
            <div className="flex flex-row items-center text-[color:var(--color-fontColor4)]">
                <Icon size={35} />
                <div className="flex flex-col text-[color:var(--color-fontColor1)] ml-4">
                    <p className="font-bold text-[2rem]">{titleKey}</p>
                    <p className="text-[color:var(--color-fontColor3)] text-[1.2rem]">{subtitleKey}</p>
                </div>
            </div>
            <div className="cursor-pointer text-[color:var(--color-fontColor4)]" onClick={onToggle}>
                <BiChevronDownSquare size={25} />
            </div>
        </div>
        {isOpen && (
            <div className="flex flex-col items-center">
                {skills.map((skill, idx) => (
                    <div key={idx} className="flex flex-col items-center my-4">
                        <div className="flex flex-row items-center justify-between w-[35rem]">
                            <p className="font-bold text-[1.4rem] text-[color:var(--color-fontColor1)]">{skill.title}</p>
                            <p className="text-[1.4rem] text-[color:var(--color-fontColor3)]">{skill.percent}</p>
                        </div>
                        <ProgressBar percent={skill.percent} />
                    </div>
                ))}
            </div>
        )}
    </div>
);

const Skills = () => {
    const [t] = useTranslation("global");
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (idx) => {
        setOpenSections(prev => ({ ...prev, [idx]: !prev[idx] }));
    };

    return (
        <section id='skills' className="flex flex-col items-center pt-[9rem]">
            <h1 className="text-[color:var(--color-fontColor1)] font-bold text-[3rem]">{t("skills.title")}</h1>
            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] my-4">{t("skills.subtitle")}</p>
            <div className="flex flex-row justify-center flex-wrap">
                {content.skills.categories.map((category, idx) => {
                    const Icon = iconMap[category.icon];
                    const mappedSkills = category.skills.map(s => ({
                        title: t(s.titleKey),
                        percent: s.percent,
                    }));
                    return (
                        <SkillSection
                            key={idx}
                            icon={Icon}
                            titleKey={t(category.titleKey)}
                            subtitleKey={t(category.subtitleKey)}
                            skills={mappedSkills}
                            isOpen={!!openSections[idx]}
                            onToggle={() => toggleSection(idx)}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export { Skills };
