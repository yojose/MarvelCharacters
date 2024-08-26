import React,{ createContext, useState } from "react";
import { GlovalContext, GlovalContextData } from "../../types/globalContextTypes"


const GlobalContext = createContext<GlovalContext | undefined>(undefined);

/*const initialState={
    data:{},
    favorites:[]
}*/

const  DefineGlobalContext=({children}:React.PropsWithChildren ) => {
    const [globalContext, setGlobalContext] = useState<GlovalContextData>();
    return (
      <GlobalContext.Provider value={{globalContext, setGlobalContext}}>
        {children}
      </GlobalContext.Provider>
    );
  }
  
  export { DefineGlobalContext, GlobalContext };