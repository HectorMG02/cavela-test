import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import QuotesSummaryTable from './QuotesSummaryTable';

vi.mock('../../AnimatedNumber/AnimatedNumber', () => ({
  default: vi.fn(({ value }) => <div>Animated Number: {value}</div>),
}));


describe('QuotesSummaryTable', () => {
    const variants = [
      { name: "Product - A 1", quantity: 2, unitCost: "10.00", total: "20.00" },
      { name: "Product - B 2", quantity: 1, unitCost: "15.00", total: "15.00" }
    ];
  
    it('renders table rows for each variant and calculates total correctly', () => {
    render(<QuotesSummaryTable variants={variants} />);
  
    expect(screen.getAllByText("A 1")[0]).toBeInTheDocument();
    expect(screen.getAllByText("B 2")[0]).toBeInTheDocument();
  
  
    expect(screen.getByText("Animated Number: 35")).toBeInTheDocument();
    });

    it('handles empty variants array gracefully', () => {
        render(<QuotesSummaryTable variants={[]} />);
        expect(screen.getByText("Animated Number: 0")).toBeInTheDocument();
      });
      
  });
  