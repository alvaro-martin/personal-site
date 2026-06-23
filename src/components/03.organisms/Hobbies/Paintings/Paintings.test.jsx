import { screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import { Paintings } from './Paintings';

describe('Paintings', () => {
  it('renders all 38 painting images', () => {
    renderWithProviders(<Paintings />);
    const images = screen.getAllByAltText(/^Painting -/);
    expect(images).toHaveLength(38);
  });

  it('renders most recent painting first (2026-06-10)', () => {
    renderWithProviders(<Paintings />);
    const images = screen.getAllByAltText(/^Painting -/);
    expect(images[0]).toHaveAttribute('src', '/personal-site/paintings/2026-06-10.webp');
  });

  it('renders oldest painting last (2024-09-15)', () => {
    renderWithProviders(<Paintings />);
    const images = screen.getAllByAltText(/^Painting -/);
    expect(images[37]).toHaveAttribute('src', '/personal-site/paintings/2024-09-15.webp');
  });

  it('renders date labels below images', () => {
    renderWithProviders(<Paintings />);
    expect(screen.getByText('Junio 2026')).toBeInTheDocument();
    const septiembreLabels = screen.getAllByText('Septiembre 2024');
    expect(septiembreLabels.length).toBe(2);
  });

  it('renders subsection label', () => {
    renderWithProviders(<Paintings />);
    expect(screen.getByText('Pinturas')).toBeInTheDocument();
  });

  it('uses lazy loading for images', () => {
    renderWithProviders(<Paintings />);
    const images = screen.getAllByAltText(/^Painting -/);
    images.forEach(img => {
      expect(img).toHaveAttribute('loading', 'lazy');
      expect(img).toHaveAttribute('decoding', 'async');
    });
  });
});
