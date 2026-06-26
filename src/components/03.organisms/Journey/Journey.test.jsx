import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Journey } from './Journey';

describe('Journey', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<Journey />);
    expect(screen.getByText('Professional Experience')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<Journey />);
    expect(screen.getByText('My personal journey')).toBeInTheDocument();
  });

  it('renders all experience entries from content.json', () => {
    renderWithProviders(<Journey />);
    expect(screen.getByText('CEO & Founder')).toBeInTheDocument();
    expect(screen.getByText('Aubo')).toBeInTheDocument();
    expect(screen.getByText('2019 - 2023')).toBeInTheDocument();
  });

  it('renders all 9 experience entries', () => {
    renderWithProviders(<Journey />);
    expect(screen.getByText('MSc in Computer Science')).toBeInTheDocument();
    expect(screen.getByText('CEO & Founder')).toBeInTheDocument();
    expect(screen.getByText('Coordinator & Co-Founder')).toBeInTheDocument();
    expect(screen.getByText('Cloud + IA + Blockchain Teacher')).toBeInTheDocument();
    expect(screen.getByText('IoT Researcher')).toBeInTheDocument();
    expect(screen.getByText('High and Medium Voltage Project Design Engineer')).toBeInTheDocument();
    expect(screen.getByText('Maintenance Planner Assistant')).toBeInTheDocument();
    expect(screen.getByText('Maintenance Engineering Intern')).toBeInTheDocument();
    expect(screen.getByText('Mechanical & Electrical Eng. Student')).toBeInTheDocument();
  });

  it('renders company names from i18n', () => {
    renderWithProviders(<Journey />);
    expect(screen.getByText('IoT Peru Community')).toBeInTheDocument();
    expect(screen.getByText('PRICONSA')).toBeInTheDocument();
    expect(screen.getByText('National University of Engineering')).toBeInTheDocument();
  });

  it('renders calendar icons for dates', () => {
    const { container } = renderWithProviders(<Journey />);
    const calendarIcons = container.querySelectorAll('svg');
    expect(calendarIcons.length).toBeGreaterThan(0);
  });
});
