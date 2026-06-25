import { useTranslation } from 'react-i18next';
import content from 'data/content.json';
import { CardGrid } from 'components/02.molecules';

import MastersThesis from 'assets/masters-thesis.webp';
import SmartParking from 'assets/smartparking-paper.webp';
import SanMarcos from 'assets/sanmarcos.webp';
import SmartCampus from 'assets/smartcampus.webp';
import LoRaWAN from 'assets/lorawan.webp';
import Gesture from 'assets/covid.webp';
import RSSI from 'assets/rssi.webp';
import Bayes from 'assets/bayes.webp';

const imageMap = {
    masters: MastersThesis,
    smartparking: SmartParking,
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
