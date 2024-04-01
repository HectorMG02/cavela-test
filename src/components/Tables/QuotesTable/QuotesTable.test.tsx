import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi} from 'vitest';
import QuotesTable from './QuotesTable'; // Update the import path as needed
import useLogic from './logic';

const testSupplier1 = {
    supplier_id: '1',
    name: 'Test Supplier',
    score: '4.5',
    ratingColorScheme: { backgroundColor: 'blue', borderColor: 'blue', textColor: 'white' },
    quoteItems: [
        {
            id: '1',
            variant: 'product 1 - Test Variant',
            quantity: '10',
            cost: '100',
            lead_time: '2 days',
        }
    ],
  }

const mockProps = {
    onClose: vi.fn(),
    mode: 'edit',
    currentData: {
      supplier_id: '1',
      name: 'Test Supplier',
      score: '4.5',
      ratingColorScheme: { backgroundColor: 'blue', borderColor: 'blue', textColor: 'white' },
      quoteItems: [],
    },
  }; 


vi.mock('../../RatingBox/RatingBox', () => ({
    default: vi.fn(({ rating }) => <div>RatingBox Mock: Rating - {rating}</div>),
  }));
  

vi.mock('./logic', () => ({
    default: vi.fn(() => ({
      allQuotes: [testSupplier1],
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
  