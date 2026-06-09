import { useTranslation } from "react-i18next";
import { BiChevronDownSquare } from 'react-icons/bi';
import { MdOutlineEngineering, MdWeb } from 'react-icons/md';
import { useState } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { RiBusWifiLine } from "react-icons/ri";
import { FaRobot, FaFlagUsa } from "react-icons/fa";

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
    const [openFrontend, setOpenFrontend] = useState(false);
    const [openEngineer, setOpenEngineer] = useState(false);
    const [openBackend, setOpenBackend] = useState(false);
    const [openIoT, setOpenIoT] = useState(false);
    const [openML, setOpenML] = useState(false);
    const [openEnglish, setOpenEnglish] = useState(false);

    const engineerSkills = [
        { title: t("skills.engineer.maintenance"), percent: '40%' },
        { title: t("skills.engineer.opc"), percent: '40%' },
        { title: t("skills.engineer.digsilent"), percent: '50%' },
        { title: t("skills.engineer.design"), percent: '60%' },
        { title: t("skills.engineer.power"), percent: '50%' },
        { title: t("skills.engineer.plc"), percent: '30%' },
        { title: t("skills.engineer.autocad"), percent: '60%' },
        { title: t("skills.engineer.solidworks"), percent: '60%' },
    ];

    const frontendSkills = [
        { title: t("skills.frontend.html"), percent: '80%' },
        { title: t("skills.frontend.js"), percent: '70%' },
        { title: t("skills.frontend.css"), percent: '90%' },
        { title: t("skills.frontend.react"), percent: '70%' },
        { title: t("skills.frontend.styled-components"), percent: '80%' },
        { title: t("skills.frontend.testing"), percent: '30%' },
    ];

    const backendSkills = [
        { title: t("skills.backend.node"), percent: '40%' },
        { title: t("skills.backend.python"), percent: '60%' },
        { title: t("skills.backend.firebase"), percent: '60%' },
        { title: t("skills.backend.amplify"), percent: '70%' },
        { title: t("skills.backend.aws"), percent: '50%' },
        { title: t("skills.backend.iac-aws"), percent: '50%' },
        { title: t("skills.backend.iac-terraform"), percent: '30%' },
        { title: t("skills.backend.gcp"), percent: '40%' },
        { title: t("skills.backend.az"), percent: '30%' },
        { title: t("skills.backend.bash"), percent: '60%' },
    ];

    const iotSkills = [
        { title: t("skills.iot.wifi"), percent: '80%' },
        { title: t("skills.iot.sigfox"), percent: '80%' },
        { title: t("skills.iot.lorawan"), percent: '80%' },
        { title: t("skills.iot.https"), percent: '80%' },
        { title: t("skills.iot.mqtt"), percent: '80%' },
        { title: t("skills.iot.micros"), percent: '50%' },
        { title: t("skills.iot.C"), percent: '40%' },
    ];

    const mlSkills = [
        { title: t("skills.ml.tf"), percent: '60%' },
        { title: t("skills.ml.tfjs"), percent: '45%' },
        { title: t("skills.ml.tinyml"), percent: '60%' },
    ];

    const englishSkills = [
        { title: t("skills.english.reading"), percent: '90%' },
        { title: t("skills.english.listening"), percent: '90%' },
        { title: t("skills.english.writing"), percent: '80%' },
        { title: t("skills.english.speaking"), percent: '80%' },
    ];

    return (
        <section id='skills' className="flex flex-col items-center pt-[9rem]">
            <h1 className="text-[color:var(--color-fontColor1)] font-bold text-[3rem]">{t("skills.title")}</h1>
            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] my-4">{t("skills.subtitle")}</p>
            <div className="flex flex-row justify-center flex-wrap">
                <SkillSection icon={MdOutlineEngineering} titleKey={t("skills.engineer.title")} subtitleKey={t("skills.engineer.subtitle")} skills={engineerSkills} isOpen={openEngineer} onToggle={() => setOpenEngineer(!openEngineer)} />
                <SkillSection icon={MdWeb} titleKey={t("skills.frontend.title")} subtitleKey={t("skills.frontend.subtitle")} skills={frontendSkills} isOpen={openFrontend} onToggle={() => setOpenFrontend(!openFrontend)} />
                <SkillSection icon={TiWeatherCloudy} titleKey={t("skills.backend.title")} subtitleKey={t("skills.backend.subtitle")} skills={backendSkills} isOpen={openBackend} onToggle={() => setOpenBackend(!openBackend)} />
                <SkillSection icon={RiBusWifiLine} titleKey={t("skills.iot.title")} subtitleKey={t("skills.iot.subtitle")} skills={iotSkills} isOpen={openIoT} onToggle={() => setOpenIoT(!openIoT)} />
                <SkillSection icon={FaRobot} titleKey={t("skills.ml.title")} subtitleKey={t("skills.ml.subtitle")} skills={mlSkills} isOpen={openML} onToggle={() => setOpenML(!openML)} />
                <SkillSection icon={FaFlagUsa} titleKey={t("skills.english.title")} subtitleKey={t("skills.english.subtitle")} skills={englishSkills} isOpen={openEnglish} onToggle={() => setOpenEnglish(!openEnglish)} />
            </div>
        </section>
    );
};

export { Skills };