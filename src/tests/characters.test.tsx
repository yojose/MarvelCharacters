import React from "react";
import { render, screen, cleanup, renderHook, act } from '@testing-library/react';
import { Characters } from '../pages/characters/characters';
import { testDataCharactaersList } from "../api/testData"
import Router from 'react-router';


//useApi
//usefavorites
//search

const mockDataLoadReturn = { data: testDataCharactaersList.data, isloading: false, error: "" };
const mockDataUnloadReturn = { data: undefined, isloading: true, error: "" };

jest.mock('../hooks/useApi/useApi', () => ({
    __esModule: true,
    default: jest.fn()
}));

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useParams: jest.fn(),
}));