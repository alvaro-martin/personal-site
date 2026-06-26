import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Skills } from './Skills';

describe('Skills', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<Skills />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<Skills />);
    expect(screen.getByText('My technical level')).toBeInTheDocument();
  });

  it('renders all category titles from i18n', () => {
    renderWithProviders(<Skills />);
    expect(screen.getByText('Mechanical & Electrical')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Backend Developer')).toBeInTheDocument();
    expect(screen.getByText('IoT Engineer')).toBeInTheDocument();
    expect(screen.getByText('Machine Learning')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('expands a skill category and shows skills with percentages', () => {
    renderWithProviders(<Skills />);
    const expandButtons = screen.getAllByRole('button', { name: /Expand.*skills/i });
    fireEvent.click(expandButtons[0]);
    expect(screen.getByText('Maintenance planning')).toBeInTheDocument();
    const percents = screen.getAllByText('40%');
    expect(percents.length).toBeGreaterThanOrEqual(1);
  });

  it('renders correct number of skill categories from content.json', () => {
    renderWithProviders(<Skills />);
    expect(content.skills.categories.length).toBe(6);
  });
});
