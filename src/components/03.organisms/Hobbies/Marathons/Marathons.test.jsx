import { screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import { Marathons } from './Marathons';

describe('Marathons', () => {
  it('renders all 3 marathon images', () => {
    renderWithProviders(<Marathons />);
    const images = screen.getAllByAltText(/^Marathon -/);
    expect(images).toHaveLength(3);
  });

  it('renders most recent marathon first (2026-05-24)', () => {
    renderWithProviders(<Marathons />);
    const images = screen.getAllByAltText(/^Marathon -/);
    expect(images[0]).toHaveAttribute('src', '/personal-site/marathons/2026-05-24.webp');
  });

  it('renders oldest marathon last (2025-06-22)', () => {
    renderWithProviders(<Marathons />);
    const images = screen.getAllByAltText(/^Marathon -/);
    expect(images[2]).toHaveAttribute('src', '/personal-site/marathons/2025-06-22.webp');
  });

  it('renders date labels below images', () => {
    renderWithProviders(<Marathons />);
    expect(screen.getByText('Mayo 2026')).toBeInTheDocument();
    expect(screen.getByText('Diciembre 2025')).toBeInTheDocument();
    expect(screen.getByText('Junio 2025')).toBeInTheDocument();
  });

  it('renders subsection label', () => {
    renderWithProviders(<Marathons />);
    expect(screen.getByText('Maratones')).toBeInTheDocument();
  });

  it('uses lazy loading for images', () => {
    renderWithProviders(<Marathons />);
    const images = screen.getAllByAltText(/^Marathon -/);
    images.forEach(img => {
      expect(img).toHaveAttribute('loading', 'lazy');
      expect(img).toHaveAttribute('decoding', 'async');
    });
  });
});
