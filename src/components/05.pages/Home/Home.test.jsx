import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import { Home } from './Home';

describe('Home', () => {
  it('renders all section components', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Professional Experience')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getAllByText('Research').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Acknowledgments')).toBeInTheDocument();
  });
});
