
const SupplierTable = () => {
  const supplierData = [
    { variant: 'Black Ash', quantity: 250, cost: '$1', leadTime: '35 days', moq: 250, sampleCost: '$50' },
    { variant: 'Brown Ash', quantity: 250, cost: '$1.50', leadTime: '40 days', moq: 250, sampleCost: '$60' },
  ];
  
  

  return (
    <div className="flex flex-col">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Suppliers</h3>
      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
        Add Supplier
      </button>
    </div>
    <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Variant
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cost
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Lead Time
            </th> 
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              MOQ
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sample Cost
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {supplierData.map((supplier, index) => (
            <tr key={index}>
               <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {supplier.variant}
                </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {supplier.quantity}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {supplier.cost}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {supplier.leadTime}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {supplier.moq}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {supplier.sampleCost}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default SupplierTable;
