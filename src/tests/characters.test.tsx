import React from "react";
import { render, screen, shallow, cleanup, renderHook, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Characters } from '../pages/characters/characters';
import { testDataCharactaersList } from "../api/testData"
import useApi from '../hooks/useApi/useApi';
import useFavoritesFilter from "../hooks/filters/useFavoritesFilter";
import { BrowserRouter } from "react-router-dom"


//useApi
//usefavorites
//search

const mockDataLoadReturn = { data: testDataCharactaersList.data, isloading: false, error: "" };
const mockDataUnloadReturn = { data: undefined, isloading: true, error: "" };
const favoritesUse = { favoritesDataFiltered: testDataCharactaersList.data, isFavoritesFiltered: true, notFilter: jest.fn(() => { }) }

const charactersBrowser = () => {
    return (
        <BrowserRouter>
            <Characters />
        </BrowserRouter>
    )
}

jest.mock('../hooks/useApi/useApi', () => ({
    __esModule: true,
    default: jest.fn()
}));

jest.mock('../hooks/filters/useFavoritesFilter', () => ({
    __esModule: true,
    default: jest.fn()
}));

describe('Characters', () => {
    describe('Characters render', () => {
        test("Characters data CharacterResult[] render the characters list", async () => {
            useApi.mockImplementation(() => mockDataLoadReturn);
            useFavoritesFilter.mockImplementation(() => favoritesUse);

            render(charactersBrowser());
            
            expect(screen.queryByTestId('characters')).toBeInTheDocument();
        });
        test("Characters search render the characters list", async () => {
            useApi.mockImplementation(() => mockDataLoadReturn);
            useFavoritesFilter.mockImplementation(() => favoritesUse);

            render(charactersBrowser());

            const searchInput = screen.getByTestId('searchInput');
            act(() => userEvent.type(searchInput, 'Man'));
            expect(screen.queryByTestId('characters')).toBeInTheDocument();

            screen.debug(screen.getByTestId("search"));
        });
    })
    describe('Character not render', () => {
        test("Character data CharacterResult[] isloading true not render the characters list", async () => {
            const mockDataLoadIsloadigTrueReturn = { ...mockDataLoadReturn, ...{ isLoading: true } };

            useApi.mockImplementation(() => mockDataLoadIsloadigTrueReturn);
            useFavoritesFilter.mockImplementation(() => favoritesUse);

            render(charactersBrowser());
            expect(screen.queryByTestId('character__img')).not.toBeInTheDocument();
        })

        test("Character data undefined render not render the characters list ", async () => {
            useApi.mockImplementation(() => mockDataUnloadReturn);
            useFavoritesFilter.mockImplementation(() => favoritesUse);

            render(charactersBrowser());
            expect(screen.queryByTestId('character__img')).not.toBeInTheDocument();
        })

        test("Character data undefined and id undefined render not render the characters list ", async () => {
            useApi.mockImplementation(() => mockDataUnloadReturn);
            useFavoritesFilter.mockImplementation(() => favoritesUse);

            render(charactersBrowser());
            expect(screen.queryByTestId('character__img')).not.toBeInTheDocument();
        })
    })
})