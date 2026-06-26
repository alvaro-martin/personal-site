import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import { NewProject } from './NewProject';

describe('NewProject', () => {
  it('renders title from i18n', () => {
    renderWithProviders(<NewProject />);
    expect(screen.getByText("You have a new project?")).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<NewProject />);
    expect(screen.getByText("Contact me now and let's move your project forward!")).toBeInTheDocument();
  });

  it('renders CTA button with link to portfolio section', () => {
    renderWithProviders(<NewProject />);
    const link = screen.getByText('Contact me').closest('a');
    expect(link).toHaveAttribute('href', '#portfolio');
  });
});
