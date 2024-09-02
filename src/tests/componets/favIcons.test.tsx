import React from "react";
import { render } from '@testing-library/react';
import {FavoriteIcon} from '../../components/favoritesIcon/favoritesIcon';

describe('FavoriteIcon', () => {
    test("FavoriteIcon data CharacterResult[] render the list of comic", async () => {
        const {container}=render(<FavoriteIcon isFavorite={true}/>);
        const element = container.firstChild;
        expect(element).not.toHaveClass('icon-fav--empty');
    });

    test("Comic data undefined not render the list of comic", async () => {
        const {container}=render(<FavoriteIcon isFavorite={false}/>);
        const element = container.firstChild;
        expect(element).toHaveClass('icon-fav--empty');
    });
})