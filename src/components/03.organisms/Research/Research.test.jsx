import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Research } from './Research';

describe('Research', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<Research />);
    expect(screen.getByText('Investigación')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<Research />);
    expect(screen.getByText('Trabajos de Investigación')).toBeInTheDocument();
  });

  it('renders first project title from i18n', () => {
    renderWithProviders(<Research />);
    expect(screen.getByText(/Diseño de un prototipo de IoT/)).toBeInTheDocument();
  });

  it('renders project image with alt from content.json', () => {
    renderWithProviders(<Research />);
    expect(screen.getByAltText(content.research.projects[0].alt)).toBeInTheDocument();
  });

  it('navigates to next project on forward arrow click', () => {
    renderWithProviders(<Research />);
    const forwardBtn = screen.getByLabelText('Next');
    fireEvent.click(forwardBtn);
    expect(screen.getByText(/San Marcos Ciudad Inteligente/)).toBeInTheDocument();
  });

  it('renders correct total project count from content.json', () => {
    expect(content.research.projects.length).toBe(7);
  });
});
