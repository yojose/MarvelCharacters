import React from "react";
import { render, screen } from '@testing-library/react';
import useApi from '../../hooks/useApi/useApi';
import Comic from '../../components/Comic/comicCatalog';
import { testDataCharacter } from "../../api/testDataCharacter";

const mockDataLoadReturn = { data: testDataCharacter.data, isloading: false, error: "" };
const mockDataUnloadReturn = { data: undefined, isloading: true, error: "" };

jest.mock('../../hooks/useApi/useApi', () => ({
    __esModule: true,
    default: jest.fn(() => 42)
}));

const mockUseApi = useApi as jest.Mock;

describe('comic catalog render', () => {
    test("Comic data CharacterResult[] render the list of comic", async () => {
        mockUseApi.mockImplementation(() => mockDataLoadReturn);
        render(<Comic id={"1017100"}/>);
        expect(screen.queryByTestId(/comic-section/)).toBeInTheDocument();
    });

    test("Comic data undefined not render the list of comic", async () => {
        mockUseApi.mockImplementation(() => mockDataUnloadReturn);
        render(<Comic id={"1017100"}/>);
        expect(screen.queryByTestId(/comic-section/)).not.toBeInTheDocument();
    });
    test("Comic id undefined not render the list of comic", async () => {
        mockUseApi.mockImplementation(() => mockDataUnloadReturn);
        
        render(<Comic id={undefined}/>);
        expect(screen.queryByTestId(/comic-section/)).not.toBeInTheDocument();
    });
})