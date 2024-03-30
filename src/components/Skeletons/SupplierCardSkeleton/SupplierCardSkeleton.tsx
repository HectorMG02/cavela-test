import QuotesTableSkeleton from "../QuotesTableSkeleton/QuotesTableSkeleton";

const SupplierCardSkeleton = () => (
  <div className="animate-pulse w-full rounded shadow-lg m-8 p-4 relative border-4 bg-gray-200 border-gray-300
    min-h-[300px] min-w
  ">
    <div className="flex justify-between items-center mb-4">
      <div className='p-3 flex-1'>
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>
      </div>
      <div className="h-10 w-10 bg-gray-300 mr-5"></div>
    </div>

    <div className="absolute top-2 right-2 transform translate-x-6 -translate-y-1/2 size-10 rounded-full bg-gray-300" />
    <div className="absolute top-2 right-2 transform translate-x-6 translate-y-6 size-10 rounded-full bg-gray-300" />

    <div className="space-y-2">
        <QuotesTableSkeleton />
    </div>
  </div>
);

export default SupplierCardSkeleton;
