import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders Spanish greeting from i18n', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText('Hola, soy Alvaro Martín')).toBeInTheDocument();
  });

  it('renders all three title lines', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText('Ingeniero Mecánico Eléctrico')).toBeInTheDocument();
    expect(screen.getByText('Desarrollador de Software Full-Stack')).toBeInTheDocument();
    expect(screen.getByText('Investigador IoT')).toBeInTheDocument();
  });

  it('renders description text', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText(/Fundador y CEO de Aubo/)).toBeInTheDocument();
  });

  it('renders CTA button with Spanish text', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText('Contáctame')).toBeInTheDocument();
  });

  it('renders photo with alt from content.json', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByAltText(content.hero.photoAlt)).toBeInTheDocument();
  });

  it('renders CTA link to portfolio section', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText('Contáctame').closest('a')).toHaveAttribute('href', '#portfolio');
  });
});
