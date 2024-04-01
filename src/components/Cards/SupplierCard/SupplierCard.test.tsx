import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SupplierCard from './SupplierCard'; // Adjust the import path as necessary
import { SupplierWithQuoteItemsType } from '../../../redux/types';

vi.mock('../../RatingBox/RatingBox', () => {
  return {
    default: vi.fn(() => <div>Mocked RatingBox</div>),
  };
});

vi.mock('../../QuoteModal/QuoteModal', () => {
  return {
    default: vi.fn(() => <div>Mocked QuoteModal</div>),
  };
});

vi.mock('../../Tables/QuotesSummaryTable/QuotesSummaryTable', () => {
  return {
    default: vi.fn(() => <div>Mocked QuotesSummaryTable</div>),
  };
});

const quote: SupplierWithQuoteItemsType = {
  name: 'Test Supplier',
  score: 4.5,
  quoteItems: [],
  colorScheme: { backgroundColor: '#fff', borderColor: '#000', minScore: 0 },
  supplier_id: '1',
  ratingColorScheme: {
    backgroundColor: '',
    borderColor: '',
    textColor: '',
    minScore: 0
  }
};


describe('SupplierCard', () => {
  it('renders correctly with quote data', () => {
    const closeCard = vi.fn();

    render(<SupplierCard quote={quote} closeCard={closeCard} />);
    expect(screen.getByText('Test Supplier')).toBeInTheDocument();
    expect(screen.getByText('Mocked RatingBox')).toBeInTheDocument();
    expect(screen.getByText('Mocked QuotesSummaryTable')).toBeInTheDocument();
  })


  it('opens and closes the QuoteModal correctly', async () => {
    const closeCard = vi.fn();

    render(<SupplierCard quote={quote} closeCard={closeCard} />);
  
    fireEvent.click(screen.getByText('Test Supplier'));
    expect(screen.getByText('Mocked QuoteModal')).toBeInTheDocument(); 
  });
})
