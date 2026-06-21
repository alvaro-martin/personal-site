import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import { NewProject } from './NewProject';

describe('NewProject', () => {
  it('renders title from i18n', () => {
    renderWithProviders(<NewProject />);
    expect(screen.getByText('¿Tienes un nuevo proyecto?')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<NewProject />);
    expect(screen.getByText('Contáctame ahora y saquemos adelante tu proyecto!')).toBeInTheDocument();
  });

  it('renders CTA button with link to portfolio section', () => {
    renderWithProviders(<NewProject />);
    const link = screen.getByText('Contáctame').closest('a');
    expect(link).toHaveAttribute('href', '#portfolio');
  });
});
