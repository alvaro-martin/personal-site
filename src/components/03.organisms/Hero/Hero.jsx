import { useTranslation } from "react-i18next";
import content from 'data/content.json';
import { TiArrowRightOutline } from 'react-icons/ti';
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
            className="w-full flex flex-row justify-center items-center mt-20 pt-20 md:flex-col-reverse animate-fadeIn"
        >
            <div className="flex flex-col w-full max-w-[37rem] px-6 md:px-4">
                <h1
                    id="hero-heading"
                    className="text-text text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                    {t("hero.hello")}
                </h1>
                <p className="text-text-muted text-xl md:text-2xl font-medium leading-snug">
                    {t("hero.title1")}
                </p>
                <p className="text-text-muted text-xl md:text-2xl font-medium leading-snug">
                    {t("hero.title2")}
                </p>
                <p className="text-text-muted text-xl md:text-2xl font-medium leading-snug">
                    {t("hero.title3")}
                </p>
                <p className="text-text-muted text-base mt-4 mb-6 leading-relaxed max-w-[65ch]">
                    {t("hero.description")}
                </p>
                <a
                    href="#contactme"
                    className="btn-primary w-full md:w-auto"
                >
                    {t("hero.button")}
                    <TiArrowRightOutline size="3rem" aria-hidden="true" />
                </a>
            </div>

            <div
                className="w-[250px] h-[250px] m-8 animate-[clipImage_1s_infinite] bg-primary flex justify-center items-center md:w-[200px] md:h-[200px]"
                aria-hidden="true"
            >
                <img
                    src={Photo}
                    alt={content.hero.photoAlt}
                    width="85%"
                    height="85%"
                    loading="eager"
                    decoding="async"
                />
            </div>

            <nav
                aria-label="Social media links"
                className="flex flex-col items-center justify-center md:flex-row"
            >
                {socialLinks.map(({ icon: Icon, url, label }) => (
                    <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="text-text-accent text-xl no-underline px-4 cursor-pointer my-1_5 transition-colors duration-normal hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2"
                    >
                        <Icon aria-hidden="true" />
                    </a>
                ))}
            </nav>
        </section>
    );
};

export { Hero };
