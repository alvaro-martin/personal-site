import { render, screen, fireEvent } from '@testing-library/react';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('renders sun and moon icon SVGs', () => {
    const { container } = render(<Toggle isActive={false} onToggle={() => {}} />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBe(2);
  });

  it('calls onToggle when clicked', () => {
    const onToggle = vi.fn();
    render(<Toggle isActive={false} onToggle={onToggle} />);
    const toggleTrack = document.querySelector('[role="switch"]');
    fireEvent.click(toggleTrack);
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it('applies translate class when isActive is true', () => {
    const { container } = render(<Toggle isActive={true} onToggle={() => {}} />);
    const knob = container.querySelector('.translate-x-\\[25px\\]');
    expect(knob).toBeInTheDocument();
  });

  it('applies translate class when isActive is false', () => {
    const { container } = render(<Toggle isActive={false} onToggle={() => {}} />);
    const knob = container.querySelector('.translate-x-0');
    expect(knob).toBeInTheDocument();
  });
});
