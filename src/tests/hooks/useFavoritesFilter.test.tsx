import React from 'react'
import { renderHook, act } from '@testing-library/react'
import useFavoritesFilter from '../../hooks/filters/useFavoritesFilter'
import { testDataCharactaersList } from '../../api/testData'
import { FavoritesContext } from '../../components/Contexts/favoritesContect'

let favorites: Array<number> = []
const wrapper = ({ children }: { children: React.ReactNode }) => (
    <FavoritesContext.Provider
        value={{ favorites: favorites, setFavorites: () => {} }}
    >
        {children}
    </FavoritesContext.Provider>
)

describe('useFavoritesFilter', () => {
    test('Filter initial state should be false', () => {
        const { result } = renderHook(
            () =>
                useFavoritesFilter({
                    data: testDataCharactaersList.data,
                    favoritesFilter: '',
                }),
            { wrapper }
        )

        expect(result.current.isFavoritesFiltered).not.toBeTruthy()
    })

    test('Filter active but the list of favorites emty', () => {
        const { result } = renderHook(
            () =>
                useFavoritesFilter({
                    data: testDataCharactaersList.data,
                    favoritesFilter: 'favorites',
                }),
            { wrapper }
        )
        expect(result.current.favoritesDataFiltered).toBeUndefined()
    })

    test('Filter active whith two characters on the list', () => {
        favorites = [1011334, 1017100]
        const { result } = renderHook(
            () =>
                useFavoritesFilter({
                    data: testDataCharactaersList.data,
                    favoritesFilter: 'favorites',
                }),
            { wrapper }
        )

        expect(result.current.favoritesDataFiltered?.results.length).toBe(2)
    })

    test('call notFilter set isFavoritesFiltered to false', () => {
        favorites = [1011334, 1017100]
        const { result } = renderHook(
            () =>
                useFavoritesFilter({
                    data: testDataCharactaersList.data,
                    favoritesFilter: 'favorites',
                }),
            { wrapper }
        )

        expect(result.current.isFavoritesFiltered).toBeTruthy()

        act(() => {
            result.current.notFilter()
        })

        expect(result.current.isFavoritesFiltered).not.toBeTruthy()
    })
})
