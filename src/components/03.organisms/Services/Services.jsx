import { useTranslation } from "react-i18next";
import { MdOutlineEngineering, MdWeb, MdOutlineScience } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import { TiWeatherCloudy } from 'react-icons/ti';
import { RiBusWifiLine } from 'react-icons/ri';
import { FaRobot, FaRegCheckCircle } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useState, useEffect, useCallback } from "react";

const ServicePopup = ({ title, items, onClose }) => {
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') onClose();
    }, [onClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [handleKeyDown]);

    return (
        <>
            <div
                className="overlay-backdrop"
                onClick={onClose}
                aria-hidden="true"
            />
            <div
                role="dialog"
                aria-modal="true"
                aria-label={title}
                className="modal-content w-full max-w-[50rem] p-8 mx-4"
            >
                <div className="flex flex-row items-start justify-between mb-6">
                    <h3 className="text-text text-2xl font-bold leading-tight pr-4">
                        {title}
                    </h3>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close dialog"
                        className="icon-btn shrink-0"
                    >
                        <IoMdCloseCircleOutline size={40} />
                    </button>
                </div>
                <ul className="list-none">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex flex-row items-center my-4 gap-3">
                            <FaRegCheckCircle size={20} className="text-text-accent shrink-0" aria-hidden="true" />
                            <p className="text-text-muted text-lg">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

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
        <section id="services" aria-labelledby="services-heading" className="section-wrapper py-16">
            <h1 id="services-heading" className="section-heading">
                {t("services.title")}
            </h1>
            <p className="section-subtitle">
                {t("services.subtitle")}
            </p>

            {openService !== null && (
                <ServicePopup
                    title={services[openService].title}
                    items={services[openService].items}
                    onClose={() => setOpenService(null)}
                />
            )}

            <div className="flex flex-row items-center justify-center flex-wrap my-16 gap-8">
                {services.map((service, idx) => (
                    <article
                        key={idx}
                        className="card flex flex-col justify-center text-text-accent w-full max-w-[20rem] min-h-[30rem]"
                    >
                        <service.icon size={70} aria-hidden="true" />
                        <h2 className="text-text text-2xl font-bold leading-snug my-6 min-h-[5.8rem]">
                            {service.title}
                        </h2>
                        <button
                            type="button"
                            onClick={() => setOpenService(idx)}
                            className="flex flex-row items-center mt-auto cursor-pointer text-text-accent text-base transition-colors duration-normal hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2"
                        >
                            {t("services.viewMore")}
                            <BsArrowRightShort size={20} aria-hidden="true" />
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
};

export { Services };
