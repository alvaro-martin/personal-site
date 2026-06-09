import { useTranslation } from "react-i18next";
import Intercon from 'assets/intercon.png';
import {HiDownload} from 'react-icons/hi';

const About = () => {
    const [t] = useTranslation("global");

    return (
        <section id='aboutme' className="flex flex-col items-center my-0 mb-8 pt-[9rem]">
            <h1 className="text-[color:var(--color-fontColor1)] font-bold text-[3rem]">{t("about.title")}</h1>
            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] my-4">{t("about.subtitle")}</p>
            <div className="flex flex-row items-center justify-center my-8 max-[778px]:flex-col">
                <div className="w-[250px] h-[350px] m-4 [&>img]:rounded-xl">
                    <img src={Intercon} alt='intercon' width='100%' height='100%' />
                </div>
                <div className="flex flex-col justify-between mx-8">
                    <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] w-[35rem] my-0 mb-8">{t("about.description")}</p>
                    <div className="flex flex-row items-center mb-8">
                        <div className="flex flex-col items-center justify-center mx-4 text-[color:var(--color-fontColor3)] text-[1.5rem] w-[10rem]">
                            <p className="text-[color:var(--color-fontColor1)] font-bold text-[2.8rem] text-center mb-[0.6rem]">03+</p>
                            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] text-center">{t("about.subnumber1")}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center mx-4 text-[color:var(--color-fontColor3)] text-[1.5rem] w-[10rem]">
                            <p className="text-[color:var(--color-fontColor1)] font-bold text-[2.8rem] text-center mb-[0.6rem]">04+</p>
                            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] text-center">{t("about.subnumber2")}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center mx-4 text-[color:var(--color-fontColor3)] text-[1.5rem] w-[10rem]">
                            <p className="text-[color:var(--color-fontColor1)] font-bold text-[2.8rem] text-center mb-[0.6rem]">11+</p>
                            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] text-center">{t("about.subnumber3")}</p>
                        </div>
                    </div>
                    <a href={t("about.cvLink")} download target='_blank' className="bg-[color:var(--color-background2)] text-[color:var(--color-fontColor2)] font-bold text-[2rem] rounded-[0.5rem] border-none w-[19rem] h-[6rem] flex flex-row items-center justify-center no-underline cursor-pointer">
                        {t("about.cv")}
                        <HiDownload size={'3rem'} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export { About };