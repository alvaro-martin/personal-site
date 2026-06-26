import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders name with typewriter class', () => {
    renderWithProviders(<Hero />);
    const nameEl = screen.getByText(/Alvaro Martín/i);
    expect(nameEl).toHaveClass('hero-name-line2');
  });

  it('renders degree title', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText('Msc. Computer Science')).toBeInTheDocument();
  });

  it('renders all title lines', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText('Mechanical & Electrical Engineer')).toBeInTheDocument();
    expect(screen.getByText('AI Engineer')).toBeInTheDocument();
    expect(screen.getByText('IoT Researcher')).toBeInTheDocument();
  });

  it('renders photo with gradient border', () => {
    renderWithProviders(<Hero />);
    const photo = screen.getByAltText(content.hero.photoAlt);
    expect(photo.closest('.photo-container')).toBeInTheDocument();
  });

  it('renders social links', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByLabelText(/github/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();
  });
});
