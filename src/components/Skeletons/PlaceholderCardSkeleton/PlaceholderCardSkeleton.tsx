const PlaceholderCardSkeleton = () => (
    <div className="w-full rounded m-8 p-4 relative border-4 border-dashed  bg-gray-200/50 border-gray-300">
    
    <div className="flex justify-center items-center w-full h-full">
                <svg
                    className="size-[60px] text-gray-200 mx-auto border-8 rounded-md border-gray-200 group-hover:text-gray-400 group-hover:border-gray-400 transition-all duration-300 ease-in-out"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            </div>
  </div>
);

export default PlaceholderCardSkeleton;
