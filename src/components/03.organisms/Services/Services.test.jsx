import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import { Services } from './Services';

describe('Services', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<Services />);
    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<Services />);
    expect(screen.getByText('What I offer')).toBeInTheDocument();
  });

  it('renders all six service titles', () => {
    renderWithProviders(<Services />);
    expect(screen.getByText('Mechanical & Electrical Engineer')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Backend & Cloud Developer')).toBeInTheDocument();
    expect(screen.getByText('IoT Projects')).toBeInTheDocument();
    expect(screen.getByText('Machine Learning Projects')).toBeInTheDocument();
    expect(screen.getByText('Research')).toBeInTheDocument();
  });

  it('renders "View more" buttons for each service', () => {
    renderWithProviders(<Services />);
    const viewMoreButtons = screen.getAllByText('View more');
    expect(viewMoreButtons.length).toBe(6);
  });

  it('opens popup when "View more" is clicked', () => {
    renderWithProviders(<Services />);
    const viewMoreButtons = screen.getAllByText('View more');
    fireEvent.click(viewMoreButtons[0]);
    expect(screen.getByText('Preventive Maintenance Projects Implementation.')).toBeInTheDocument();
  });

  it('closes popup when close button is clicked', () => {
    renderWithProviders(<Services />);
    const viewMoreButtons = screen.getAllByText('View more');
    fireEvent.click(viewMoreButtons[0]);
    const closeButton = screen.getByLabelText('Close dialog');
    expect(closeButton).toBeTruthy();
  });
});
