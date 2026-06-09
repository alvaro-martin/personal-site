import { render, screen, fireEvent } from '@testing-library/react';
import { ScrollToTop } from './ScrollToTop';

describe('ScrollToTop', () => {
  it('does not render when scroll position is 0', () => {
    render(<ScrollToTop />);
    expect(screen.queryByRole('button', { name: /scroll to top/i })).not.toBeInTheDocument();
  });

  it('renders button when scrollY > 300', () => {
    render(<ScrollToTop />);
    fireEvent.scroll(window, { target: { scrollY: 400 } });
    expect(screen.getByRole('button', { name: /scroll to top/i })).toBeInTheDocument();
  });

  it('scrolls to top when button is clicked', () => {
    const scrollTo = vi.fn();
    window.scrollTo = scrollTo;
    render(<ScrollToTop />);
    fireEvent.scroll(window, { target: { scrollY: 400 } });
    fireEvent.click(screen.getByRole('button', { name: /scroll to top/i }));
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('hides button when scrollY < 300', () => {
    render(<ScrollToTop />);
    fireEvent.scroll(window, { target: { scrollY: 400 } });
    expect(screen.getByRole('button', { name: /scroll to top/i })).toBeInTheDocument();
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(screen.queryByRole('button', { name: /scroll to top/i })).not.toBeInTheDocument();
  });
});
