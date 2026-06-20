import { useScrollReveal } from 'hooks/useScrollReveal';

const CardGrid = ({ items, ariaLabel }) => {
    const ref = useScrollReveal();

    return (
        <div
            ref={ref}
            role="region"
            aria-label={ariaLabel}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 sm:px-6 lg:px-8"
        >
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="card card-reveal overflow-hidden flex flex-col"
                    style={{ animationDelay: `${idx * 100}ms` }}
                >
                    <div className="aspect-[3/2] overflow-hidden rounded-t-lg">
                        <img
                            src={item.img}
                            alt={item.alt}
                            loading="lazy"
                            decoding="async"
                            className="object-contain w-full h-full transition-transform duration-normal ease-default hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                        <h3 className="text-text text-lg font-bold mb-2 leading-snug">
                            {item.title}
                        </h3>
                        <p className="text-text-muted text-base leading-relaxed line-clamp-3 mb-4">
                            {item.subtitle}
                        </p>
                        {item.link && (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary btn-primary-sm mt-auto w-full"
                            >
                                {item.button}
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export { CardGrid };
