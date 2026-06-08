import {
    SectionSubtitle,
    SectionTitle,
    SingleSkillSubwrapper,
    SkillsSubwrapper,
    SkillsWrapper,
    SkillHeader,
    SkillsListWrapper,
    SingleSkillWrapper,
    SkillSubHeader,
    SkillSubSubHeader,
    PTitle,
    Psubtitle,
    ProgressBar,
    SingleSkillSubwrapperText,
    PSingleSkillTitle,
    PSingleSkillPercent,
    SquareDiv
} from "./Skills.styles";
import { useTranslation } from "react-i18next";
import { BiChevronDownSquare } from 'react-icons/bi';
import { MdOutlineEngineering, MdWeb } from 'react-icons/md';
import { useState } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { RiBusWifiLine } from "react-icons/ri";
import { FaRobot, FaFlagUsa } from "react-icons/fa";

const Skills = () => {
    const [t] = useTranslation("global");
    const [openFrontend, setOpenFrontend] = useState(false);
    const [openEngineer, setOpenEngineer] = useState(false);
    const [openBackend, setOpenBackend] = useState(false);
    const [openIoT, setOpenIoT] = useState(false);
    const [openML, setOpenML] = useState(false);
    const [openEnglish, setOpenEnglish] = useState(false);

    return (
        <SkillsWrapper id='skills'>
            <SectionTitle>
                {t("skills.title")}
            </SectionTitle>
            <SectionSubtitle>
                {t("skills.subtitle")}
            </SectionSubtitle>
            <SkillsSubwrapper>
                <SingleSkillSubwrapper>
                    <SkillHeader>
                        <SkillSubHeader>
                            <MdOutlineEngineering size={35} />
                            <SkillSubSubHeader>
                                <PTitle>
                                    {t("skills.engineer.title")}
                                </PTitle>
                                <Psubtitle>
                                    {t("skills.engineer.subtitle")}
                                </Psubtitle>
                            </SkillSubSubHeader>
                        </SkillSubHeader>
                        <SquareDiv onClick={() => setOpenEngineer(!openEngineer)}>
                            <BiChevronDownSquare size={25} />
                        </SquareDiv>
                    </SkillHeader>
                    {
                        openEngineer ?

                            <SkillsListWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.engineer.maintenance")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            40%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='40%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.engineer.opc")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            40%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='40%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.engineer.digsilent")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            50%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='50%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.engineer.design")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            60%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='60%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.engineer.power")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            50%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='50%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.engineer.plc")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            30%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='30%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.engineer.autocad")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            60%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='60%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.engineer.solidworks")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            60%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='60%' />
                                </SingleSkillWrapper>
                            </SkillsListWrapper>

                            : ''
                    }

                </SingleSkillSubwrapper>

                <SingleSkillSubwrapper>
                    <SkillHeader>
                        <SkillSubHeader>
                            <MdWeb size={35} />
                            <SkillSubSubHeader>
                                <PTitle>
                                    {t("skills.frontend.title")}
                                </PTitle>
                                <Psubtitle>
                                    {t("skills.frontend.subtitle")}
                                </Psubtitle>
                            </SkillSubSubHeader>
                        </SkillSubHeader>
                        <SquareDiv onClick={() => setOpenFrontend(!openFrontend)}>
                            <BiChevronDownSquare size={25} />
                        </SquareDiv>
                    </SkillHeader>
                    {
                        openFrontend ?

                            <SkillsListWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.frontend.html")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            80%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='80%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.frontend.js")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            70%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='70%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.frontend.css")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            90%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='90%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.frontend.react")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            70%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='70%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.frontend.styled-components")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            80%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='80%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.frontend.testing")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            30%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='30%' />
                                </SingleSkillWrapper>
                            </SkillsListWrapper>

                            : ''
                    }

                </SingleSkillSubwrapper>

                <SingleSkillSubwrapper>
                    <SkillHeader>
                        <SkillSubHeader>
                            <TiWeatherCloudy size={35} />
                            <SkillSubSubHeader>
                                <PTitle>
                                    {t("skills.backend.title")}
                                </PTitle>
                                <Psubtitle>
                                    {t("skills.backend.subtitle")}
                                </Psubtitle>
                            </SkillSubSubHeader>
                        </SkillSubHeader>
                        <SquareDiv onClick={() => setOpenBackend(!openBackend)}>
                            <BiChevronDownSquare size={25} />
                        </SquareDiv>
                    </SkillHeader>
                    {
                        openBackend ?

                            <SkillsListWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.backend.node")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            40%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='40%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.backend.python")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            60%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='60%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.backend.firebase")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            60%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='60%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.backend.amplify")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            70%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='70%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.backend.aws")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            50%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='50%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.backend.iac-aws")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            50%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='50%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.backend.iac-terraform")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            30%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='30%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.backend.gcp")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            40%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='40%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.backend.az")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            30%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='30%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.backend.bash")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            60%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='60%' />
                                </SingleSkillWrapper>
                            </SkillsListWrapper>

                            : ''
                    }

                </SingleSkillSubwrapper>

                <SingleSkillSubwrapper>
                    <SkillHeader>
                        <SkillSubHeader>
                            <RiBusWifiLine size={35} />
                            <SkillSubSubHeader>
                                <PTitle>
                                    {t("skills.iot.title")}
                                </PTitle>
                                <Psubtitle>
                                    {t("skills.iot.subtitle")}
                                </Psubtitle>
                            </SkillSubSubHeader>
                        </SkillSubHeader>
                        <SquareDiv onClick={() => setOpenIoT(!openIoT)}>
                            <BiChevronDownSquare size={25} />
                        </SquareDiv>
                    </SkillHeader>
                    {
                        openIoT ?

                            <SkillsListWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.iot.wifi")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            80%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='80%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.iot.sigfox")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            80%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='80%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.iot.lorawan")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            80%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='80%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.iot.https")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            80%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='80%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.iot.mqtt")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            80%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='80%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.iot.micros")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            50%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='50%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.iot.C")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            40%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='40%' />
                                </SingleSkillWrapper>
                                
                                
                            </SkillsListWrapper>

                            : ''
                    }

                </SingleSkillSubwrapper>

                <SingleSkillSubwrapper>
                    <SkillHeader>
                        <SkillSubHeader>
                            <FaRobot size={35} />
                            <SkillSubSubHeader>
                                <PTitle>
                                    {t("skills.ml.title")}
                                </PTitle>
                                <Psubtitle>
                                    {t("skills.ml.subtitle")}
                                </Psubtitle>
                            </SkillSubSubHeader>
                        </SkillSubHeader>
                        <SquareDiv onClick={() => setOpenML(!openML)}>
                            <BiChevronDownSquare size={25} />
                        </SquareDiv>
                    </SkillHeader>
                    {
                        openML ?

                            <SkillsListWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.ml.tf")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            60%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='60%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.ml.tfjs")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            45%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='45%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.ml.tinyml")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            60%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='60%' />
                                </SingleSkillWrapper>
                                
                            </SkillsListWrapper>

                            : ''
                    }

                </SingleSkillSubwrapper>

                <SingleSkillSubwrapper>
                    <SkillHeader>
                        <SkillSubHeader>
                            <FaFlagUsa size={35} />
                            <SkillSubSubHeader>
                                <PTitle>
                                    {t("skills.english.title")}
                                </PTitle>
                                <Psubtitle>
                                    {t("skills.english.subtitle")}
                                </Psubtitle>
                            </SkillSubSubHeader>
                        </SkillSubHeader>
                        <SquareDiv onClick={() => setOpenEnglish(!openEnglish)}>
                            <BiChevronDownSquare size={25} />
                        </SquareDiv>
                    </SkillHeader>
                    {
                        openEnglish ?

                            <SkillsListWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.english.reading")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            90%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='90%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.english.listening")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            90%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='90%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.english.writing")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            80%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='80%' />
                                </SingleSkillWrapper>
                                <SingleSkillWrapper>
                                    <SingleSkillSubwrapperText>
                                        <PSingleSkillTitle>
                                            {t("skills.english.speaking")}
                                        </PSingleSkillTitle>
                                        <PSingleSkillPercent>
                                            80%
                                        </PSingleSkillPercent>
                                    </SingleSkillSubwrapperText>
                                    <ProgressBar percent='80%' />
                                </SingleSkillWrapper>
                                
                            </SkillsListWrapper>

                            : ''
                    }

                </SingleSkillSubwrapper>

            </SkillsSubwrapper>
        </SkillsWrapper>
    );
};

export { Skills };