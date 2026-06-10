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
        className="w-full max-w-[35rem] h-4 mt-2 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={parseInt(percent)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${percent} proficiency`}
        style={{
            background: `linear-gradient(to right, var(--color-primary) ${percent}, var(--color-background-secondary) ${percent})`
        }}
    />
);

const SkillSection = ({ icon: Icon, titleKey, subtitleKey, skills, isOpen, onToggle }) => (
    <div className="flex flex-col m-8">
        <div className="flex flex-row items-center justify-between w-full max-w-[35rem]">
            <div className="flex flex-row items-center text-text-accent">
                <Icon size={35} aria-hidden="true" />
                <div className="flex flex-col ml-4">
                    <p className="font-bold text-xl text-text">{titleKey}</p>
                    <p className="text-text-muted text-xs">{subtitleKey}</p>
                </div>
            </div>
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${titleKey} skills`}
                className="icon-btn"
            >
                <BiChevronDownSquare size={25} />
            </button>
        </div>
        {isOpen && (
            <div className="flex flex-col items-center mt-4 animate-slideDown">
                {skills.map((skill, idx) => (
                    <div key={idx} className="flex flex-col items-center my-4 w-full max-w-[35rem]">
                        <div className="flex flex-row items-center justify-between w-full">
                            <p className="font-bold text-sm text-text">{skill.title}</p>
                            <p className="text-sm text-text-muted">{skill.percent}</p>
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
        <section id="skills" aria-labelledby="skills-heading" className="section-wrapper">
            <h1 id="skills-heading" className="section-heading">
                {t("skills.title")}
            </h1>
            <p className="section-subtitle">
                {t("skills.subtitle")}
            </p>
            <div className="flex flex-row justify-center flex-wrap gap-4">
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
