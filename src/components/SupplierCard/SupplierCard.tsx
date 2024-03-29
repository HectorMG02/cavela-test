import React from 'react';
import QuotesTable from '../QuotesTable/QuotesTable';
import { SupplierCardProps } from './types';
import useLogic from './logic';

const SupplierCard: React.FC<SupplierCardProps> = ({ name, rating, colorScheme, ...rest }) => {
  const { backgroundColor, borderColor } = useLogic({ colorScheme });
 
  console.log(rest)

  return (
    <div className="max-w-sm rounded shadow-lg m-4 p-4 relative border-4"
      style={{ backgroundColor: backgroundColor, borderColor: borderColor }}>
      <div className="flex justify-between items-center mb-4">
        <div className='p-3'>
          <h3 className="font-bold text-3xl">{name}</h3>
        </div>
        <div className="size-10 flex items-center justify-center bg-green-200 text-green-700 border-2 
            border-green-700 p-2 m-5 rounded-md
        ">
          {rating}
        </div>
      </div>

      <button className="absolute top-2 right-2 transform translate-x-1/2 -translate-y-1/2 text-black hover:text-gray-700 border-[2.5px] border-slate-950 rounded-full p-1 bg-white">
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <QuotesTable/>
    </div>
  );
};

export default SupplierCard;
