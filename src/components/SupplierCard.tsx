import React from 'react';

type Variant = {
  name: string;
  quantity: number;
  unitCost: string;
  total: string;
};

type SupplierCardProps = {
  name: string;
  rating: number;
  variants?: Variant[];
  badges: string[];
};

const SupplierCard: React.FC<SupplierCardProps> = ({ name, rating, badges }) => {
  return (
    <div className="max-w-sm rounded shadow-lg bg-white m-4 p-4 relative border-4 border-green-100">
      <div className="flex justify-between items-center mb-4">
        <div className='p-3'>
          <h3 className="font-bold text-3xl">{name}</h3>
          <div className="flex">
            {badges.map((badge, index) => (
              <span
                key={index}
                className={`inline-block bg-blue-100 text-blue-800 text-xs px-2 rounded-full m-1`}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-full h-8 w-8 flex items-center justify-center bg-green-200 text-green-700">
          {rating}
        </div>
      </div>

      <button className="absolute top-2 right-2 transform translate-x-1/2 -translate-y-1/2 text-black hover:text-gray-700 border-[2.5px] border-slate-950 rounded-full p-1 bg-white">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      

      
    </div>
  );
};

export default SupplierCard;
