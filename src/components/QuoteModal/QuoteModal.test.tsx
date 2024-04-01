import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import QuoteModal from './QuoteModal'; // Adjust the import path as necessary

vi.mock('../Tables/QuotesTable/QuotesTable', () => {
  return {
    default: vi.fn(() => <div>Mocked QuoteTable</div>),
  };
});


describe('QuoteModal', () => {
    it('renders correctly in create mode', () => {
      render(<QuoteModal onClose={() => {}} mode="create" />);
      expect(screen.getByText('Create A New Quote')).toBeInTheDocument();
    });
  
    it('renders correctly in edit mode', () => {
      render(<QuoteModal onClose={() => {}} mode="edit" />);
      expect(screen.getByText('Edit Quote')).toBeInTheDocument();
    });

    it('calls onClose when the modal background is clicked', () => {
        const onCloseMock = vi.fn();
        render(<QuoteModal onClose={onCloseMock} mode="create" />);
      
        fireEvent.click(screen.getByTestId('new-quote-modal'));
        expect(onCloseMock).toHaveBeenCalled();
      });
      
  });
  