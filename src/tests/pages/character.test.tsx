
import React from "react";
import { render, screen} from '@testing-library/react';
import useApi from '../../hooks/useApi/useApi';
import { Character } from '../../pages/character/character';
import { testDataCharacter } from "../../api/testDataCharacter";
import Router from 'react-router';

const mockDataLoadReturn = { data: testDataCharacter.data, isloading: false, error: "" };
const mockDataUnloadReturn = { data: undefined, isloading: true, error: "" };

jest.mock('../../hooks/useApi/useApi', () => ({
    __esModule: true,
    default: jest.fn()
}));

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useParams: jest.fn(),
}));

describe('Character', () => {
    //afterEach(cleanup)

    describe('Character render', () => {
        test("Character data CharacterResult[] render the character", async () => {
            jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1017100' });
            useApi.mockImplementation(() => mockDataLoadReturn);

            render(<Character />);
            expect(screen.queryByTestId('character__img')).toBeInTheDocument();
        });
    })

    describe('Character not render', () => {
        test("Character data CharacterResult[] no id not render the character", async () => {
            jest.spyOn(Router, 'useParams').mockReturnValue({ id: undefined });
            useApi.mockImplementation(() => mockDataLoadReturn);

            render(<Character />);
            expect(screen.queryByTestId('character__img')).not.toBeInTheDocument();
        })

        test("Character data CharacterResult[] isloading true not render the character", async () => {
            const mockDataLoadIsloadigTrueReturn = { ...mockDataLoadReturn, ...{ isLoading: true } };

            jest.spyOn(Router, 'useParams').mockReturnValue({ id: undefined });
            useApi.mockImplementation(() => mockDataLoadIsloadigTrueReturn);

            render(<Character />);
            expect(screen.queryByTestId('character__img')).not.toBeInTheDocument();
        })

        test("Character data undefined render not render the character ", async () => {
            jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1017100' });
            useApi.mockImplementation(() => mockDataUnloadReturn);

            render(<Character />);
            expect(screen.queryByTestId('character__img')).not.toBeInTheDocument();
        })

        test("Character data undefined and id undefined render not render the character ", async () => {
            jest.spyOn(Router, 'useParams').mockReturnValue({ id: undefined });
            useApi.mockImplementation(() => mockDataUnloadReturn);

            render(<Character />);
            expect(screen.queryByTestId('character__img')).not.toBeInTheDocument();
        })
    })
})