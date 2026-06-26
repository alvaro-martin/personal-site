import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { Header } from './Header';

beforeEach(() => {
  window.matchMedia = (query) => ({
    matches: true,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
});

afterEach(() => {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
});

describe('Header', () => {
  it('renders brand name from content.json', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText(content.header.brandName)).toBeInTheDocument();
  });

  it('renders all navigation links with English i18n labels', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Research')).toBeInTheDocument();
    expect(screen.getByText('Awards')).toBeInTheDocument();
  });

  it('renders flag images in language dropdown', () => {
    renderWithProviders(<Header />);
    const trigger = screen.getByLabelText('Select language');
    fireEvent.click(trigger);
    expect(screen.getAllByAltText('Spanish').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByAltText('English').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByAltText('German').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByAltText('Portuguese').length).toBeGreaterThanOrEqual(1);
  });

  it('toggles mobile menu on hamburger click', () => {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    });
    renderWithProviders(<Header />);
    const menuButton = screen.getByLabelText('Open menu');
    expect(menuButton).toBeTruthy();
    fireEvent.click(menuButton);
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });
});
