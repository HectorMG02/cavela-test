import { CardsColorScheme } from "./types";

const useLogic = ( { colorScheme, scoreColorScheme } : { colorScheme : CardsColorScheme | undefined, 
    scoreColorScheme : CardsColorScheme | undefined
    }) => { 
    
      const backgroundColor = colorScheme?.backgroundColor;
      const borderColor = colorScheme?.borderColor;

      const scoreBackgroundColor = scoreColorScheme?.backgroundColor;
    const scoreBorderColor = scoreColorScheme?.borderColor;
    const scoreTextColor = scoreColorScheme?.textColor;
    
    return {
        backgroundColor,
        borderColor,
        scoreBackgroundColor,
        scoreBorderColor,
        scoreTextColor
    }
}

export default useLogic;