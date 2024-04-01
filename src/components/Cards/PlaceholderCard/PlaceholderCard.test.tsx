import { render, screen, fireEvent } from '@testing-library/react';
import PlaceholderCard from './PlaceholderCard';
import { it, expect } from 'vitest';

 
vi.mock('../../QuoteModal/QuoteModal', () => {
    return {
      default: vi.fn(() => <div>Mocked QuoteModal</div>),
    };
  });
  
  describe('PlaceholderCard', () => {
    it('renders correctly', () => {
      render(<PlaceholderCard />);

      const placeholder = screen.getByRole('button');
      expect(placeholder).toBeInTheDocument();
    });
  
    it('opens QuoteModal on click', () => {
      render(<PlaceholderCard />);
      const placeholder = screen.getByRole('button');
      
      fireEvent.click(placeholder);
      expect(screen.getByText('Mocked QuoteModal')).toBeInTheDocument();
    });
  
  });