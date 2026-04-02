import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  it('renders with initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });

  it('renders with custom initial count', () => {
    render(<Counter initialCount={10} />);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });

  it('increments the counter', () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId('increment-btn');
    
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
    
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('2');
  });

  it('decrements the counter', () => {
    render(<Counter initialCount={5} />);
    const decrementBtn = screen.getByTestId('decrement-btn');
    
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('4');
  });

  it('resets the counter to initial value', () => {
    render(<Counter initialCount={3} />);
    const incrementBtn = screen.getByTestId('increment-btn');
    const resetBtn = screen.getByTestId('reset-btn');
    
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('5');
    
    fireEvent.click(resetBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('3');
  });
});
