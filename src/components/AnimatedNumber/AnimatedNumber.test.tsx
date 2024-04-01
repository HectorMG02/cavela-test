import { render, screen } from '@testing-library/react';
import AnimatedNumber from './AnimatedNumber';
import { it, expect } from 'vitest';


it("should render AnimatedNumber", () => {
    render(<AnimatedNumber value={0} />);
    expect(screen.getByTestId('animated-number')).toBeInTheDocument();
    expect(screen.getByTestId('animated-number')).toHaveTextContent('0.00');
})