import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders brand name from i18n', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText('Alvaro Martín')).toBeInTheDocument();
  });

  it('renders four subtitle lines matching hero', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText('Msc. Computer Science')).toBeInTheDocument();
    expect(screen.getByText('Mechanical & Electrical Engineer')).toBeInTheDocument();
    expect(screen.getByText('AI Engineer')).toBeInTheDocument();
    expect(screen.getByText('IoT Researcher')).toBeInTheDocument();
  });

  it('renders footer nav links from content.json', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Research')).toBeInTheDocument();
    expect(screen.getByText('Awards')).toBeInTheDocument();
  });

  it('renders anchor hrefs from content.json', () => {
    renderWithProviders(<Footer />);
    const navLinks = document.querySelectorAll('footer a[href^="#"]');
    expect(navLinks.length).toBe(7);
    expect(navLinks[0]).toHaveAttribute('href', '#home');
    expect(navLinks[1]).toHaveAttribute('href', '#aboutme');
    expect(navLinks[2]).toHaveAttribute('href', '#languages');
    expect(navLinks[3]).toHaveAttribute('href', '#portfolio');
    expect(navLinks[4]).toHaveAttribute('href', '#research');
    expect(navLinks[5]).toHaveAttribute('href', '#awards');
    expect(navLinks[6]).toHaveAttribute('href', '#hobbies');
  });

  it('renders current copyright year', () => {
    renderWithProviders(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  it('renders "All rights reserved"', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
  });

  it('renders social media links from content.json', () => {
    renderWithProviders(<Footer />);
    const socialLinks = document.querySelectorAll('footer a[target="_blank"]');
    expect(socialLinks.length).toBe(2);
  });
});
