import { render, screen } from '@testing-library/react';
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

  it('renders all project titles from i18n', () => {
    renderWithProviders(<Research />);
    expect(screen.getAllByText(/Propuesta y Evaluación de una Arquitectura/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Spot-Wise Smart Parking/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/San Marcos Ciudad Inteligente/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Estudio de Planeamiento/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Sistema IoT de rastreo del bus/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Reconocimiento de los movimientos/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Aplicación móvil COVID-19/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Sistema de Guiado Smart Campus/).length).toBeGreaterThanOrEqual(1);
  });

  it('renders all project images with alt from content.json', () => {
    renderWithProviders(<Research />);
    content.research.projects.forEach(project => {
      expect(screen.getByAltText(project.alt)).toBeInTheDocument();
    });
  });

  it('renders correct total project count from content.json', () => {
    expect(content.research.projects.length).toBe(8);
  });
});
