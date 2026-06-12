import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Awards } from './Awards';

describe('Awards', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<Awards />);
    expect(screen.getByText('Reconocimientos')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<Awards />);
    expect(screen.getByText('y Premios')).toBeInTheDocument();
  });

  it('renders first project title from i18n', () => {
    renderWithProviders(<Awards />);
    expect(screen.getByText(/Distinción a la Innovación/)).toBeInTheDocument();
  });

  it('renders project image with alt from content.json', () => {
    renderWithProviders(<Awards />);
    expect(screen.getByAltText(content.awards.projects[0].alt)).toBeInTheDocument();
  });

  it('navigates to next project on forward arrow click', () => {
    renderWithProviders(<Awards />);
    const forwardBtn = screen.getByLabelText('Next');
    fireEvent.click(forwardBtn);
    const matches = screen.getAllByText(/Monitoreo de Nivel de Tanques/);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it('renders correct total project count from content.json', () => {
    expect(content.awards.projects.length).toBe(6);
  });
});
