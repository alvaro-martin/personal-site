import { useTranslation } from "react-i18next";
import { PServiceTitle, SectionSubtitle, SectionTitle, ServicesCard, ServicesCardsWrapper, ServicesWrapper, PViewMore, PViewMoreWrapper, ServicePopupWrapper, PopupBackground, PopupTitle, PopupDataWrapper, PopupData, CrossPopup } from "./Services.styles";
import { MdOutlineEngineering, MdWeb, MdOutlineScience } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import { TiWeatherCloudy } from 'react-icons/ti';
import { RiBusWifiLine } from 'react-icons/ri';
import { FaRobot, FaRegCheckCircle } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useState } from "react";

const Services = () => {
    const [t] = useTranslation('global');
    const [isOpenService1, setIsOpenService1] = useState(false);
    const [isOpenService2, setIsOpenService2] = useState(false);
    const [isOpenService3, setIsOpenService3] = useState(false);
    const [isOpenService4, setIsOpenService4] = useState(false);
    const [isOpenService5, setIsOpenService5] = useState(false);
    const [isOpenService6, setIsOpenService6] = useState(false);

    return (
        <ServicesWrapper id='services'>
            <SectionTitle>
                {t("services.title")}
            </SectionTitle>
            <SectionSubtitle>
                {t("services.subtitle")}
            </SectionSubtitle>
            {
                isOpenService1 ?
                    <>
                        <ServicePopupWrapper>
                            <PopupTitle>{t("services.service1")}</PopupTitle>
                            <CrossPopup onClick={() => setIsOpenService1(!isOpenService1)}>
                                <IoMdCloseCircleOutline size={40} />
                            </CrossPopup>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service1-1")}
                                </PopupData>
                            </PopupDataWrapper>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service1-2")}
                                </PopupData>
                            </PopupDataWrapper>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service1-3")}
                                </PopupData>
                            </PopupDataWrapper>
                        </ServicePopupWrapper>
                        <PopupBackground />
                    </>
                    :
                    ''
            }
            {
                isOpenService2 ?
                    <>
                        <ServicePopupWrapper>
                            <PopupTitle>{t("services.service2")}</PopupTitle>
                            <CrossPopup onClick={() => setIsOpenService2(!isOpenService2)}>
                                <IoMdCloseCircleOutline size={40} />
                            </CrossPopup>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service2-1")}
                                </PopupData>
                            </PopupDataWrapper>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service2-2")}
                                </PopupData>
                            </PopupDataWrapper>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service2-3")}
                                </PopupData>
                            </PopupDataWrapper>
                        </ServicePopupWrapper>
                        <PopupBackground />
                    </>
                    :
                    ''
            }
            {
                isOpenService3 ?
                    <>
                        <ServicePopupWrapper>
                            <PopupTitle>{t("services.service3")}</PopupTitle>
                            <CrossPopup onClick={() => setIsOpenService3(!isOpenService3)}>
                                <IoMdCloseCircleOutline size={40} />
                            </CrossPopup>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service3-1")}
                                </PopupData>
                            </PopupDataWrapper>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service3-2")}
                                </PopupData>
                            </PopupDataWrapper>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service3-3")}
                                </PopupData>
                            </PopupDataWrapper>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service3-4")}
                                </PopupData>
                            </PopupDataWrapper>
                        </ServicePopupWrapper>
                        <PopupBackground />
                    </>
                    :
                    ''
            }
            {
                isOpenService4 ?
                    <>
                        <ServicePopupWrapper>
                            <PopupTitle>{t("services.service4")}</PopupTitle>
                            <CrossPopup onClick={() => setIsOpenService4(!isOpenService4)}>
                                <IoMdCloseCircleOutline size={40} />
                            </CrossPopup>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service4-1")}
                                </PopupData>
                            </PopupDataWrapper>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service4-2")}
                                </PopupData>
                            </PopupDataWrapper>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service4-3")}
                                </PopupData>
                            </PopupDataWrapper>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service4-4")}
                                </PopupData>
                            </PopupDataWrapper>
                        </ServicePopupWrapper>
                        <PopupBackground />
                    </>
                    :
                    ''
            }
            {
                isOpenService5 ?
                    <>
                        <ServicePopupWrapper>
                            <PopupTitle>{t("services.service5")}</PopupTitle>
                            <CrossPopup onClick={() => setIsOpenService5(!isOpenService5)}>
                                <IoMdCloseCircleOutline size={40} />
                            </CrossPopup>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service5-1")}
                                </PopupData>
                            </PopupDataWrapper>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service5-2")}
                                </PopupData>
                            </PopupDataWrapper>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service5-3")}
                                </PopupData>
                            </PopupDataWrapper>
                        </ServicePopupWrapper>
                        <PopupBackground />
                    </>
                    :
                    ''
            }
            {
                isOpenService6 ?
                    <>
                        <ServicePopupWrapper>
                            <PopupTitle>{t("services.service6")}</PopupTitle>
                            <CrossPopup onClick={() => setIsOpenService6(!isOpenService6)}>
                                <IoMdCloseCircleOutline size={40} />
                            </CrossPopup>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service6-1")}
                                </PopupData>
                            </PopupDataWrapper>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service6-2")}
                                </PopupData>
                            </PopupDataWrapper>
                            <PopupDataWrapper>
                                <FaRegCheckCircle size={20} />
                                <PopupData>
                                    {t("services.service6-3")}
                                </PopupData>
                            </PopupDataWrapper>
                        </ServicePopupWrapper>
                        <PopupBackground />
                    </>
                    :
                    ''
            }
            <ServicesCardsWrapper>
                <ServicesCard>
                    <MdOutlineEngineering size={70} />
                    <PServiceTitle>
                        {t("services.service1")}
                    </PServiceTitle>
                    <PViewMoreWrapper onClick={() => setIsOpenService1(!isOpenService1)}>
                        <PViewMore>
                            {t("services.viewMore")}
                        </PViewMore>
                        <BsArrowRightShort size={20} />
                    </PViewMoreWrapper>
                </ServicesCard>
                <ServicesCard>
                    <MdWeb size={70} />
                    <PServiceTitle>
                        {t("services.service2")}
                    </PServiceTitle>
                    <PViewMoreWrapper onClick={() => setIsOpenService2(!isOpenService2)}>
                        <PViewMore>
                            {t("services.viewMore")}
                        </PViewMore>
                        <BsArrowRightShort size={20} />
                    </PViewMoreWrapper>
                </ServicesCard>
                <ServicesCard>
                    <TiWeatherCloudy size={70} />
                    <PServiceTitle>
                        {t("services.service3")}
                    </PServiceTitle>
                    <PViewMoreWrapper onClick={() => setIsOpenService3(!isOpenService3)}>
                        <PViewMore>
                            {t("services.viewMore")}
                        </PViewMore>
                        <BsArrowRightShort size={20} />
                    </PViewMoreWrapper>
                </ServicesCard>
                <ServicesCard>
                    <RiBusWifiLine size={70} />
                    <PServiceTitle>
                        {t("services.service4")}
                    </PServiceTitle>
                    <PViewMoreWrapper onClick={() => setIsOpenService4(!isOpenService4)}>
                        <PViewMore>
                            {t("services.viewMore")}
                        </PViewMore>
                        <BsArrowRightShort size={20} />
                    </PViewMoreWrapper>
                </ServicesCard>
                <ServicesCard>
                    <FaRobot size={70} />
                    <PServiceTitle>
                        {t("services.service5")}
                    </PServiceTitle>
                    <PViewMoreWrapper onClick={() => setIsOpenService5(!isOpenService5)}>
                        <PViewMore>
                            {t("services.viewMore")}
                        </PViewMore>
                        <BsArrowRightShort size={20} />
                    </PViewMoreWrapper>
                </ServicesCard>
                <ServicesCard>
                    <MdOutlineScience size={70} />
                    <PServiceTitle>
                        {t("services.service6")}
                    </PServiceTitle>
                    <PViewMoreWrapper onClick={() => setIsOpenService6(!isOpenService6)}>
                        <PViewMore>
                            {t("services.viewMore")}
                        </PViewMore>
                        <BsArrowRightShort size={20} />
                    </PViewMoreWrapper>
                </ServicesCard>
            </ServicesCardsWrapper>
        </ServicesWrapper>
    );
};

export { Services };