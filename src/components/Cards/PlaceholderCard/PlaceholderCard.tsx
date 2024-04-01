import QuoteModal from "../../QuoteModal/QuoteModal";
import useLogic from "./logic";

const PlaceholderCard = () => {
    const { open, setOpen, onClose } = useLogic()

    return (
      <>
        <div className="w-full rounded m-8 p-4 relative border-4 border-dashed cursor-pointer hover:border-gray-400 transition-all duration-300 ease-in-out group min-h-[300px] hover:scale-105"
            onClick={() => setOpen(true)}
        >
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

            {
                open && <QuoteModal mode="create" onClose={onClose} />
            }
        </>
    );
};

export default PlaceholderCard;
