
import React from "react";
import { render, screen } from '@testing-library/react';
import { ComicCard } from '../../components/Cards/comicCard';
import { ComicCardContext } from "../../components/Cards/comicCard";
import { testDataComicList } from "../../api/testDataComic";
import {UseComicCardContext} from  "../../types/comicTypes"

describe('ComicCard render', () => {
    test("ComicCard data as ComicsResult. Render the comic card", async () => {
        render(<ComicCard comic={testDataComicList.data.results[0]} />);
        expect(screen.getByTestId(/comic-card/)).toBeInTheDocument();
    });

    test("CharacterCard data undefined not render the character card", async () => {
        render(<ComicCard comic={undefined} />);
        expect(screen.queryByTestId(/comic-card/)).not.toBeInTheDocument();
    });
})

/** custom providers render that extends regular render options with providerProps
 * use with FavoritesContext and CharacterCardContext context
*/

const customRender = (ui:React.ReactNode, providerProps:UseComicCardContext) => {
    return render(
            <ComicCardContext.Provider value={providerProps}>
                {ui}
            </ComicCardContext.Provider>
        ,
    )
}

describe('ComicCard.Year render', () => {
    test("render the year of onsaleDate when there exist", async () => {
        const providerProps:UseComicCardContext = {comic:testDataComicList.data.results[0]};
        customRender(<ComicCard.Year />, providerProps )

        const element = screen.getByText(/2008/);
        expect(element).not.toBeUndefined();
    });
})
