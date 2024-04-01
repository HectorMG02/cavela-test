import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi} from 'vitest';
import QuotesTable from './QuotesTable';
import { SupplierWithQuoteItemsType } from '../../../redux/types';

const testSupplier1: SupplierWithQuoteItemsType = {
    supplier_id: '1',
    name: 'Test Supplier 1',
    score: 3.0,
    ratingColorScheme: { backgroundColor: 'red', borderColor: 'red', textColor: 'white', minScore: 4 },
    quoteItems: [
        {
            quote_item_id: '1',
            variant: 'product 1 - Test Variant 1',
            quantity: 5,
            moq: 20,
            lead_time: '1 day',
            supplier_id: '',
            unit_cost: '',
            sample_cost: '',
            badges: []
        }
    ],
    colorScheme: { backgroundColor: 'red', borderColor: 'red', minScore: 4},
}


  const testSupplier2: SupplierWithQuoteItemsType = {
    supplier_id: '2',
    name: 'Test Supplier 2',
    score: 4.0,
    ratingColorScheme: { backgroundColor: 'red', borderColor: 'red', textColor: 'white', minScore: 4 },
    quoteItems: [
        {
            quote_item_id: '2',
            variant: 'product 2- Test Variant 2',
            quantity: 10,
            moq: 15,
            lead_time: '2 day',
            supplier_id: '',
            unit_cost: '',
            sample_cost: '',
            badges: []
        }
    ],
    colorScheme: { backgroundColor: 'red', borderColor: 'red', minScore: 4},
}

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
      allQuotes: [testSupplier1, testSupplier2],
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
  