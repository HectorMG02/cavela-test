import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi} from 'vitest';
import QuotesTable from './QuotesTable';
import { testSupplier1, testSupplier2, testSupplier3 } from '../../../test/setup';



const mockProps = {
    onClose: vi.fn(),
    mode: 'edit',
    currentData: testSupplier1,
  }; 


vi.mock('../../RatingBox/RatingBox', () => ({
    default: vi.fn(({ rating }) => <div>RatingBox Mock: Rating - {rating}</div>),
  }));
  

vi.mock('./logic', () => ({
    default: vi.fn(() => ({
      allQuotes: [testSupplier1, testSupplier2, testSupplier3],
      availableQuotes: [testSupplier1],
      toggleQuote: vi.fn(),
      submitQuote: vi.fn(),
      checkQuoteIsDisabled: vi.fn(),
      checkInputChecked: vi.fn(),
      checkCanSubmit: vi.fn(() => false),
    })),
  }));
  

describe('QuotesTable without Redux', () => {
    it('renders correctly with provided quote data when create mode', () => {
      render(<QuotesTable
            onClose={mockProps.onClose}
            mode='create'
        />);
      expect(screen.getByText('Apply')).toBeInTheDocument();
    });


    it('renders correctly with provided quote data when edit mode', () => {
      render(<QuotesTable
            onClose={mockProps.onClose}
            mode='edit'
        />);

      expect(screen.getByText('Update changes')).toBeInTheDocument();
    });

    
   it("quote item name is displayed", () => {
    render(<QuotesTable
        onClose={mockProps.onClose}
        mode='edit'
    />);
    
    expect(screen.getByText(testSupplier1.name)).toBeInTheDocument();
   })

 
    
  });
  