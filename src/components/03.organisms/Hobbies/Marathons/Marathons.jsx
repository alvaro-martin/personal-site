import { useTranslation } from 'react-i18next';
import { useScrollReveal } from 'hooks/useScrollReveal';

const MONTHS_EN = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

const MONTHS_ES = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

const marathons = [
    { src: '/personal-site/marathons/2026-05-24.webp', date: '2026-05-24' },
    { src: '/personal-site/marathons/2025-12-07.webp', date: '2025-12-07' },
    { src: '/personal-site/marathons/2025-06-22.webp', date: '2025-06-22' },
];

const Marathons = () => {
    const [t, i18n] = useTranslation("global");
    const ref = useScrollReveal();

    const months = i18n.language === 'es' ? MONTHS_ES : MONTHS_EN;

    const formatDate = (dateStr) => {
        const [year, month] = dateStr.split('-');
        const monthIndex = parseInt(month, 10) - 1;
        return `${months[monthIndex]} ${year}`;
    };

    return (
        <div
            ref={ref}
            role="region"
            aria-label="Marathons gallery"
            className="w-full"
        >
            <h2 className="text-text-accent text-xl font-bold text-center mb-6">
                {t("hobbies.marathons")}
            </h2>
            <div className="hobbies-masonry px-4 sm:px-6 lg:px-8">
                {marathons.map((marathon, idx) => (
                    <div
                        key={marathon.date}
                        className="hobbies-card card-reveal"
                        style={{ animationDelay: `${idx * 80}ms` }}
                    >
                        <img
                            src={marathon.src}
                            alt={`Marathon - ${formatDate(marathon.date)}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto object-cover"
                        />
                        <p className="hobbies-date">{formatDate(marathon.date)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { Marathons };
