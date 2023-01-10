import React,{createContext,useEffect,useState} from 'react'

 const ThemeContext=createContext();
const ThemeContextProvider = (props) => {
    const [toggle,setToggle]=useState();

   const togglefunction=()=>{
    setToggle(toggle=>!toggle);
   }
    // useEffect(()=>{
    //   if(toggle)
    // { document.body.style.backgroundColor="#ffff";

    //   }
    //   else{
    //     document.body.style.backgroundColor="#ffffff";
    //   }

    // },[toggle]);
  
  return (
    <div>
        <ThemeContext.Provider value={{toggle,togglefunction}}>
         {props.children}      
        </ThemeContext.Provider>
        </div>
  )
}

export {ThemeContext,ThemeContextProvider} 