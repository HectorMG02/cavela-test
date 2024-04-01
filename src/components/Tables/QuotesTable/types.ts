import { SupplierWithQuoteItemsType } from "../../../redux/types";

export interface UseQuoteLogicProps {
    onClose: () => void;
    currentData?: SupplierWithQuoteItemsType;
    mode: 'create' | 'edit';
}

export interface QuoteTableProps {
    onClose: () => void;
    mode: 'create' | 'edit';
    currentData?: SupplierWithQuoteItemsType;
  }