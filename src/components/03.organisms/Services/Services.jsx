import { useTranslation } from "react-i18next";
import { MdOutlineEngineering, MdWeb, MdOutlineScience } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import { TiWeatherCloudy } from 'react-icons/ti';
import { RiBusWifiLine } from 'react-icons/ri';
import { FaRobot, FaRegCheckCircle } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useState } from "react";

const ServicePopup = ({ title, items, onClose }) => (
    <>
        <div className="w-[50rem] h-[40rem] rounded-[5rem] bg-[color:var(--color-background1)] fixed top-1/2 left-1/2 mt-[-20rem] ml-[-25rem] z-[2] flex flex-col max-[450px]:w-[300px] max-[450px]:ml-[-150px]">
            <p className="text-[color:var(--color-fontColor1)] font-bold text-[2.6rem] text-justify m-[2.5rem_0_2rem_2rem] h-[5.8rem] w-[30rem]">{title}</p>
            <div className="relative left-[44rem] bottom-[9rem] text-[color:var(--color-fontColor4)] cursor-pointer max-[450px]:left-[32rem]" onClick={onClose}>
                <IoMdCloseCircleOutline size={40} />
            </div>
            {items.map((item, idx) => (
                <div key={idx} className="flex flex-row items-center text-[color:var(--color-fontColor4)] my-4 mx-4">
                    <FaRegCheckCircle size={20} />
                    <p className="text-[color:var(--color-fontColor3)] text-[1.6rem] ml-4">{item}</p>
                </div>
            ))}
        </div>
        <div className="w-full h-screen bg-[rgba(0,0,0,0.7)] z-[1] fixed bottom-0 right-0" />
    </>
);

const Services = () => {
    const [t] = useTranslation('global');
    const [openService, setOpenService] = useState(null);

    const services = [
        { icon: MdOutlineEngineering, title: t("services.service1"), items: [t("services.service1-1"), t("services.service1-2"), t("services.service1-3")] },
        { icon: MdWeb, title: t("services.service2"), items: [t("services.service2-1"), t("services.service2-2"), t("services.service2-3")] },
        { icon: TiWeatherCloudy, title: t("services.service3"), items: [t("services.service3-1"), t("services.service3-2"), t("services.service3-3"), t("services.service3-4")] },
        { icon: RiBusWifiLine, title: t("services.service4"), items: [t("services.service4-1"), t("services.service4-2"), t("services.service4-3"), t("services.service4-4")] },
        { icon: FaRobot, title: t("services.service5"), items: [t("services.service5-1"), t("services.service5-2"), t("services.service5-3")] },
        { icon: MdOutlineScience, title: t("services.service6"), items: [t("services.service6-1"), t("services.service6-2"), t("services.service6-3")] },
    ];

    return (
        <section id='services' className="flex flex-col items-center my-16 pt-[9rem]">
            <h1 className="text-[color:var(--color-fontColor1)] font-bold text-[3rem]">{t("services.title")}</h1>
            <p className="text-[color:var(--color-fontColor3)] text-[1.5rem] my-4">{t("services.subtitle")}</p>

            {openService !== null && (
                <ServicePopup
                    title={services[openService].title}
                    items={services[openService].items}
                    onClose={() => setOpenService(null)}
                />
            )}

            <div className="flex flex-row items-center justify-center flex-wrap my-16 mb-8">
                {services.map((service, idx) => (
                    <div key={idx} className="flex flex-col justify-center text-[color:var(--color-fontColor4)] mx-8 mb-16 w-[20rem] h-[30rem] p-8 rounded-[1rem] shadow-[0px_0px_10px_1px_rgba(0,0,0,0.75)] max-[650px]:w-[15rem]">
                        <service.icon size={70} />
                        <p className="text-[color:var(--color-fontColor1)] font-bold text-[2.6rem] text-justify my-6 h-[5.8rem] max-[650px]:text-[1.5rem]">{service.title}</p>
                        <div className="flex flex-row items-center mt-12 cursor-pointer" onClick={() => setOpenService(idx)}>
                            <p className="text-[color:var(--color-fontColor4)] text-[1.5rem]">{t("services.viewMore")}</p>
                            <BsArrowRightShort size={20} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export { Services };