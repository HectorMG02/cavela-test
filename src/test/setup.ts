import '@testing-library/jest-dom'
import { SupplierWithQuoteItemsType } from '../redux/types'



export const testSupplier1: SupplierWithQuoteItemsType = {
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


export const testSupplier2: SupplierWithQuoteItemsType = {
    supplier_id: '2',
    name: 'Test Supplier 2',
    score: 4.0,
    ratingColorScheme: { backgroundColor: 'red', borderColor: 'red', textColor: 'white', minScore: 4 },
    quoteItems: [
        {
            quote_item_id: '2',
            variant: 'product 2 - Test Variant 2',
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

export const testSupplier3: SupplierWithQuoteItemsType = {
  supplier_id: '3',
  name: 'Test Supplier 3',
  score: 4.0,
  ratingColorScheme: { backgroundColor: 'red', borderColor: 'red', textColor: 'white', minScore: 4 },
  quoteItems: [
      {
          quote_item_id: '3',
          variant: 'product 3 - Test Variant 3',
          quantity: 5,
          moq: 10,
          lead_time: '3 day',
          supplier_id: '',
          unit_cost: '',
          sample_cost: '',
          badges: []
      }
  ],
  colorScheme: { backgroundColor: 'red', borderColor: 'red', minScore: 4},
}


 