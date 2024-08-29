import React,{ createContext, useState } from "react";
import { GlovalContext, GlovalContextData } from "../../types/globalContextTypes"
import {Data,Favorites} from "../../types/apiTypes"


const CharactersContext = createContext<GlovalContext | undefined>(undefined);

const  DefineGlobalContext=({children}:React.PropsWithChildren ) => {
    const [globalContext, setGlobalContext] = useState<GlovalContextData>();
    return (
      <CharactersContext.Provider value={{globalContext, setGlobalContext}}>
        {children}
      </CharactersContext.Provider>
    );
  }
  
  export { DefineGlobalContext, CharactersContext };