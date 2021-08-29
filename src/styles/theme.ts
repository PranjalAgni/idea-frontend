import { colors, themeNames } from "../constants/styleConstants";

const darkTheme = {
    mode: themeNames.DARK,
    color: {
        background: {
            primary: colors.cyanBlue,
            secondary: colors.black
        },
        text: {
            primary: colors.white,            
        }, 
        button: {
            primary: colors.accent,
            secondary: colors.cyanBlue
        }
    }    
};

const lightTheme = {
    mode: themeNames.LIGHT,
    color: {
        background: {
            primary: colors.accent,
            secondary: colors.white
        },
        text: {
            primary: colors.black,             
        }, 
        button: {
            primary: colors.cyanBlue,
            secondary: colors.accent
        }
    }    
};

export const themes = [darkTheme, lightTheme]; 