const useLogic = () => {
    const supplierData = [
       {
            name: "Supplier 1",
            quotes: [
                { variant: 'Black Ash', quantity: 250, cost: '$1', leadTime: '35 days', moq: 250, sampleCost: '$50' },
                { variant: 'Brown Ash', quantity: 250, cost: '$1.50', leadTime: '40 days', moq: 250, sampleCost: '$60' },
            ]
       },
       {
            name: "Supplier 2",
            quotes: [
                { variant: 'Black Ash', quantity: 250, cost: '$1.20', leadTime: '35 days', moq: 250, sampleCost: '$50' },
                { variant: 'Brown Ash', quantity: 250, cost: '$1.70', leadTime: '40 days', moq: 250, sampleCost: '$60' },
                { variant: 'White Ash', quantity: 250, cost: '$1.70', leadTime: '40 days', moq: 250, sampleCost: '$60' },
                { variant: 'Grey Ash', quantity: 250, cost: '$1.70', leadTime: '40 days', moq: 250, sampleCost: '$60' },
            ]
       },
       {
        name: "Supplier 3",
        quotes: [
            { variant: 'Black Ash', quantity: 250, cost: '$1.20', leadTime: '35 days', moq: 250, sampleCost: '$50' },
            { variant: 'Brown Ash', quantity: 250, cost: '$1.70', leadTime: '40 days', moq: 250, sampleCost: '$60' },
            { variant: 'White Ash', quantity: 250, cost: '$1.70', leadTime: '40 days', moq: 250, sampleCost: '$60' },
        ]
        },
        {
            name: "Supplier 4",
            quotes: [
                { variant: 'Black Ash', quantity: 250, cost: '$1.20', leadTime: '35 days', moq: 250, sampleCost: '$50' },
                { variant: 'Brown Ash', quantity: 250, cost: '$1.70', leadTime: '40 days', moq: 250, sampleCost: '$60' },
            ]
       }
      ];
      
    return {
        supplierData
    }
}

export default useLogic;