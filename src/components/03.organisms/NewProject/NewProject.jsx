import { useTranslation } from "react-i18next";
import { TiArrowRightOutline } from 'react-icons/ti';

const NewProject = () => {
    const [t] = useTranslation("global");
    
    return (
        <section className="flex flex-row items-center justify-between bg-[color:var(--color-background2)] w-[70rem] h-[30rem] rounded-[3rem] my-16 max-[600px]:flex-col max-[600px]:w-[30rem] max-[600px]:h-[54rem]">
            <div className="flex flex-col justify-center">
                <p className="font-bold text-[3rem] text-[color:var(--color-fontColor2)] my-8 mx-8 mb-4">{t("newProject.title")}</p>
                <p className="text-[1.7rem] text-[color:var(--color-fontColor2)] my-8 mx-8 mb-4">{t("newProject.subtitle")}</p>
                <a href='#contactme' className="bg-[color:var(--color-background4)] text-[color:var(--color-fontColor4)] font-bold text-[2rem] rounded-[0.5rem] border-none w-[17rem] h-[6rem] my-4 ml-8 flex flex-row items-center justify-center no-underline cursor-pointer">
                    {t("newProject.button")}
                    <TiArrowRightOutline size={'3rem'} />
                </a>
            </div>
            <div className="w-[500px] mr-[-4rem] max-[560px]:w-[250px]">
                <lottie-player 
                    src="https://assets10.lottiefiles.com/packages/lf20_q4v0ges6.json" 
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                >
                </lottie-player>
            </div>
        </section>
    )
};

export {NewProject};