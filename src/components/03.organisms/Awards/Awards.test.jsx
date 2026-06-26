import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Awards } from './Awards';

describe('Awards', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<Awards />);
    expect(screen.getByText('Acknowledgments')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<Awards />);
    expect(screen.getByText('and Awards')).toBeInTheDocument();
  });

  it('renders all project titles from i18n', () => {
    renderWithProviders(<Awards />);
    expect(screen.getAllByText(/Distinction for Innovation/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Oxygen Tank Level Monitoring/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Real-time monitoring system/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Hackster Bounty Winner/).length).toBeGreaterThanOrEqual(1);
  });

  it('renders all project images with alt from content.json', () => {
    renderWithProviders(<Awards />);
    content.awards.projects.forEach(project => {
      expect(screen.getByAltText(project.alt)).toBeInTheDocument();
    });
  });

  it('renders correct total project count from content.json', () => {
    expect(content.awards.projects.length).toBe(4);
  });
});
