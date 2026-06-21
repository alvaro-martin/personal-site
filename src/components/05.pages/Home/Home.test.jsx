import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import { Home } from './Home';

describe('Home', () => {
  it('renders all section components', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText('Hola, soy Alvaro Martín')).toBeInTheDocument();
    expect(screen.getByText('Sobre mi')).toBeInTheDocument();
    expect(screen.getByText('Experiencia Profesional')).toBeInTheDocument();
    expect(screen.getByText('¿Tienes un nuevo proyecto?')).toBeInTheDocument();
    expect(screen.getByText('Portafolio')).toBeInTheDocument();
    expect(screen.getAllByText('Investigación').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Reconocimientos')).toBeInTheDocument();
  });
});
