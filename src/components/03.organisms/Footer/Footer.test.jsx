import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders brand name from i18n', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText('Alvaro Martín')).toBeInTheDocument();
  });

  it('renders three subtitle lines', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText('Ingeniero Mecánico Eléctrico')).toBeInTheDocument();
    expect(screen.getByText('Desarrollador de Software Full-Stack')).toBeInTheDocument();
    expect(screen.getByText('Investigador IoT')).toBeInTheDocument();
  });

  it('renders footer nav links from content.json', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText('Sobre mi')).toBeInTheDocument();
    expect(screen.getByText('Habilidades')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
    expect(screen.getByText('Portafolio')).toBeInTheDocument();
  });

  it('renders anchor hrefs from content.json', () => {
    renderWithProviders(<Footer />);
    const navLinks = document.querySelectorAll('footer a[href^="#"]');
    expect(navLinks.length).toBe(4);
    expect(navLinks[0]).toHaveAttribute('href', '#aboutme');
    expect(navLinks[1]).toHaveAttribute('href', '#skills');
    expect(navLinks[2]).toHaveAttribute('href', '#services');
    expect(navLinks[3]).toHaveAttribute('href', '#portfolio');
  });

  it('renders copyright year from content.json', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText(new RegExp(content.footer.copyrightYear))).toBeInTheDocument();
  });

  it('renders "Todos los derechos reservados"', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText(/Todos los derechos reservados/)).toBeInTheDocument();
  });

  it('renders social media links from content.json', () => {
    renderWithProviders(<Footer />);
    const socialLinks = document.querySelectorAll('footer a[target="_blank"]');
    expect(socialLinks.length).toBe(2);
  });
});
