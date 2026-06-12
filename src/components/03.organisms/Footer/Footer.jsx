import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import content from 'data/content.json';

const socialLabels = ['LinkedIn', 'GitHub'];

const socialIcons = [
    { icon: BsLinkedin, url: content.social.linkedin },
    { icon: FaGithub, url: content.social.github },
];

const Footer = () => {
    const [t] = useTranslation("global");

    return (
        <footer aria-label={t("footer.title")} className="bg-background5 flex flex-col items-center py-12 px-16 pt-4 md:px-4">
            <div className="flex flex-row justify-between mb-16 w-full md:flex-col md:items-center">
                <div className="flex flex-col justify-center my-0 mb-8 md:items-center">
                    <p className="text-text text-3xl font-bold mb-2">{t("footer.title")}</p>
                    <p className="text-text-muted text-lg">{t("footer.subtitle1")}</p>
                    <p className="text-text-muted text-lg">{t("footer.subtitle2")}</p>
                    <p className="text-text-muted text-lg">{t("footer.subtitle3")}</p>
                </div>
                <nav aria-label="Footer navigation" className="flex flex-row justify-center items-center my-0 mb-8 flex-wrap">
                    {content.footer.anchors.map((anchor, idx) => (
                        <a key={idx} href={anchor.href} className="text-text-muted text-xl no-underline px-4 cursor-pointer hover:text-text transition-colors duration-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">{t(anchor.labelKey)}</a>
                    ))}
                </nav>
                <div className="flex flex-row items-center justify-center">
                    {socialIcons.map(({ icon: Icon, url }, idx) => (
                        <a key={idx} href={url} target="_blank" rel="noopener noreferrer" aria-label={socialLabels[idx]} className="text-text-muted text-xl no-underline px-4 cursor-pointer hover:text-text transition-colors duration-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"><Icon /></a>
                    ))}
                </div>
            </div>
            <p className="text-lg text-text-muted m-4">{t("footer.madeBy")}</p>
            <p className="text-base text-text-accent m-8">&copy; {content.footer.copyrightYear}. {t("footer.copyright")}</p>
        </footer>
    )
};

export { Footer };
