import React from 'react'
import { render, screen } from '@testing-library/react'
import { Header } from '../../components/Header/Header'
import { FavoritesContext } from '../../components/Contexts/favoritesContect'
import { favoritesContextType } from '../../types/favoritesContextTypes'
import { BrowserRouter } from 'react-router-dom'

const favoritesWithcharacter = {
    value: {
        favorites: [1017100],
        setFavorites: jest.fn(),
    } as favoritesContextType,
}

const customRender = (
    ui: React.ReactNode,
    providerProps: typeof favoritesWithcharacter
) => {
    return render(
        <BrowserRouter>
            <FavoritesContext.Provider {...providerProps}>
                {ui}
            </FavoritesContext.Provider>
        </BrowserRouter>
    )
}

describe('Header', () => {
    test('Header render', async () => {
        const providerProps = { ...favoritesWithcharacter }
        customRender(<Header />, providerProps)
        const element = screen.getByAltText(/Logo Marvel/)
        expect(element).toBeInTheDocument()
    })
})
