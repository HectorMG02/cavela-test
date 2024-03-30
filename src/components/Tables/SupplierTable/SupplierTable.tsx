import { ratingColorSchemes } from "../../../utils/colors";
import RatingBox from "../../RatingBox/RatingBox";

const SupplierTable = () => {
  const supplierData = [
    { variant: 'Black Ash', quantity: 250, cost: '$1', leadTime: '35 days', moq: 250, sampleCost: '$50' },
    { variant: 'Brown Ash', quantity: 250, cost: '$1.50', leadTime: '40 days', moq: 250, sampleCost: '$60' },
  ];
  
  

  return (
    <div className="flex flex-row items-center">
    <h2 className="text-xl font-bold text-gray-700 mr-4">Supplier 1</h2>
    <RatingBox
                backgroundColor={ratingColorSchemes[2].backgroundColor}
                borderColor={ratingColorSchemes[2].borderColor}
                textColor={ratingColorSchemes[2].textColor}
                rating={"5.0"}
            />
    <div className="flex-grow overflow-x-auto">
    <table className="w-[90%] divide-y divide-gray-500 text-left">
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
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Add to Quote
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
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
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
