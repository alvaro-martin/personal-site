import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Portfolio } from './Portfolio';

describe('Portfolio', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<Portfolio />);
    expect(screen.getByText('Portafolio')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<Portfolio />);
    expect(screen.getByText('Trabajo más reciente')).toBeInTheDocument();
  });

  it('renders first project title from i18n', () => {
    renderWithProviders(<Portfolio />);
    expect(screen.getByText(/Construcción y Monitoreo/)).toBeInTheDocument();
  });

  it('renders project image with alt from content.json', () => {
    renderWithProviders(<Portfolio />);
    expect(screen.getByAltText(content.portfolio.projects[0].alt)).toBeInTheDocument();
  });

  it('navigates to next project on forward arrow click', () => {
    renderWithProviders(<Portfolio />);
    const forwardBtn = screen.getByLabelText('Next');
    fireEvent.click(forwardBtn);
    expect(screen.getByText(/Desarrollo de Plataforma IoT/)).toBeInTheDocument();
  });

  it('navigates to previous project on back arrow click', () => {
    renderWithProviders(<Portfolio />);
    const backBtn = screen.getByLabelText('Previous');
    fireEvent.click(backBtn);
    expect(screen.getByText(/Oxímetro Perú/)).toBeInTheDocument();
  });

  it('renders correct total project count from content.json', () => {
    expect(content.portfolio.projects.length).toBe(6);
  });
});
