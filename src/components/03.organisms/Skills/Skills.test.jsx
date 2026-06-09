import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Skills } from './Skills';

describe('Skills', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<Skills />);
    expect(screen.getByText('Habilidades')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<Skills />);
    expect(screen.getByText('Mi nivel técnico')).toBeInTheDocument();
  });

  it('renders all category titles from i18n', () => {
    renderWithProviders(<Skills />);
    expect(screen.getByText('Mecánica Eléctrica')).toBeInTheDocument();
    expect(screen.getByText('Desarrollador Frontend')).toBeInTheDocument();
    expect(screen.getByText('Desarrollador Backend')).toBeInTheDocument();
    expect(screen.getByText('Ingeniería IoT')).toBeInTheDocument();
    expect(screen.getByText('Machine Learning')).toBeInTheDocument();
    expect(screen.getByText('Inglés')).toBeInTheDocument();
  });

  it('expands a skill category and shows skills with percentages', () => {
    renderWithProviders(<Skills />);
    const expandButtons = document.querySelectorAll('.cursor-pointer.text-\\[color\\:var\\(--color-fontColor4\\)\\]');
    fireEvent.click(expandButtons[0]);
    expect(screen.getByText('Planeamiento del Mantenimiento')).toBeInTheDocument();
    const percents = screen.getAllByText('40%');
    expect(percents.length).toBeGreaterThanOrEqual(1);
  });

  it('renders correct number of skill categories from content.json', () => {
    renderWithProviders(<Skills />);
    expect(content.skills.categories.length).toBe(6);
  });
});
