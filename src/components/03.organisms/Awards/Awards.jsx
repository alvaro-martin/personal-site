import { useTranslation } from 'react-i18next';
import content from 'data/content.json';
import { CardGrid } from 'components/02.molecules';

import Democracia from 'assets/democracia.png';
import Nahui from 'assets/nahui.png';
import CIP from 'assets/cip.png';
import Sigfox1 from 'assets/sigfox1.png';
import Sigfox2 from 'assets/sigfox2.png';
import Hackster from 'assets/hackster.png';

const imageMap = {
    democracia: Democracia,
    nahui: Nahui,
    cip: CIP,
    sigfox1: Sigfox1,
    sigfox2: Sigfox2,
    hackster: Hackster,
};

const Awards = () => {
    const [t] = useTranslation("global");

    const items = content.awards.projects.map(p => ({
        img: imageMap[p.imageKey],
        alt: p.alt,
        title: t(p.titleKey),
        subtitle: t(p.subtitleKey),
        link: p.linkKey ? t(p.linkKey) : undefined,
        button: p.buttonKey ? t(p.buttonKey) : undefined,
    }));

    return (
        <section id="awards" aria-labelledby="awards-heading" className="section-wrapper">
            <h1 id="awards-heading" className="section-heading">
                {t("acknowledgments.title")}
            </h1>
            <p className="section-subtitle">
                {t("acknowledgments.subtitle")}
            </p>
            <CardGrid items={items} ariaLabel="Awards and recognition" />
        </section>
    );
};

export { Awards };
