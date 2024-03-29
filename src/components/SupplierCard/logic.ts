import { CardsColorScheme } from "./types";

const useLogic = ( { colorScheme } : { colorScheme : CardsColorScheme | undefined}) => {
    const defaultColorScheme = {
        backgroundColor: '#FFFFFF',
        borderColor: '#D1D5DB'
      };
    
    
      const backgroundColor = colorScheme?.backgroundColor || defaultColorScheme.backgroundColor;
      const borderColor = colorScheme?.borderColor || defaultColorScheme.borderColor;
    
    return {
        backgroundColor,
        borderColor
    }
}

export default useLogic;