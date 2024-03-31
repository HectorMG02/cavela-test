/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UseQuoteLogicProps {
    onClose: () => void;
    currentData?: any;
    mode: 'create' | 'edit';
}

export interface QuoteTableProps {
    onClose: () => void;
    mode: 'create' | 'edit';
    currentData?: any;
  }