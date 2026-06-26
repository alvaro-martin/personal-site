import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import { Languages } from './Languages';

describe('Languages', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<Languages />);
    expect(screen.getByText('Languages')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<Languages />);
    expect(screen.getByText('My languages')).toBeInTheDocument();
  });

  it('renders all four languages', () => {
    renderWithProviders(<Languages />);
    expect(screen.getByText('Spanish')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Portuguese')).toBeInTheDocument();
    expect(screen.getByText('German')).toBeInTheDocument();
  });

  it('renders TOEFL badge for English', () => {
    renderWithProviders(<Languages />);
    expect(screen.getByText('TOEFL')).toBeInTheDocument();
  });

  it('renders level badges', () => {
    renderWithProviders(<Languages />);
    expect(screen.getByText('Native')).toBeInTheDocument();
    expect(screen.getAllByText('C1').length).toBe(2);
    expect(screen.getByText('A2 → B1')).toBeInTheDocument();
  });

  it('renders progress bars', () => {
    renderWithProviders(<Languages />);
    const progressBars = document.querySelectorAll('.progress-bar');
    expect(progressBars.length).toBe(4);
  });
});
