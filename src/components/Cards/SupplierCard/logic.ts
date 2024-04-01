import { useState } from "react";
import { SupplierWithQuoteItemsType } from "../../../redux/types";

const useLogic = ( { quote } : { quote : SupplierWithQuoteItemsType}) => { 
      const [open, setOpen] = useState(false);

      const onClose = () => {
          setOpen(false);
      }
  
      const backgroundColor = quote.colorScheme?.backgroundColor;
      const borderColor = quote.colorScheme?.borderColor;

      const scoreBackgroundColor = quote.ratingColorScheme?.backgroundColor;
    const scoreBorderColor = quote.ratingColorScheme?.borderColor;
    const scoreTextColor = quote.ratingColorScheme?.textColor;
    
    return {
        backgroundColor,
        borderColor,
        scoreBackgroundColor,
        scoreBorderColor,
        scoreTextColor,
        open,
        setOpen,
        onClose
    }
}

export default useLogic;