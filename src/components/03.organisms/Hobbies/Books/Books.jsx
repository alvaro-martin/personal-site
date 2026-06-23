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

const books = [
    { src: '/personal-site/books/2026-04-25.webp', date: '2026-04-25' },
    { src: '/personal-site/books/2026-03-24.webp', date: '2026-03-24' },
    { src: '/personal-site/books/2026-02-05.webp', date: '2026-02-05' },
    { src: '/personal-site/books/2025-12-16.webp', date: '2025-12-16' },
    { src: '/personal-site/books/2025-01-14.webp', date: '2025-01-14' },
    { src: '/personal-site/books/2025-01-04.webp', date: '2025-01-04' },
    { src: '/personal-site/books/2024-09-05.webp', date: '2024-09-05' },
    { src: '/personal-site/books/2024-09-03.webp', date: '2024-09-03' },
    { src: '/personal-site/books/2024-08-09.webp', date: '2024-08-09' },
    { src: '/personal-site/books/2024-08-08.webp', date: '2024-08-08' },
    { src: '/personal-site/books/2024-07-22.webp', date: '2024-07-22' },
    { src: '/personal-site/books/2024-07-20.webp', date: '2024-07-20' },
    { src: '/personal-site/books/2024-07-03.webp', date: '2024-07-03' },
    { src: '/personal-site/books/2024-07-02.webp', date: '2024-07-02' },
    { src: '/personal-site/books/2024-05-28.webp', date: '2024-05-28' },
    { src: '/personal-site/books/2024-04-22.webp', date: '2024-04-22' },
    { src: '/personal-site/books/2024-04-11.webp', date: '2024-04-11' },
    { src: '/personal-site/books/2024-03-10.webp', date: '2024-03-10' },
    { src: '/personal-site/books/2024-02-26.webp', date: '2024-02-26' },
];

const Books = () => {
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
            aria-label="Books gallery"
            className="w-full"
        >
            <h2 className="text-text-accent text-xl font-bold text-center mb-6">
                {t("hobbies.books")}
            </h2>
            <div className="hobbies-masonry px-4 sm:px-6 lg:px-8">
                {books.map((book, idx) => (
                    <div
                        key={book.date}
                        className="hobbies-card card-reveal"
                        style={{ animationDelay: `${idx * 80}ms` }}
                    >
                        <img
                            src={book.src}
                            alt={`Book - ${formatDate(book.date)}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto object-cover"
                        />
                        <p className="hobbies-date">{formatDate(book.date)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { Books };
