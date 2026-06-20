import { render, screen } from '@testing-library/react';
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

  it('renders all project titles from i18n', () => {
    renderWithProviders(<Awards />);
    expect(screen.getAllByText(/Distinción a la Innovación/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Monitoreo de Nivel de Tanques/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Sistema de monitoreo en tiempo real/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Hackster Bounty Winner/).length).toBeGreaterThanOrEqual(1);
  });

  it('renders all project images with alt from content.json', () => {
    renderWithProviders(<Awards />);
    content.awards.projects.forEach(project => {
      expect(screen.getByAltText(project.alt)).toBeInTheDocument();
    });
  });

  it('renders correct total project count from content.json', () => {
    expect(content.awards.projects.length).toBe(6);
  });
});
