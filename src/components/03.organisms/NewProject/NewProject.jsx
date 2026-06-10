import { useTranslation } from "react-i18next";
import { TiArrowRightOutline } from 'react-icons/ti';

const NewProject = () => {
    const [t] = useTranslation("global");

    return (
        <section
            aria-labelledby="newproject-heading"
            className="flex flex-col md:flex-row items-center justify-between bg-primary w-full max-w-4xl rounded-2xl my-16 overflow-hidden mx-6"
        >
            <div className="flex flex-col justify-center p-8 md:p-10">
                <h2
                    id="newproject-heading"
                    className="font-bold text-3xl text-text-inverse leading-tight mb-2"
                >
                    {t("newProject.title")}
                </h2>
                <p className="text-lg text-text-inverse opacity-90 mb-6 leading-relaxed max-w-[50ch]">
                    {t("newProject.subtitle")}
                </p>
                <a
                    href="#contactme"
                    className="inline-flex items-center justify-center gap-2 bg-background4 text-text-accent font-bold text-xl rounded-md border-none w-full md:w-[17rem] h-16 no-underline cursor-pointer transition-all duration-normal ease-default hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2"
                >
                    {t("newProject.button")}
                    <TiArrowRightOutline size="3rem" aria-hidden="true" />
                </a>
            </div>
            <div
                className="w-full max-w-[500px] md:mr-[-2rem] flex items-center justify-center"
                aria-hidden="true"
            >
                <lottie-player
                    src="https://assets10.lottiefiles.com/packages/lf20_q4v0ges6.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                />
            </div>
        </section>
    );
};

export { NewProject };
