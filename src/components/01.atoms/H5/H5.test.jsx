import { render, screen } from '@testing-library/react';
import { H5 } from './H5';

describe('H5', () => {
  it('renders children text', () => {
    render(<H5>Alvaro Martin</H5>);
    expect(screen.getByText('Alvaro Martin')).toBeInTheDocument();
  });

  it('renders as an h5 element', () => {
    render(<H5>Test</H5>);
    expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument();
  });
});
