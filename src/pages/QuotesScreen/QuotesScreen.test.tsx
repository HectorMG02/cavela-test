import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import QuotesScreen from './QuotesScreen';
import useLogic from './logic';
import { testSupplier1, testSupplier2, testSupplier3 } from '../../test/setup';



vi.mock('./logic', () => ({
    default: vi.fn(() => ({
      loading: false,
      availableQuotes: [],
      closeCard: vi.fn(),
    })),
  }));
  

vi.mock('../../components/Cards/SupplierCard/SupplierCard', () => ({
  default: vi.fn(() => <div>SupplierCard Mock</div>),
}));

vi.mock('../../components/Skeletons/SupplierCardSkeleton/SupplierCardSkeleton', () => ({
  default: vi.fn(() => <div>SupplierCardSkeleton Mock</div>),
}));

vi.mock('../../components/Cards/PlaceholderCard/PlaceholderCard', () => ({
  default: vi.fn(() => <div>PlaceholderCard Mock</div>),
}));




describe('QuotesScreen Loading State', () => {
    it('renders skeletons while loading', () => {
      vi.mocked(useLogic).mockImplementation(() => ({
        loading: true,
        availableQuotes: [],
        closeCard: vi.fn(),
      }));
  
      render(<QuotesScreen />);
      expect(screen.getAllByText('SupplierCardSkeleton Mock').length).toBeGreaterThan(0);
        expect(screen.getAllByText('SupplierCardSkeleton Mock').length).toBeLessThan(4);
    });
  });
  


  describe('QuotesScreen Placeholders', () => {
    it('renders placeholders if fewer than 3 quotes are available', () => {
      vi.mocked(useLogic).mockImplementation(() => ({
        loading: false,
        availableQuotes: [testSupplier1, testSupplier2],
        closeCard: vi.fn(),
      }));
  
      render(<QuotesScreen />);
      expect(screen.getByText('PlaceholderCard Mock')).toBeInTheDocument();
    });

    it('renders no placeholders if 3 quotes are available', () => {
      vi.mocked(useLogic).mockImplementation(() => ({
        loading: false,
        availableQuotes: [testSupplier1, testSupplier2, testSupplier3],
        closeCard: vi.fn(),
      }));
  
      render(<QuotesScreen />);
      expect(screen.queryByText('PlaceholderCard Mock')).not.toBeInTheDocument();
    });
  });
  


  
  