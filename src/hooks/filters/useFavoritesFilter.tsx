import { useState, useEffect, useContext, useCallback } from 'react'
import { Data, CharacterResult } from '../../types/apiTypes'
import { FavoritesContext } from '../../components/Contexts/favoritesContect'

//const { favoriteDataFilter, isFavoritesFiltered} = useFavoritesFilter(data);
interface useFavoritesFilterTypes {
    data: Data<Array<CharacterResult>> | undefined
    favoritesFilter: string | undefined
}

const useFavoritesFilter = function useFavoritesFilter({
    data,
    favoritesFilter,
}: useFavoritesFilterTypes) {
    const [isFavoritesFiltered, setIsFavoritesFiltered] =
        useState<boolean>(false)
    const [favoritesDataFiltered, setFavoritesDataFiltered] =
        useState<Data<CharacterResult[]>>()
    const { favorites } = useContext(FavoritesContext)
    const favoriteDataFilter = useCallback(() => {
        if (
            data !== undefined &&
            favorites.length > 0 &&
            data.results !== undefined
        ) {
            const ResultFiltered = data.results?.filter((character) => {
                return favorites.includes(character.id)
            })
            if (ResultFiltered !== undefined) {
                setFavoritesDataFiltered({
                    offset: data.offset,
                    limit: data.limit,
                    total: data.total,
                    count: ResultFiltered.length,
                    results: ResultFiltered,
                })
                setIsFavoritesFiltered(true)
            }
        }
    // eslint-disable-next-line
    }, [data, favorites])

    const notFilter = useCallback(() => {
        setIsFavoritesFiltered(false)
    }, [])

    useEffect(() => {
        if (favoritesFilter === undefined) {
            notFilter()
        } else {
            if (data !== undefined) favoriteDataFilter()
        }
    // eslint-disable-next-line
    }, [favoritesFilter, data])

    return { favoritesDataFiltered, isFavoritesFiltered, notFilter }
}

export default useFavoritesFilter
