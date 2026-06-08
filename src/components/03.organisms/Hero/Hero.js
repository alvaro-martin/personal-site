import { useTranslation } from "react-i18next";
import { 
    ButtonHero, 
    H1Hero, 
    HeroWrapper, 
    ImageWrapper, 
    PDescription, 
    PTitle, 
    TextWrapper,
    LinkAnchor,
    NetworkWrapper
} from "./Hero.styles";
import Photo from 'assets/me2.png';
import {TiArrowRightOutline} from 'react-icons/ti';
import { 
    BsLinkedin, 
    BsTwitter, 
    BsYoutube, 
    BsWhatsapp 
} from 'react-icons/bs';
import {BiWorld} from 'react-icons/bi';

const Hero = () => {
    const [t] = useTranslation("global");
    
    return (
        <HeroWrapper id='home'>
            <TextWrapper>
                <H1Hero>{t("hero.hello")}</H1Hero>
                <PTitle>{t("hero.title1")}</PTitle>
                <PTitle>{t("hero.title2")}</PTitle>
                <PTitle>{t("hero.title3")}</PTitle>
                <PDescription>{t("hero.description")}</PDescription>
                <ButtonHero href="#contactme">
                    {t("hero.button")}
                    <TiArrowRightOutline size={'3rem'} />
                </ButtonHero> 
            </TextWrapper>
            <ImageWrapper>
                <img src={Photo} alt='photo_x' width='85%' height='85%' />
            </ImageWrapper>
            <NetworkWrapper>
                    <LinkAnchor
                        href='https://www.linkedin.com/in/almartinuni/'
                        target='_blank'
                    >
                        <BsLinkedin />
                    </LinkAnchor>
                    <LinkAnchor
                        href='https://twitter.com/AuboIoT'
                        target='_blank'
                    >
                        <BsTwitter />
                    </LinkAnchor>
                    <LinkAnchor
                        href='https://www.youtube.com/channel/UCe9h3MH2VjcRy5csMZDcWWg'
                        target='_blank'
                    >
                        <BsYoutube />
                    </LinkAnchor>
                    <LinkAnchor 
                        href='https://wa.me/message/PPPUMYTCGAVEI1'
                        target='_blank'
                    >
                        <BsWhatsapp />
                    </LinkAnchor>
                    <LinkAnchor 
                        href="https://aubo.io" 
                        target='_blank'
                    >
                        <BiWorld />
                    </LinkAnchor>
                </NetworkWrapper>
       </HeroWrapper>
    );
};

export {Hero};