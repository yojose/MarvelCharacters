
import React from "react";
import { render, screen, renderHook, act } from '@testing-library/react';
import useApi from '../hooks/useApi/useApi';
import {Character} from '../pages/character/character';
import { testDataCharactaersList } from "../api/testData";

/*
path: string, options: AxiosRequestConfig = defaultConfig

return data, isloading, error 
*/

jest.mock('../hooks/useApi/useApi');

const getCharacterArgs = {
    path: "/characters",
    optionAxios: {
        method: 'get',
        params: {
            limit: 50,
            offset: 0,
        }
    }
}

const mockUaeApi = {
    data: testDataCharactaersList,
    isloading: false,
    error: ""
};

describe('useApi', () => {
    
    test("Character test render article", async () => {
        render(<Character />)
        expect(screen.getByText(/article/i)).toBeInTheDocument()
        
      });

})