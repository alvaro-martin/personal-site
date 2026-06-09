import { useTranslation } from "react-i18next";
import { NewProjectButton, NewProjectImageWrapper, NewProjectTextWrapper, NewProjectWrapper, PNewProjectSubtitle, PNewProjectTitle } from "./NewProject.styles";
import { TiArrowRightOutline } from 'react-icons/ti';

const NewProject = () => {
    const [t] = useTranslation("global");
    
    return (
        <NewProjectWrapper>
            <NewProjectTextWrapper>
                <PNewProjectTitle>
                    {t("newProject.title")}
                </PNewProjectTitle>
                <PNewProjectSubtitle>
                    {t("newProject.subtitle")}
                </PNewProjectSubtitle>
                <NewProjectButton href='#contactme' >
                    {t("newProject.button")}
                    <TiArrowRightOutline size={'3rem'} />
                </NewProjectButton>
            </NewProjectTextWrapper>
            <NewProjectImageWrapper>
                <lottie-player 
                    src="https://assets10.lottiefiles.com/packages/lf20_q4v0ges6.json" 
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                >
                </lottie-player>
            </NewProjectImageWrapper>
        </NewProjectWrapper>
    )
};

export {NewProject};