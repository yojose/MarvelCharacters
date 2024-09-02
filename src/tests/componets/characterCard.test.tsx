
import React, { ReactNode } from "react";
import { render, screen } from '@testing-library/react';
import { CharacterCard } from '../../components/Cards/characterCard';
import { testDataCharacter } from "../../api/testDataCharacter";
import { CharacterCardContext } from "../../components/Cards/characterCard";
import { FavoritesContext } from "../../components/Contexts/favoritesContect";
import { UseCharacterCardContext } from "../../types/charactersTypes"
import { favoritesContextType } from "../../types/favoritesContextTypes"

const favoritesWithcharacter = {
    favorites: {
        value: {
            favorites: [1017100],
            setFavorites: jest.fn()
        } as favoritesContextType
    },
    characterCard: {
        value: { 
            character: testDataCharacter.data.results[0] 
        } as UseCharacterCardContext
    }
}
const favoritesNoCharacter = {
    favorites: {
        value: { favorites: [0], setFavorites: jest.fn() }
    },
    characterCard: {
        value: { character: testDataCharacter.data.results[0] }
    }
}

describe('CharacterCard render', () => {
    test("CharacterCard data CharacterResult[] render the character card", async () => {
        render(<CharacterCard character={testDataCharacter.data.results[0]} />);

        expect(screen.getByTestId(/character-card/)).toBeInTheDocument();
    });

    test("CharacterCard data undefined not render the character card", async () => {
        render(<CharacterCard character={undefined} />);

        expect(screen.queryByTestId(/character-card/)).not.toBeInTheDocument();
    });
})

/** custom providers render that extends regular render options with providerProps
 * use with FavoritesContext and CharacterCardContext context
*/

const customRender = (ui: ReactNode, providerProps: typeof favoritesWithcharacter) => {
    return render(
        <FavoritesContext.Provider {...providerProps.favorites}>
            <CharacterCardContext.Provider {...providerProps.characterCard}>
                {ui}
            </CharacterCardContext.Provider>
        </FavoritesContext.Provider >
        ,
    )
}

describe('CharacterCard.favorites render', () => {
    test("FavoritesContext and characterCard with data render the CharacterCard.favorites and show favorites icon like favorite", async () => {
        const providerProps = { ...favoritesWithcharacter };

        customRender(<CharacterCard.FavButton />, providerProps)


        const element=(screen.getByTestId("icon-fav"));
        expect(element).not.toHaveClass('icon-fav--empty');

        expect(screen.getByTestId(/character-car__fav/)).toBeInTheDocument();
    });

    test("Character is not a favorites. Render componnet and show CharacterCard.favorites icon like not favorite", async () => {
        const providerProps = { ...favoritesNoCharacter };

        customRender(<CharacterCard.FavButton />, providerProps )
        const element=(screen.getByTestId("icon-fav"));
        expect(element).toHaveClass('icon-fav--empty');

        expect(screen.getByTestId(/character-car__fav/)).toBeInTheDocument();
    });
})
