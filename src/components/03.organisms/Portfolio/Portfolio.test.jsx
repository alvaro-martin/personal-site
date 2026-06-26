import { render, screen } from '@testing-library/react';
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

  it('renders all project titles from i18n', () => {
    renderWithProviders(<Portfolio />);
    expect(screen.getAllByText(/Siemens Challenge/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Sistema de Monitoreo IoT Ambiental/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Construcción y Monitoreo/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Plataforma de gestión logística/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Integración de Servidor Industrial/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Capacitación a docentes/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Oxímetro Perú/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Monitoreo de Nivel de Tanques/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Sistema de monitoreo en tiempo real/).length).toBeGreaterThanOrEqual(1);
  });

  it('renders all project images with alt from content.json', () => {
    renderWithProviders(<Portfolio />);
    content.portfolio.projects.forEach(project => {
      expect(screen.getByAltText(project.alt)).toBeInTheDocument();
    });
  });

  it('renders correct total project count from content.json', () => {
    expect(content.portfolio.projects.length).toBe(9);
  });
});
