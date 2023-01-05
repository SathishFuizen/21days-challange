import React,{createContext} from 'react'


export const themes={
    dark:"",
    light:"changeSportcolor",
};
export const ThemeContext = createContext( {

    theme:themes.dark,
    changeTheme:()=>{},
 
})

