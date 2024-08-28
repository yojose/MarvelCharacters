import { useState, useEffect, useRef, useContext } from "react";
import { Data, CharacterResult } from "../../types/apiTypes";
import { FavoritesContext } from "../../components/Contexts/favoritesContect";

//const { favoriteDataFilter, isFavoritesFiltered} = useFavoritesFilter(data);

const useFavoritesFilter = function useFavoritesFilter(data: Data<Array<CharacterResult> | undefined>) {
    const [isFavoritesFiltered, setIsFavoritesFiltered] = useState<boolean>(true);
    const [favoritesDataFiltered, setFavoritesDataFiltered] = useState<Data<CharacterResult[]>>();
    const { favorites } = useContext(FavoritesContext);

    useEffect(() => {

    }, [data]);

    const favoriteDataFilter = () => {
        if (data !== undefined && favorites.length > 0 && data.results!==undefined) {
            
            const ResultFiltered = data.results?.filter((character) => { return favorites.includes(character.id) });

            if (ResultFiltered !== undefined) {
                setFavoritesDataFiltered({
                    offset: data.offset,
                    limit: data.limit,
                    total: data.total,
                    count: ResultFiltered.length,
                    results: ResultFiltered
                });
                setIsFavoritesFiltered(true);
            }
        }
    }

    return { favoriteDataFilter, favoritesDataFiltered, isFavoritesFiltered }
}

export default useFavoritesFilter;