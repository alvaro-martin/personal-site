import { screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import { Books } from './Books';

describe('Books', () => {
  it('renders all 19 book images', () => {
    renderWithProviders(<Books />);
    const images = screen.getAllByAltText(/^Book -/);
    expect(images).toHaveLength(19);
  });

  it('renders most recent book first (2026-04-25)', () => {
    renderWithProviders(<Books />);
    const images = screen.getAllByAltText(/^Book -/);
    expect(images[0]).toHaveAttribute('src', '/personal-site/books/2026-04-25.webp');
  });

  it('renders oldest book last (2024-02-26)', () => {
    renderWithProviders(<Books />);
    const images = screen.getAllByAltText(/^Book -/);
    expect(images[18]).toHaveAttribute('src', '/personal-site/books/2024-02-26.webp');
  });

  it('renders date labels below images', () => {
    renderWithProviders(<Books />);
    expect(screen.getByText('Abril 2026')).toBeInTheDocument();
    expect(screen.getByText('Febrero 2024')).toBeInTheDocument();
  });

  it('renders subsection label', () => {
    renderWithProviders(<Books />);
    expect(screen.getByText('Libros')).toBeInTheDocument();
  });

  it('uses lazy loading for images', () => {
    renderWithProviders(<Books />);
    const images = screen.getAllByAltText(/^Book -/);
    images.forEach(img => {
      expect(img).toHaveAttribute('loading', 'lazy');
      expect(img).toHaveAttribute('decoding', 'async');
    });
  });
});
