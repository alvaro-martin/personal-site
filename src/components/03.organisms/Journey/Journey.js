import { useTranslation } from "react-i18next";
import {
    Circle,
    CompanySubtitle,
    Date,
    DateWrapper,
    DecoratorWrapper,
    ExperienceSubwrapper,
    ExperienceTitle,
    ExperienceWrapper,
    JourneySubtitle,
    JourneyTitle,
    JourneyWrapper,
    Stick
} from "./Journey.styles";
import { BsCalendar3 } from 'react-icons/bs';

const Journey = () => {
    const [t] = useTranslation("global");

    return (
        <JourneyWrapper>
            <JourneyTitle>{t("experience.title")}</JourneyTitle>
            <JourneySubtitle>{t("experience.subtitle")}</JourneySubtitle>
            <ExperienceWrapper>
                    <ExperienceSubwrapper gcs='1' gce='2' grs='1' gre='2'>
                        <ExperienceTitle>{t("experience.aubo.title")}</ExperienceTitle>
                        <CompanySubtitle>{t("experience.aubo.company")}</CompanySubtitle>
                        <DateWrapper>
                            <BsCalendar3 size={20} />
                            <Date>{t("experience.aubo.date")}</Date>
                        </DateWrapper>
                    </ExperienceSubwrapper>
                    <DecoratorWrapper gcs='2' gce='3' grs='1' gre='2'>
                        <Circle />
                        <Stick />
                    </DecoratorWrapper>
                    <ExperienceSubwrapper gcs='3' gce='4' grs='2' gre='3'>
                        <ExperienceTitle>{t("experience.iotperu.title")}</ExperienceTitle>
                        <CompanySubtitle>{t("experience.iotperu.company")}</CompanySubtitle>
                        <DateWrapper>
                            <BsCalendar3 size={20} />
                            <Date>{t("experience.iotperu.date")}</Date>
                        </DateWrapper>
                    </ExperienceSubwrapper>
                    <DecoratorWrapper gcs='2' gce='3' grs='2' gre='3'>
                        <Circle />
                        <Stick />
                    </DecoratorWrapper>
                    <ExperienceSubwrapper gcs='1' gce='2' grs='3' gre='4'>
                        <ExperienceTitle>{t("experience.bigdata.title")}</ExperienceTitle>
                        <CompanySubtitle>{t("experience.bigdata.company")}</CompanySubtitle>
                        <DateWrapper>
                            <BsCalendar3 size={20} />
                            <Date>{t("experience.bigdata.date")}</Date>
                        </DateWrapper>
                    </ExperienceSubwrapper>
                    <DecoratorWrapper gcs='2' gce='3' grs='3' gre='4'>
                        <Circle />
                        <Stick />
                    </DecoratorWrapper>
                    <ExperienceSubwrapper gcs='3' gce='4' grs='4' gre='5'>
                        <ExperienceTitle>{t("experience.iotunmsm.title")}</ExperienceTitle>
                        <CompanySubtitle>{t("experience.iotunmsm.company")}</CompanySubtitle>
                        <DateWrapper>
                            <BsCalendar3 size={20} />
                            <Date>{t("experience.iotunmsm.date")}</Date>
                        </DateWrapper>
                    </ExperienceSubwrapper>
                    <DecoratorWrapper gcs='2' gce='3' grs='4' gre='5'>
                        <Circle />
                        <Stick />
                    </DecoratorWrapper>
                    <ExperienceSubwrapper gcs='1' gce='2' grs='5' gre='6'>
                        <ExperienceTitle>{t("experience.priconsa.title")}</ExperienceTitle>
                        <CompanySubtitle>{t("experience.priconsa.company")}</CompanySubtitle>
                        <DateWrapper>
                            <BsCalendar3 size={20} />
                            <Date>{t("experience.priconsa.date")}</Date>
                        </DateWrapper>
                    </ExperienceSubwrapper>
                    <DecoratorWrapper gcs='2' gce='3' grs='5' gre='6'>
                        <Circle />
                        <Stick />
                    </DecoratorWrapper>
                    <ExperienceSubwrapper gcs='3' gce='4' grs='6' gre='7'>
                        <ExperienceTitle>{t("experience.agp.title")}</ExperienceTitle>
                        <CompanySubtitle>{t("experience.agp.company")}</CompanySubtitle>
                        <DateWrapper>
                            <BsCalendar3 size={20} />
                            <Date>{t("experience.agp.date")}</Date>
                        </DateWrapper>
                    </ExperienceSubwrapper>
                    <DecoratorWrapper gcs='2' gce='3' grs='6' gre='7'>
                        <Circle />
                        <Stick />
                    </DecoratorWrapper>
                    <ExperienceSubwrapper gcs='1' gce='2' grs='7' gre='8'>
                        <ExperienceTitle>{t("experience.milpo.title")}</ExperienceTitle>
                        <CompanySubtitle>{t("experience.milpo.company")}</CompanySubtitle>
                        <DateWrapper>
                            <BsCalendar3 size={20} />
                            <Date>{t("experience.milpo.date")}</Date>
                        </DateWrapper>
                    </ExperienceSubwrapper>
                    <DecoratorWrapper gcs='2' gce='3' grs='7' gre='8'>
                        <Circle />
                        <Stick />
                    </DecoratorWrapper>
                    <ExperienceSubwrapper gcs='3' gce='4' grs='8' gre='9'>
                        <ExperienceTitle>{t("experience.uni.title")}</ExperienceTitle>
                        <CompanySubtitle>{t("experience.uni.company")}</CompanySubtitle>
                        <DateWrapper>
                            <BsCalendar3 size={20} />
                            <Date>{t("experience.uni.date")}</Date>
                        </DateWrapper>
                    </ExperienceSubwrapper>
                    <DecoratorWrapper gcs='2' gce='3' grs='8' gre='9'>
                        <Circle />
                        <Stick />
                    </DecoratorWrapper>
            </ExperienceWrapper>
        </JourneyWrapper>
    )
};

export { Journey };