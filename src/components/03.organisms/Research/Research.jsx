import {
    ArrowWrapper,
    DescDescription,
    DescTitle,
    DescWrapper,
    PortfolioButton,
    PortfolioImageWrapper,
    PortfolioSubtitle,
    PortfolioTitle,
    PortfolioWrapper,
    ProjectSubWrapper,
    ProjectWrapper
} from "./Research.styles";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useState } from "react";
import {useTranslation} from 'react-i18next';
import SanMarcos from 'assets/sanmarcos.png';
import SmartCampus from 'assets/smartcampus.png';
import LoRaWAN from 'assets/lorawan.png';
import Gesture from 'assets/covid.png';
import RSSI from 'assets/rssi.png';
import Bayes from 'assets/bayes.png';
import Piscigranja from 'assets/piscigranja.png';

const Research = () => {
    const [t] = useTranslation("global");
    const [project, setProject] = useState(1);
    const numberProjects = 7;

    const DecreaseIndex = () => {
        if(project === 1){
            setProject(project + numberProjects - 1);
        } else {
            setProject(project - 1);
        }
        console.log(project);
    };

    const IncreaseIndex = () => {
        if(project === numberProjects){
            setProject(project - numberProjects +1);
        } else {
            setProject(project + 1);
        }
        console.log(project);
    }

    return (
        <PortfolioWrapper>
            <PortfolioTitle>
                {t("research.title")}
            </PortfolioTitle>
            <PortfolioSubtitle>
                {t("research.subtitle")}
            </PortfolioSubtitle>
            <ProjectWrapper>
                <ArrowWrapper onClick={() => DecreaseIndex() }>
                    <IoIosArrowBack size={30} />
                </ArrowWrapper>
                {
                    project === 1 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={Piscigranja} alt='piscigranja' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("research.project1.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("research.project1.subtitle")}
                                </DescDescription>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }

                {
                    project === 2 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={SanMarcos} alt='sanmarcos' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("research.project2.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("research.project2.subtitle")}
                                </DescDescription>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }
                {
                    project === 3 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={SmartCampus} alt='smartcampus' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("research.project3.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("research.project3.subtitle")}
                                </DescDescription>
                                <PortfolioButton 
                                    href={t("research.project3.link")}
                                    target='_blank'
                                >
                                    {t("research.project3.button")}
                                </PortfolioButton>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }
                {
                    project === 4 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={LoRaWAN} alt='lorawan' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("research.project4.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("research.project4.subtitle")}
                                </DescDescription>
                                <PortfolioButton 
                                    href={t("research.project4.link")}
                                    target='_blank'
                                >
                                    {t("research.project4.button")}
                                </PortfolioButton>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }
                {
                    project === 5 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={Gesture} alt='gesture' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("research.project5.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("research.project5.subtitle")}
                                </DescDescription>
                                <PortfolioButton 
                                    href={t("research.project5.link")}
                                    target='_blank'
                                >
                                    {t("research.project5.button")}
                                </PortfolioButton>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }
                {
                    project === 6 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={RSSI} alt='rssi' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("research.project6.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("research.project6.subtitle")}
                                </DescDescription>
                                <PortfolioButton 
                                    href={t("research.project6.link")}
                                    target='_blank'
                                >
                                    {t("research.project6.button")}
                                </PortfolioButton>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }
                {
                    project === 7 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={Bayes} alt='bayes' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("research.project7.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("research.project7.subtitle")}
                                </DescDescription>
                                <PortfolioButton 
                                    href={t("research.project7.link")}
                                    target='_blank'
                                >
                                    {t("research.project7.button")}
                                </PortfolioButton>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }
                <ArrowWrapper onClick={() => IncreaseIndex()}>
                    <IoIosArrowForward size={30} />
                </ArrowWrapper>
            </ProjectWrapper>
        </PortfolioWrapper>
    );
};

export { Research };