import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import content from 'data/content.json';
import { About } from './About';

describe('About', () => {
  it('renders section title from i18n', () => {
    renderWithProviders(<About />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    renderWithProviders(<About />);
    expect(screen.getByText('My introduction')).toBeInTheDocument();
  });

  it('renders description text', () => {
    renderWithProviders(<About />);
    expect(screen.getByText(/constructive paranoid/)).toBeInTheDocument();
  });

  it('renders CV download button', () => {
    renderWithProviders(<About />);
    expect(screen.getByText('Download CV')).toBeInTheDocument();
  });

  it('renders photo with alt from content.json', () => {
    renderWithProviders(<About />);
    expect(screen.getByAltText(content.about.photoAlt)).toBeInTheDocument();
  });
});
