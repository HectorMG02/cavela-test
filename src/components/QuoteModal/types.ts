import { SupplierWithQuoteItemsType } from "../../redux/types";

export interface QuoteModalProps {
    onClose: () => void;
    mode: 'create' | 'edit';
    quoteData?: SupplierWithQuoteItemsType
}