import useLogic from "./logic";

const NewQuoteModal = ( { onClose }: { onClose: () => void}) => {
    useLogic({onClose})
   
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="new-quote-modal">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                {/* Icon or Image */}
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">New Quote</h3>
              <div className="mt-2 px-7 py-3">
                {/* Content goes here: this is where you would add the form fields as per your layout */}
    
                <div className="mt-4">
                  <button
                    onClick={onClose}
                    className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => { /* Handle Save Here */ }}
                    className="bg-blue-500 text-white py-2 px-4 rounded float-right hover:bg-blue-700"
                  >
                    Save Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default NewQuoteModal