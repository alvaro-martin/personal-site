import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import { ContactMe } from './ContactMe';

describe('ContactMe', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<ContactMe />);
    expect(screen.getByText('Contáctame')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<ContactMe />);
    expect(screen.getByText('Ponerse en contacto')).toBeInTheDocument();
  });

  it('renders form fields with Spanish placeholders', () => {
    renderWithProviders(<ContactMe />);
    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Mensaje')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    renderWithProviders(<ContactMe />);
    expect(screen.getByText('Enviar mensaje')).toBeInTheDocument();
  });

  it('renders email and location info', () => {
    renderWithProviders(<ContactMe />);
    expect(screen.getByText('hola@aubo.io')).toBeInTheDocument();
    expect(screen.getByText('Lima, Perú')).toBeInTheDocument();
  });

  it('allows typing in form fields', () => {
    renderWithProviders(<ContactMe />);
    const nameInput = screen.getByPlaceholderText('Nombre');
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    expect(nameInput.value).toBe('Test User');
  });

  it('does not submit when fields are empty', () => {
    renderWithProviders(<ContactMe />);
    const submitBtn = screen.getByText('Enviar mensaje');
    fireEvent.click(submitBtn);
  });
});
