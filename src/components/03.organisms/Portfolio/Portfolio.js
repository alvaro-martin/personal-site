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
} from "./Portfolio.styles";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useState } from "react";
import {useTranslation} from 'react-i18next';
import Hydroponic from 'assets/hydroponic.jpg';
import AuboPlatform from 'assets/auboplatform.png';
import OPCUA from 'assets/opcua.png';
import UNAMAD from 'assets/unamad.jpg';
import Olla from 'assets/olla.jpg';
import Oximetro from 'assets/oximetro.png';

const Portfolio = () => {
    const [t] = useTranslation("global");
    const [project, setProject] = useState(1);
    const numberProjects = 6;

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
        <PortfolioWrapper id='portfolio'>
            <PortfolioTitle>
                {t("portfolio.title")}
            </PortfolioTitle>
            <PortfolioSubtitle>
                {t("portfolio.subtitle")}
            </PortfolioSubtitle>
            <ProjectWrapper>
                <ArrowWrapper onClick={() => DecreaseIndex() }>
                    <IoIosArrowBack size={30} />
                </ArrowWrapper>
                {
                    project === 1 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={Hydroponic} alt='hydroponic' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("portfolio.project1.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("portfolio.project1.subtitle")}
                                </DescDescription>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }

                {
                    project === 2 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={AuboPlatform} alt='aubo' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("portfolio.project2.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("portfolio.project2.subtitle")}
                                </DescDescription>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }
                {
                    project === 3 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={OPCUA} alt='OPCUA' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("portfolio.project3.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("portfolio.project3.subtitle")}
                                </DescDescription>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }
                {
                    project === 4 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={UNAMAD} alt='UNAMAD' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("portfolio.project4.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("portfolio.project4.subtitle")}
                                </DescDescription>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }
                {
                    project === 5 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={Olla} alt='olla' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("portfolio.project5.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("portfolio.project5.subtitle")}
                                </DescDescription>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }
                {
                    project === 6 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={Oximetro} alt='Oximetro' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("portfolio.project6.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("portfolio.project6.subtitle")}
                                </DescDescription>
                                <PortfolioButton 
                                    href={t("portfolio.project6.link")}
                                    target='_blank'
                                >
                                    {t("portfolio.project6.button")}
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

export { Portfolio };