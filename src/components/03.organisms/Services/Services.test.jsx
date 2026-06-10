import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import { Services } from './Services';

describe('Services', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<Services />);
    expect(screen.getByText('Servicios')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<Services />);
    expect(screen.getByText('Qué ofrezco')).toBeInTheDocument();
  });

  it('renders all six service titles', () => {
    renderWithProviders(<Services />);
    expect(screen.getByText('Ingeniería Mecánica Eléctrica')).toBeInTheDocument();
    expect(screen.getByText('Desarrollador Frontend')).toBeInTheDocument();
    expect(screen.getByText('Desarrollador Backend y Cloud')).toBeInTheDocument();
    expect(screen.getByText('Proyectos IoT')).toBeInTheDocument();
    expect(screen.getByText('Proyectos de Machine Learning')).toBeInTheDocument();
    expect(screen.getByText('Investigación')).toBeInTheDocument();
  });

  it('renders "Ver más" buttons for each service', () => {
    renderWithProviders(<Services />);
    const viewMoreButtons = screen.getAllByText('Ver más');
    expect(viewMoreButtons.length).toBe(6);
  });

  it('opens popup when "Ver más" is clicked', () => {
    renderWithProviders(<Services />);
    const viewMoreButtons = screen.getAllByText('Ver más');
    fireEvent.click(viewMoreButtons[0]);
    expect(screen.getByText('Implementación de Proyectos de Mantenimiento Preventivo.')).toBeInTheDocument();
  });

  it('closes popup when close button is clicked', () => {
    renderWithProviders(<Services />);
    const viewMoreButtons = screen.getAllByText('Ver más');
    fireEvent.click(viewMoreButtons[0]);
    const closeButton = screen.getByLabelText('Close dialog');
    expect(closeButton).toBeTruthy();
  });
});
