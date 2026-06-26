import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Research } from './Research';

describe('Research', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<Research />);
    expect(screen.getByText('Research')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<Research />);
    expect(screen.getByText('Papers')).toBeInTheDocument();
  });

  it('renders all project titles from i18n', () => {
    renderWithProviders(<Research />);
    expect(screen.getAllByText(/Proposal and Evaluation of a Software Architecture/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Spot-Wise Smart Parking/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/San Marcos Smart City/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Planning study/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/IoT real-time bus tracking/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Recognition of movements/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/COVID-19 mobile application/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Smart Campus Guidance System/).length).toBeGreaterThanOrEqual(1);
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
