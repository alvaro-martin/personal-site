import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { About } from './About';

describe('About', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<About />);
    expect(screen.getByText('Sobre mi')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<About />);
    expect(screen.getByText('Mi introducción')).toBeInTheDocument();
  });

  it('renders description text', () => {
    renderWithProviders(<About />);
    expect(screen.getByText(/paranoico constructivo/)).toBeInTheDocument();
  });

  it('renders all three stats from content.json', () => {
    renderWithProviders(<About />);
    content.about.stats.forEach(stat => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
    });
  });

  it('renders stat labels from i18n', () => {
    renderWithProviders(<About />);
    expect(screen.getByText('Años de Experiencia')).toBeInTheDocument();
    expect(screen.getByText('Artículos publicados')).toBeInTheDocument();
    expect(screen.getByText('Proyectos realizados')).toBeInTheDocument();
  });

  it('renders CV download button', () => {
    renderWithProviders(<About />);
    expect(screen.getByText('Descargar CV')).toBeInTheDocument();
  });

  it('renders photo with alt from content.json', () => {
    renderWithProviders(<About />);
    expect(screen.getByAltText(content.about.photoAlt)).toBeInTheDocument();
  });
});
