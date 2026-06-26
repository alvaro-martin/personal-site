import { screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import { Hobbies } from './Hobbies';

describe('Hobbies', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<Hobbies />);
    expect(screen.getByText('Hobbies')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<Hobbies />);
    expect(screen.getByText('What I do outside of work')).toBeInTheDocument();
  });

  it('renders Paintings subsection', () => {
    renderWithProviders(<Hobbies />);
    const images = screen.getAllByAltText(/^Painting -/);
    expect(images.length).toBeGreaterThan(0);
  });

  it('has correct section ID for navigation', () => {
    renderWithProviders(<Hobbies />);
    const section = document.getElementById('hobbies');
    expect(section).toBeInTheDocument();
  });
});
