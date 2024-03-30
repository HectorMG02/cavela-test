const useLogic = () => {
    const supplierData = [
        { variant: 'Black Ash', quantity: 250, cost: '$1', leadTime: '35 days', moq: 250, sampleCost: '$50' },
        { variant: 'Brown Ash', quantity: 250, cost: '$1.50', leadTime: '40 days', moq: 250, sampleCost: '$60' },
      ];
      
    return {
        supplierData
    }
}

export default useLogic;