import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import content from 'data/content.json';

const socialLabels = ['LinkedIn', 'GitHub'];

const socialIcons = [
    { icon: BsLinkedin, url: content.social.linkedin },
    { icon: FaGithub, url: content.social.github },
];

const DinoStanding = ({ className }) => (
    <svg viewBox="0 0 144 144" width="53" height="53" fill="currentColor" className={className} aria-hidden="true">
        <path d="M80,100L76,100L76,114L72,114L72,120L68,120L68,124L64,124L64,140L68,140L68,144L60,144L60,132L56,132L56,128L52,128L52,132L48,132L48,136L44,136L44,140L48,140L48,144L40,144L40,128L36,128L36,124L32,124L32,120L28,120L28,116L24,116L24,112L20,112L20,88L24,88L24,96L28,96L28,100L32,100L32,104L40,104L40,100L44,100L44,96L50,96L50,92L56,92L56,88L60,88L60,62L64,62L64,58L96,58L96,62L100,62L100,80L80,80L80,84L92,84L92,88L76,88L76,96L84,96L84,104L80,104L80,100Z" />
    </svg>
);

const DinoRunning = ({ className }) => (
    <svg viewBox="0 0 144 144" width="53" height="53" fill="currentColor" className={className} aria-hidden="true">
        <path d="M80,100L76,100L76,114L72,114L72,120L68,120L68,124L64,124L68,140L72,140L72,144L64,144L64,132L56,132L56,128L52,128L52,132L48,132L44,136L40,136L40,140L44,140L44,144L36,144L36,128L36,124L32,124L32,120L28,120L28,116L24,116L24,112L20,112L20,88L24,88L24,96L28,96L28,100L32,100L32,104L40,104L40,100L44,100L44,96L50,96L50,92L56,92L56,88L60,88L60,62L64,62L64,58L96,58L96,62L100,62L100,80L80,80L80,84L92,84L92,88L76,88L76,96L84,96L84,104L80,104L80,100Z" />
    </svg>
);

const Footer = () => {
    const [t] = useTranslation("global");
    const currentYear = new Date().getFullYear();

    return (
        <footer aria-label={t("footer.title")} className="site-footer relative flex flex-col items-center pt-16 pb-6 px-6 md:px-16 overflow-hidden">
            {/* Dino animation track - positioned at top */}
            <div className="dino-track text-white" aria-hidden="true">
                <div className="dino-jumper">
                    <div className="dino-sprite">
                        <DinoStanding className="dino-frame-1" />
                        <DinoRunning className="dino-frame-2" />
                    </div>
                </div>
            </div>

            {/* Fixed binary obstacles */}
            <span className="dino-obstacle font-mono text-white/20 text-xs leading-none" style={{ left: '15%' }} aria-hidden="true">
                <span className="block">0</span><span className="block">1</span><span className="block">0</span>
            </span>
            <span className="dino-obstacle font-mono text-white/20 text-xs leading-none" style={{ left: '35%' }} aria-hidden="true">
                <span className="block">1</span><span className="block">0</span>
            </span>
            <span className="dino-obstacle font-mono text-white/20 text-xs leading-none" style={{ left: '55%' }} aria-hidden="true">
                <span className="block">0</span><span className="block">1</span><span className="block">0</span><span className="block">1</span>
            </span>
            <span className="dino-obstacle font-mono text-white/20 text-xs leading-none" style={{ left: '75%' }} aria-hidden="true">
                <span className="block">1</span><span className="block">0</span>
            </span>

            <div className="flex flex-row justify-between mb-4 w-full md:flex-col md:items-center relative z-10">
                <div className="flex flex-col justify-center my-0 mb-8 md:items-center">
                    <p className="footer-text text-3xl font-bold mb-2">{t("footer.title")}</p>
                    <p className="footer-text text-xl font-bold">{t("hero.title1")}</p>
                    <p className="footer-text-muted text-lg">{t("hero.title2")}</p>
                    <p className="footer-text-muted text-lg">{t("hero.title3")}</p>
                    <p className="footer-text-muted text-lg">{t("hero.title4")}</p>
                </div>
                <nav aria-label="Footer navigation" className="flex flex-row justify-center items-center my-0 mb-8 flex-wrap">
                    {content.footer.anchors.map((anchor, idx) => (
                        <a key={idx} href={anchor.href} className="footer-text-muted footer-text-hover text-xl no-underline px-4 cursor-pointer transition-colors duration-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">{t(anchor.labelKey)}</a>
                    ))}
                </nav>
                <div className="flex flex-row items-center justify-center">
                    {socialIcons.map(({ icon: Icon, url }, idx) => (
                        <a key={idx} href={url} target="_blank" rel="noopener noreferrer" aria-label={socialLabels[idx]} className="footer-text-muted footer-text-hover text-xl no-underline px-4 cursor-pointer transition-colors duration-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"><Icon /></a>
                    ))}
                </div>
            </div>
            <p className="footer-text-muted text-lg mt-1 mb-0 relative z-10">{t("footer.madeBy")}</p>
            <p className="footer-text text-base mt-1 mb-0 relative z-10">&copy; {currentYear}. {t("footer.copyright")}</p>
        </footer>
    )
};

export { Footer };
