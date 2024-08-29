import {useContext, useCallback } from "react";
import {FavoritesContext} from "../../components/Contexts/favoritesContect";

export default function useFavoritesContext() {
    const {favorites, setFavorites} = useContext(FavoritesContext);

    const isOnFavoritos=(characterId:number)=>{
        return favorites.includes(characterId);
    }

    const removeFromFavorites=useCallback((characterId:number)=>{
        const favoritesCopy=[...favorites,...[]];
        const index = favoritesCopy.indexOf(characterId);
        favoritesCopy.splice(index, 1);
        return favoritesCopy
    },[favorites])

    const changeFavoritos=(characterId:number)=>{
        let newfavorites:Array<number>=[];

        if(isOnFavoritos(characterId)){
            newfavorites=removeFromFavorites(characterId);
        }else{
            newfavorites=[...favorites,...[characterId]];
        }
        setFavorites(newfavorites);
    }

    return {changeFavoritos, isOnFavoritos}

}