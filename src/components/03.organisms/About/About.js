import { AboutImageWrapper, AboutSubWrapper, AboutWrapper, AboutButton, IntroductionWrapper, PAbout, SectionSubtitle, SectionTitle, NumbersWrapper, Number, PNumber, PNumberDescription } from "./About.styles";
import { useTranslation } from "react-i18next";
import Intercon from 'assets/intercon.png';
import {HiDownload} from 'react-icons/hi';

const About = () => {
    const [t] = useTranslation("global");

    return (
        <AboutWrapper id='aboutme'>
            <SectionTitle>
                {t("about.title")}
            </SectionTitle>
            <SectionSubtitle>
                {t("about.subtitle")}
            </SectionSubtitle>
            <AboutSubWrapper>
                <AboutImageWrapper>
                    <img 
                        src={Intercon} 
                        alt='intercon'
                        width='100%'
                        height='100%'
                    />
                </AboutImageWrapper>
                <IntroductionWrapper>
                    <PAbout>
                        {t("about.description")}
                    </PAbout>
                    <NumbersWrapper>
                        <Number>
                            <PNumber>
                                03+
                            </PNumber>
                            <PNumberDescription>
                                {t("about.subnumber1")}
                            </PNumberDescription>
                        </Number>
                        <Number>
                            <PNumber>
                                04+
                            </PNumber>
                            <PNumberDescription>
                                {t("about.subnumber2")}
                            </PNumberDescription>
                        </Number>
                        <Number>
                            <PNumber>
                                11+
                            </PNumber>
                            <PNumberDescription>
                                {t("about.subnumber3")}
                            </PNumberDescription>
                        </Number>
                    </NumbersWrapper>
                    <AboutButton 
                        href={t("about.cvLink")}
                        download
                        target='_blank'
                    >
                        {t("about.cv")}
                        <HiDownload size={'3rem'} />
                    </AboutButton>
                </IntroductionWrapper>
            </AboutSubWrapper>

        </AboutWrapper>
    );
};

export { About };