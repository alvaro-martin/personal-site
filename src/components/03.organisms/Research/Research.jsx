import { useTranslation } from 'react-i18next';
import content from 'data/content.json';
import { CardGrid } from 'components/02.molecules';

import SanMarcos from 'assets/sanmarcos.png';
import SmartCampus from 'assets/smartcampus.png';
import LoRaWAN from 'assets/lorawan.png';
import Gesture from 'assets/covid.png';
import RSSI from 'assets/rssi.png';
import Bayes from 'assets/bayes.png';
import Piscigranja from 'assets/piscigranja.png';

const imageMap = {
    piscigranja: Piscigranja,
    sanmarcos: SanMarcos,
    smartcampus: SmartCampus,
    lorawan: LoRaWAN,
    covid: Gesture,
    rssi: RSSI,
    bayes: Bayes,
};

const Research = () => {
    const [t] = useTranslation("global");

    const items = content.research.projects.map(p => ({
        img: imageMap[p.imageKey],
        alt: p.alt,
        title: t(p.titleKey),
        subtitle: t(p.subtitleKey),
        link: p.linkKey ? t(p.linkKey) : undefined,
        button: p.buttonKey ? t(p.buttonKey) : undefined,
    }));

    return (
        <section id="research" aria-labelledby="research-heading" className="section-wrapper">
            <h1 id="research-heading" className="section-heading">
                {t("research.title")}
            </h1>
            <p className="section-subtitle">
                {t("research.subtitle")}
            </p>
            <CardGrid items={items} ariaLabel="Research projects" />
        </section>
    );
};

export { Research };
