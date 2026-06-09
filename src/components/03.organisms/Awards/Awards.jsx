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
} from "./Awards.styles";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useState } from "react";
import {useTranslation} from 'react-i18next';
import Democracia from 'assets/democracia.png';
import Nahui from 'assets/nahui.png';
import CIP from 'assets/cip.png';
import Sigfox1 from 'assets/sigfox1.png';
import Sigfox2 from 'assets/sigfox2.png';
import Hackster from 'assets/hackster.png';

const Awards = () => {
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
        <PortfolioWrapper>
            <PortfolioTitle>
                {t("acknowledgments.title")}
            </PortfolioTitle>
            <PortfolioSubtitle>
                {t("acknowledgments.subtitle")}
            </PortfolioSubtitle>
            <ProjectWrapper>
                <ArrowWrapper onClick={() => DecreaseIndex() }>
                    <IoIosArrowBack size={30} />
                </ArrowWrapper>
                {
                    project === 1 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={Democracia} alt='democracia' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("acknowledgments.project1.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("acknowledgments.project1.subtitle")}
                                </DescDescription>
                                <PortfolioButton 
                                    href={t("acknowledgments.project1.link")}
                                    target='_blank'
                                >
                                    {t("acknowledgments.project1.button")}
                                </PortfolioButton>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }

                {
                    project === 2 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={Nahui} alt='nahui' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("acknowledgments.project2.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("acknowledgments.project2.subtitle")}
                                </DescDescription>
                                <PortfolioButton 
                                    href={t("acknowledgments.project2.link")}
                                    target='_blank'
                                >
                                    {t("acknowledgments.project2.button")}
                                </PortfolioButton>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }
                {
                    project === 3 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={CIP} alt='cip' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("acknowledgments.project3.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("acknowledgments.project3.subtitle")}
                                </DescDescription>
                                <PortfolioButton 
                                    href={t("acknowledgments.project3.link")}
                                    target='_blank'
                                >
                                    {t("acknowledgments.project3.button")}
                                </PortfolioButton>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }
                {
                    project === 4 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={Sigfox1} alt='sigfox1' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("acknowledgments.project4.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("acknowledgments.project4.subtitle")}
                                </DescDescription>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }
                {
                    project === 5 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={Sigfox2} alt='sigfox2' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("acknowledgments.project5.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("acknowledgments.project5.subtitle")}
                                </DescDescription>
                            </DescWrapper>
                        </ProjectSubWrapper>
                        : ''
                }
                {
                    project === 6 ?
                        <ProjectSubWrapper>
                            <PortfolioImageWrapper>
                                <img src={Hackster} alt='hackster' width='100%' height='100%' />
                            </PortfolioImageWrapper>
                            <DescWrapper>
                                <DescTitle>
                                    {t("acknowledgments.project6.title")}
                                </DescTitle>
                                <DescDescription>
                                    {t("acknowledgments.project6.subtitle")}
                                </DescDescription>
                                <PortfolioButton 
                                    href={t("acknowledgments.project6.link")}
                                    target='_blank'
                                >
                                    {t("acknowledgments.project6.button")}
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

export { Awards };