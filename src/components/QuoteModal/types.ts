/* eslint-disable @typescript-eslint/no-explicit-any */
export interface QuoteModalProps {
    onClose: () => void;
    mode: 'create' | 'edit';
    quoteData?: any;
}