import { QuoteItemType, RawQuoteTypes, SupplierType } from "../types/dataTypes"


export const SUPPLIERS: SupplierType [] = [
    {
      "supplier_id": "597d3e89-7b7d-4f55-a0b5-861a08f58cad",
      "name": "Supplier 1",
      "score": 4.9
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82ea18",
      "name": "Supplier 2",
      "score": 4.2
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82eb20",
      "name": "Supplier 3",
      "score": 5
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82ec21",
      "name": "Supplier 4",
      "score": 3.2
    }
  ]


export const QUOTES: RawQuoteTypes[] = [
    {
      "quote_items": ["1be92e49-98a0-44e6-a9d4-7a9fd480b22c", "52fe34bf-2d54-48c1-a3e6-f7a8ee6560b7"],
      "badges": [
        ["reviews", 1],
        ["cost", 2]
      ]
    },
    {
      "quote_items": ["1be92e49-98a0-44e5-a9d4-7a9fd480b33d", "52fe34bf-2d54-48c1-a3e6-f7a8ee6561c8"],
      "badges": [["cost", 1]]
    }
  ]



export const QUOTE_ITEMS: QuoteItemType[] = [
    {
      "supplier_id": "597d3e89-7b7d-4f55-a0b5-861a08f58cad",
      "quote_item_id": "1be92e49-98a0-44e6-a9d4-7a9fd480b22c",
      "variant": "Product A - Variant 1",
      "moq": 100,
      "quantity": 150,
      "unit_cost": "$5.00",
      "lead_time": "2 weeks",
      "sample_cost": "$50",
      "badges": [["cavela_choice", true]]
    },
    {
      "supplier_id": "597d3e89-7b7d-4f55-a0b5-861a08f58cad",
      "quote_item_id": "52fe34bf-2d54-48c1-a3e6-f7a8ee6560b7",
      "variant": "Product B - Variant 2",
      "moq": 200,
      "quantity": 200,
      "unit_cost": "$4.50",
      "lead_time": "3 weeks",
      "sample_cost": "$45",
      "badges": [["cavela_choice", false]]
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82ea18",
      "quote_item_id": "1be92e49-98a0-44e5-a9d4-7a9fd480b33d",
      "variant": "Product A - Variant 1",
      "moq": 100,
      "quantity": 150,
      "unit_cost": "$5.00",
      "lead_time": "2 weeks",
      "sample_cost": "$50",
      "badges": [["cavela_choice", true]]
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82ea18",
      "quote_item_id": "52fe34bf-2d54-48c1-a3e6-f7a8ee6561c8",
      "variant": "Product B - Variant 2 With a longer name",
      "moq": 200,
      "quantity": 200,
      "unit_cost": "$4.50",
      "lead_time": "3 weeks",
      "sample_cost": "$45",
      "badges": [["cavela_choice", true]]
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82eb20",
      "quote_item_id": "1be92e49-98a0-44e5-a9d4-7a9fd480b44c",
      "variant": "Product A - Variant 1",
      "moq": 100,
      "quantity": 150,
      "unit_cost": "$5.00",
      "lead_time": "2 weeks",
      "sample_cost": "$50",
      "badges": [["cavela_choice", false]]
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82eb20",
      "quote_item_id": "52fe34bf-2d54-48c1-a3e6-f7a8ee6561d9",
      "variant": "Product B - Variant 2",
      "moq": 200,
      "quantity": 200,
      "unit_cost": "$4.50",
      "lead_time": "3 weeks",
      "sample_cost": "$45",
      "badges": [["cavela_choice", false]]
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82ec21",
      "quote_item_id": "1be92e49-98a0-44e5-a9d4-7a9fd480b55e",
      "variant": "Product A - Variant 1",
      "moq": 100,
      "quantity": 150,
      "unit_cost": "$5.00",
      "lead_time": "2 weeks",
      "sample_cost": "$50",
      "badges": [["cavela_choice", false]]
    },
    {
      "supplier_id": "0979cd94-7799-47e2-bb36-5fd2dd82ec21",
      "quote_item_id": "52fe34bf-2d54-48c1-a3e6-f7a8ee6561e1",
      "variant": "Product B - Variant 2",
      "moq": 200,
      "quantity": 200,
      "unit_cost": "$4.50",
      "lead_time": "3 weeks",
      "sample_cost": "$45",
      "badges": [["cavela_choice", false]]
    }
  ]
