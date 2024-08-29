import React,{ createContext, useState } from "react";
import {favoritesContextType, favorites} from "../../types/favoritesContextTypes"


const FavoritesContext = createContext<favoritesContextType>({} as favoritesContextType);

const  FavoritesContextProvider=({children}:React.PropsWithChildren ) => {
    //const {value,setValue}=useFavoriteContext();
    const [favorites, setFavorites] = useState<favorites>([]);
    return (
      <FavoritesContext.Provider value={{favorites, setFavorites}}>
        {children}
      </FavoritesContext.Provider>
    );
  }
  
  export { FavoritesContextProvider, FavoritesContext };