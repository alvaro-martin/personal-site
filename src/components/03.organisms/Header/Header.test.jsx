import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Header } from './Header';

describe('Header', () => {
  it('renders brand name from content.json', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText(content.header.brandName)).toBeInTheDocument();
  });

  it('renders all navigation links with Spanish i18n labels', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Sobre mi')).toBeInTheDocument();
    expect(screen.getByText('Habilidades')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
    expect(screen.getByText('Portafolio')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  it('renders flag images', () => {
    renderWithProviders(<Header />);
    const esFlag = screen.getByAltText('Spanish');
    const enFlag = screen.getByAltText('English');
    expect(esFlag).toBeInTheDocument();
    expect(enFlag).toBeInTheDocument();
  });

  it('toggles mobile menu on hamburger click', () => {
    renderWithProviders(<Header />);
    const menuButton = screen.getByLabelText('Open menu');
    expect(menuButton).toBeTruthy();
    fireEvent.click(menuButton);
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });
});
