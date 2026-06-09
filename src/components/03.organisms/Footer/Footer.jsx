import { 
    FooterWrapper, 
    FooterSubwrapper, 
    MyDescriptionWrapper, 
    PCopyright, 
    PFooterTitle, 
    PMade, 
    PFooterDescription, 
    LinksWrapper, 
    LinkAnchor, 
    NetworkWrapper
} from "./Footer.styles";
import { 
    BsLinkedin, 
    BsTwitter, 
    BsYoutube, 
    BsWhatsapp 
} from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import {useTranslation} from "react-i18next";

const Footer = () => {
    const [t] = useTranslation("global");
    
    return (
        <FooterWrapper>
            <FooterSubwrapper>
                <MyDescriptionWrapper>
                    <PFooterTitle>
                        {t("footer.title")}
                    </PFooterTitle>
                    <PFooterDescription>
                        {t("footer.subtitle1")}
                    </PFooterDescription>
                    <PFooterDescription>
                        {t("footer.subtitle2")}
                    </PFooterDescription>
                    <PFooterDescription>
                        {t("footer.subtitle3")}
                    </PFooterDescription>
                </MyDescriptionWrapper>
                <LinksWrapper>
                    <LinkAnchor href='#aboutme'>
                        {t("footer.link1")}
                    </LinkAnchor>
                    <LinkAnchor href='#skills'>
                        {t("footer.link2")}
                    </LinkAnchor>
                    <LinkAnchor href='#services'>
                        {t("footer.link3")}
                    </LinkAnchor>
                    <LinkAnchor href='#portfolio'>
                        {t("footer.link4")}
                    </LinkAnchor>
                </LinksWrapper>
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
            </FooterSubwrapper>
            <PMade>
                {t("footer.madeBy")}
            </PMade>
            <PCopyright>
                &copy; 2022. {t("footer.copyright")}
            </PCopyright>
        </FooterWrapper>
    )
};

export {Footer};