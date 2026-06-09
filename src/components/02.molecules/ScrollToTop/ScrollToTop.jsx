import { useState, useEffect } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 50,
        borderRadius: '9999px',
        backgroundColor: '#6865C3',
        padding: '0.75rem',
        color: 'white',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
        border: 'none',
        cursor: 'pointer',
      }}
      aria-label="Scroll to top"
    >
      <BsArrowUpShort size={24} />
    </button>
  );
};

export { ScrollToTop };
