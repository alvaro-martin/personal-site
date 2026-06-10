import { useState, useEffect } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-fixed rounded-full bg-primary p-3 text-text-inverse shadow-lg border-none cursor-pointer transition-all duration-normal ease-default hover:bg-primary-dark hover:shadow-xl hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2"
        >
            <BsArrowUpShort size={24} aria-hidden="true" />
        </button>
    );
};

export { ScrollToTop };
