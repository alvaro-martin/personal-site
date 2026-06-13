import { useState, useRef, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const Carousel = ({ items, ariaLabel }) => {
    const [t] = useTranslation("global");
    const [current, setCurrent] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const total = items.length;
    const touchStart = useRef(null);
    const touchDelta = useRef(0);

    useEffect(() => {
        setExpanded(false);
    }, [current]);

    const goTo = useCallback((index) => {
        setCurrent(index);
    }, []);

    const goPrev = useCallback(() => {
        setCurrent(prev => prev === 0 ? total - 1 : prev - 1);
    }, [total]);

    const goNext = useCallback(() => {
        setCurrent(prev => prev === total - 1 ? 0 : prev + 1);
    }, [total]);

    const handleTouchStart = (e) => {
        touchStart.current = e.touches[0].clientX;
        touchDelta.current = 0;
    };

    const handleTouchMove = (e) => {
        if (touchStart.current === null) return;
        touchDelta.current = e.touches[0].clientX - touchStart.current;
    };

    const handleTouchEnd = () => {
        const threshold = 50;
        if (touchDelta.current > threshold) {
            goPrev();
        } else if (touchDelta.current < -threshold) {
            goNext();
        }
        touchStart.current = null;
        touchDelta.current = 0;
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goPrev();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            goNext();
        }
    };

    const item = items[current];

    return (
        <div
            role="region"
            aria-label={ariaLabel}
            aria-live="polite"
            onKeyDown={handleKeyDown}
            className="flex flex-col items-center w-full"
        >
            {/* Carousel content */}
            <div className="flex flex-row items-center justify-between gap-4 px-4 w-full max-sm:justify-center max-sm:gap-0">
                <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous"
                    className="carousel-arrow max-sm:hidden"
                >
                    <IoIosArrowBack size={30} />
                </button>

                <div
                    className="flex flex-row items-center justify-center gap-8 max-md:flex-col flex-1 min-w-0"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="w-[min(500px,45vw)] m-4 rounded-xl overflow-hidden bg-background5 aspect-[3/2] max-md:w-full max-sm:aspect-[4/3] max-sm:m-2">
                        <img
                            src={item.img}
                            alt={item.alt}
                            loading="lazy"
                            decoding="async"
                            className="object-contain w-full h-full transition-transform duration-normal ease-default hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col min-w-0 w-[min(500px,45vw)] max-md:w-full">
                        <h2 className="text-text text-xl font-bold mb-4 leading-snug">
                            {item.title}
                        </h2>
                        <div
                            className="overflow-hidden transition-[max-height] duration-300 ease-default"
                            style={{ maxHeight: expanded ? '600px' : '4.5rem' }}
                        >
                            <p className="text-text-muted text-base mb-2 leading-relaxed max-w-[65ch]">
                                {item.subtitle}
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setExpanded(prev => !prev)}
                            className="text-text-accent text-sm font-medium mb-4 cursor-pointer bg-transparent border-none p-0 hover:underline text-left w-fit"
                        >
                            {expanded ? t("carousel.readLess") : t("carousel.readMore")}
                        </button>
                        {item.link && (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full md:w-[19rem]"
                            >
                                {item.button}
                            </a>
                        )}
                    </div>
                </div>

                <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next"
                    className="carousel-arrow max-sm:hidden"
                >
                    <IoIosArrowForward size={30} />
                </button>
            </div>

            {/* Dots + counter */}
            <div className="flex flex-row items-center justify-center gap-3 mt-4">
                {items.map((_, idx) => (
                    <button
                        key={idx}
                        type="button"
                        onClick={() => goTo(idx)}
                        aria-label={`Go to item ${idx + 1}`}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-normal ease-default cursor-pointer border-none p-0 ${
                            idx === current
                                ? 'bg-text-accent scale-125'
                                : 'bg-border hover:bg-text-muted'
                        }`}
                    />
                ))}
                <span className="text-text-muted text-sm ml-2">
                    {current + 1} / {total}
                </span>
            </div>
        </div>
    );
};

export { Carousel };
