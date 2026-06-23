import { useTranslation } from 'react-i18next';
import { Paintings } from './Paintings/Paintings';
import { Marathons } from './Marathons/Marathons';

const Hobbies = () => {
    const [t] = useTranslation("global");

    return (
        <section id="hobbies" aria-labelledby="hobbies-heading" className="section-wrapper">
            <h1 id="hobbies-heading" className="section-heading">
                {t("hobbies.title")}
            </h1>
            <p className="section-subtitle">
                {t("hobbies.subtitle")}
            </p>
            <Paintings />
            <div className="mt-16">
                <Marathons />
            </div>
            {/* Future: <Books />, <Stories /> */}
        </section>
    );
};

export { Hobbies };
