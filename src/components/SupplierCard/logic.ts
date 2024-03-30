import { CardsColorScheme, RatingColorScheme } from "../../types/colorTypes";


const useLogic = ( { colorScheme, ratingColorScheme } : { colorScheme : CardsColorScheme | undefined, 
    ratingColorScheme : RatingColorScheme
    }) => { 
    
      const backgroundColor = colorScheme?.backgroundColor;
      const borderColor = colorScheme?.borderColor;

      const scoreBackgroundColor = ratingColorScheme?.backgroundColor;
    const scoreBorderColor = ratingColorScheme?.borderColor;
    const scoreTextColor = ratingColorScheme?.textColor;
    
    return {
        backgroundColor,
        borderColor,
        scoreBackgroundColor,
        scoreBorderColor,
        scoreTextColor
    }
}

export default useLogic;