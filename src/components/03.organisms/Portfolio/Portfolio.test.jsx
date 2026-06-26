import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Portfolio } from './Portfolio';

describe('Portfolio', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<Portfolio />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<Portfolio />);
    expect(screen.getByText('Most recent work')).toBeInTheDocument();
  });

  it('renders all project titles from i18n', () => {
    renderWithProviders(<Portfolio />);
    expect(screen.getAllByText(/Siemens Challenge/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Environmental IoT Monitoring System/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Construction and Parameters Monitoring/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Logistics management platform/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Integration of Industrial OPC Server/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Training for UNAMAD/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Oxímetro Perú/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Oxygen Tank Level Monitoring/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Real-time monitoring system/).length).toBeGreaterThanOrEqual(1);
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
