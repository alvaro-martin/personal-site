import { useTranslation } from "react-i18next";
import content from 'data/content.json';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

import Photo from 'assets/me2.png';

const socialLinks = [
    { icon: BsLinkedin, url: content.social.linkedin, label: "LinkedIn" },
    { icon: FaGithub, url: content.social.github, label: "GitHub" },
];

const Hero = () => {
    const [t] = useTranslation("global");

    return (
        <section
            id="home"
            aria-labelledby="hero-heading"
            className="w-full flex flex-col items-center mt-20 pt-20 md:flex-row md:justify-center md:items-center gap-6 md:gap-6"
        >
            <div className="flex flex-col w-fit px-6 md:px-4">
                <h1
                    id="hero-heading"
                    className="text-text text-3xl md:text-5xl font-bold mb-4 leading-tight"
                >
                    <span className="hero-name-line1">{t("hero.hello1")}</span>
                    <br />
                    <span className="hero-name-line2">{t("hero.hello2")}</span>
                </h1>
                <p className="hero-title text-text text-lg md:text-xl font-medium leading-snug">
                    {t("hero.title1")}
                </p>
                <p className="hero-title text-text-muted text-base md:text-lg font-medium leading-snug">
                    {t("hero.title2")}
                </p>
                <p className="hero-title text-text-muted text-base md:text-lg font-medium leading-snug">
                    {t("hero.title3")}
                </p>
                <p className="hero-title text-text-muted text-base md:text-lg font-medium leading-snug">
                    {t("hero.title4")}
                </p>
                <nav
                    aria-label="Social media links"
                    className="hero-social flex flex-row items-center gap-4 mt-6"
                >
                    {socialLinks.map(({ icon: Icon, url, label }) => (
                        <a
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-text-accent text-xl no-underline px-2 cursor-pointer transition-colors duration-normal hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2"
                        >
                            <Icon aria-hidden="true" />
                        </a>
                    ))}
                </nav>
            </div>

            <div
                className="photo-container flex-shrink-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] photo-float"
                aria-hidden="true"
                style={{ animationDelay: '3400ms' }}
            >
                <div className="photo-inner w-full h-full flex justify-center items-center">
                    <img
                        src={Photo}
                        alt={content.hero.photoAlt}
                        width="85%"
                        height="85%"
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
};

export { Hero };
