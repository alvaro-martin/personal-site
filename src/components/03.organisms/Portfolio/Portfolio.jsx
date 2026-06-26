import { useTranslation } from 'react-i18next';
import content from 'data/content.json';
import { CardGrid } from 'components/02.molecules';

import Siemens from 'assets/siemens.webp';
import ComIoTPeru from 'assets/comiotperu-rpijam.webp';
import Hydroponic from 'assets/hydroponic.webp';
import AuboPlatform from 'assets/auboplatform.webp';
import OPCUA from 'assets/opcua.webp';
import UNAMAD from 'assets/unamad.webp';
import Oximetro from 'assets/oximetro.webp';
import Nahui from 'assets/nahui.webp';
import Sigfox1 from 'assets/sigfox1.webp';

const imageMap = {
    siemens: Siemens,
    comiotperu: ComIoTPeru,
    hydroponic: Hydroponic,
    auboplatform: AuboPlatform,
    opcua: OPCUA,
    unamad: UNAMAD,
    oximetro: Oximetro,
    nahui: Nahui,
    sigfox1: Sigfox1,
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
            <CardGrid items={items} ariaLabel="Portfolio projects" />
        </section>
    );
};

export { Portfolio };
