import { useTranslation } from 'react-i18next';
import content from 'data/content.json';
import { Carousel } from 'components/02.molecules';

import Hydroponic from 'assets/hydroponic.jpg';
import AuboPlatform from 'assets/auboplatform.png';
import OPCUA from 'assets/opcua.png';
import UNAMAD from 'assets/unamad.jpg';
import Olla from 'assets/olla.jpg';
import Oximetro from 'assets/oximetro.png';

const imageMap = {
    hydroponic: Hydroponic,
    auboplatform: AuboPlatform,
    opcua: OPCUA,
    unamad: UNAMAD,
    olla: Olla,
    oximetro: Oximetro,
};

const Portfolio = () => {
    const [t] = useTranslation("global");

    const items = content.portfolio.projects.map(p => ({
        img: imageMap[p.imageKey],
        alt: p.alt,
        title: t(p.titleKey),
        subtitle: t(p.subtitleKey),
        link: p.linkKey ? t(p.linkKey) : undefined,
        button: p.buttonKey ? t(p.buttonKey) : undefined,
    }));

    return (
        <section id="portfolio" aria-labelledby="portfolio-heading" className="section-wrapper">
            <h1 id="portfolio-heading" className="section-heading">
                {t("portfolio.title")}
            </h1>
            <p className="section-subtitle">
                {t("portfolio.subtitle")}
            </p>
            <Carousel items={items} ariaLabel="Portfolio carousel" />
        </section>
    );
};

export { Portfolio };
