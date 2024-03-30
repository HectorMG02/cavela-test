 
import { ratingColorSchemes } from "../../../utils/colors";
import RatingBox from "../../RatingBox/RatingBox";
import useLogic from "./logic";

const SupplierTable = () => {
  const { supplierData } = useLogic();

  return (
    <div>
      {supplierData.map((supplier, supplierIndex) => (
        <div key={supplierIndex} className="flex flex-row items-center mt-10">

            <div className="flex flex-row items-center mr-4 mt-[50px]">
              <h2 className="text-xl font-bold text-gray-700 mr-2">Supplier 1</h2>
              <RatingBox
                backgroundColor={ratingColorSchemes[2].backgroundColor}
                borderColor={ratingColorSchemes[2].borderColor}
                textColor={ratingColorSchemes[2].textColor}
                rating={"5.0"}
                className="size-12 p-3"
              />
            </div>
    <div className="flex-grow overflow-x-auto">

            <table className="w-full divide-y divide-gray-500 text-left">
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
                {supplier.quotes.map((quote, quoteIndex) => (
                  <tr key={quoteIndex}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {quote.variant}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {quote.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {quote.cost}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {quote.leadTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {quote.moq}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {quote.sampleCost}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 
                    flex items-center justify-center
                    ">
                      <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
     
     <div className="pb-20">
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out active:bg-blue-800 hover:shadow-lg mb-5 mt-10 float-end"
      >
         Apply
       </button>
    </div>
    

    </div>
  );
};

export default SupplierTable;







 