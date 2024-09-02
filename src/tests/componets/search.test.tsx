import React from "react";
import { render, screen } from '@testing-library/react';
import SearchCharacters from '../../components/Search/searchCharacters';
import { CharactersContext } from "../../pages/characters/characters";
import { testDataCharactaersList } from "../../api/testData"

const datasWithCharacters = {
    value: testDataCharactaersList.data
}

const customRender = (ui: React.ReactNode, providerProps: typeof datasWithCharacters) => {
    return render(
        <CharactersContext.Provider {...providerProps}>
            {ui}
        </CharactersContext.Provider >
        ,
    )
}

describe('SearchCharacters', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    test("render search", async () => {
        const providerProps = { ...datasWithCharacters };
        customRender(<SearchCharacters onChange={jest.fn()} disable={false} />, providerProps);
        const element = screen.getByTestId(/searchInput/);
        expect(element).toBeInTheDocument();
    });

})