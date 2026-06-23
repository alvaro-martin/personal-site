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

const paintings = [
    { src: '/personal-site/paintings/2026-06-10.webp', date: '2026-06-10' },
    { src: '/personal-site/paintings/2026-04-24.webp', date: '2026-04-24' },
    { src: '/personal-site/paintings/2026-04-17.webp', date: '2026-04-17' },
    { src: '/personal-site/paintings/2026-03-12.webp', date: '2026-03-12' },
    { src: '/personal-site/paintings/2026-02-23.webp', date: '2026-02-23' },
    { src: '/personal-site/paintings/2026-01-25.webp', date: '2026-01-25' },
    { src: '/personal-site/paintings/2025-12-21.webp', date: '2025-12-21' },
    { src: '/personal-site/paintings/2025-12-12.webp', date: '2025-12-12' },
    { src: '/personal-site/paintings/2025-12-09.webp', date: '2025-12-09' },
    { src: '/personal-site/paintings/2025-12-05.webp', date: '2025-12-05' },
    { src: '/personal-site/paintings/2025-10-12.webp', date: '2025-10-12' },
    { src: '/personal-site/paintings/2025-10-05.webp', date: '2025-10-05' },
    { src: '/personal-site/paintings/2025-10-01.webp', date: '2025-10-01' },
    { src: '/personal-site/paintings/2025-09-28.webp', date: '2025-09-28' },
    { src: '/personal-site/paintings/2025-09-21.webp', date: '2025-09-21' },
    { src: '/personal-site/paintings/2025-09-14.webp', date: '2025-09-14' },
    { src: '/personal-site/paintings/2025-08-31.webp', date: '2025-08-31' },
    { src: '/personal-site/paintings/2025-08-18.webp', date: '2025-08-18' },
    { src: '/personal-site/paintings/2025-07-23.webp', date: '2025-07-23' },
    { src: '/personal-site/paintings/2025-07-22.webp', date: '2025-07-22' },
    { src: '/personal-site/paintings/2025-07-01.webp', date: '2025-07-01' },
    { src: '/personal-site/paintings/2025-06-30.webp', date: '2025-06-30' },
    { src: '/personal-site/paintings/2025-05-06.webp', date: '2025-05-06' },
    { src: '/personal-site/paintings/2025-04-28.webp', date: '2025-04-28' },
    { src: '/personal-site/paintings/2025-04-21.webp', date: '2025-04-21' },
    { src: '/personal-site/paintings/2025-04-14.webp', date: '2025-04-14' },
    { src: '/personal-site/paintings/2025-03-30.webp', date: '2025-03-30' },
    { src: '/personal-site/paintings/2025-01-07.webp', date: '2025-01-07' },
    { src: '/personal-site/paintings/2024-12-29.webp', date: '2024-12-29' },
    { src: '/personal-site/paintings/2024-12-24.webp', date: '2024-12-24' },
    { src: '/personal-site/paintings/2024-12-20.webp', date: '2024-12-20' },
    { src: '/personal-site/paintings/2024-12-05.webp', date: '2024-12-05' },
    { src: '/personal-site/paintings/2024-11-30.webp', date: '2024-11-30' },
    { src: '/personal-site/paintings/2024-11-09.webp', date: '2024-11-09' },
    { src: '/personal-site/paintings/2024-10-30.webp', date: '2024-10-30' },
    { src: '/personal-site/paintings/2024-10-19.webp', date: '2024-10-19' },
    { src: '/personal-site/paintings/2024-09-22.webp', date: '2024-09-22' },
    { src: '/personal-site/paintings/2024-09-15.webp', date: '2024-09-15' },
];

const Paintings = () => {
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
            aria-label="Paintings gallery"
            className="w-full"
        >
            <h2 className="text-text-accent text-xl font-bold text-center mb-6">
                {t("hobbies.paintings")}
            </h2>
            <div className="hobbies-masonry px-4 sm:px-6 lg:px-8">
                {paintings.map((painting, idx) => (
                    <div
                        key={painting.date}
                        className="hobbies-card card-reveal"
                        style={{ animationDelay: `${idx * 80}ms` }}
                    >
                        <img
                            src={painting.src}
                            alt={`Painting - ${formatDate(painting.date)}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto object-cover"
                        />
                        <p className="hobbies-date">{formatDate(painting.date)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { Paintings };
