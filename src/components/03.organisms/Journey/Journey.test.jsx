import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Journey } from './Journey';

describe('Journey', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<Journey />);
    expect(screen.getByText('Experiencia Profesional')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<Journey />);
    expect(screen.getByText('Mi jornada personal')).toBeInTheDocument();
  });

  it('renders all experience entries from content.json', () => {
    renderWithProviders(<Journey />);
    expect(screen.getByText('CEO & Fundador')).toBeInTheDocument();
    expect(screen.getByText('Aubo')).toBeInTheDocument();
    expect(screen.getByText('2019 - Actualidad')).toBeInTheDocument();
  });

  it('renders all 8 experience entries', () => {
    renderWithProviders(<Journey />);
    expect(screen.getByText('CEO & Fundador')).toBeInTheDocument();
    expect(screen.getByText('Coordinador & Co-Fundador')).toBeInTheDocument();
    expect(screen.getByText('Profesor Cloud + IA + Blockchain')).toBeInTheDocument();
    expect(screen.getByText('Investigador IoT')).toBeInTheDocument();
    expect(screen.getByText('Ingeniero de Diseño de Proyectos de Alta y Media Tensión')).toBeInTheDocument();
    expect(screen.getByText('Asistente de Planner de Mantenimiento')).toBeInTheDocument();
    expect(screen.getByText('Practicante de Ingeniería de Mantenimiento')).toBeInTheDocument();
    expect(screen.getByText('Estudiante Ing. Mecánica Eléctrica')).toBeInTheDocument();
  });

  it('renders company names from i18n', () => {
    renderWithProviders(<Journey />);
    expect(screen.getByText('Comunidad IoT Perú')).toBeInTheDocument();
    expect(screen.getByText('PRICONSA')).toBeInTheDocument();
    expect(screen.getByText('Universidad Nacional de Ingeniería')).toBeInTheDocument();
  });

  it('renders calendar icons for dates', () => {
    const { container } = renderWithProviders(<Journey />);
    const calendarIcons = container.querySelectorAll('svg');
    expect(calendarIcons.length).toBeGreaterThan(0);
  });
});
