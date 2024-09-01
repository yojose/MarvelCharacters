
import React from "react";
import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom"
import ErrorPage from '../../pages/errorPage/errorPage';
import Router from 'react-router-dom';

const erroPageBrowser = () => {
    return (
        <BrowserRouter>
            <ErrorPage />
        </BrowserRouter>
    )
}

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useRouteError: jest.fn(),
}));

describe('error render', () => {
    afterEach(cleanup);
    test("render error page", async () => {
        render(erroPageBrowser());
        expect(screen.getByText(/we have problems./)).toBeInTheDocument();
    });

    test("render error page with error", async () => {
        jest.spyOn(Router, 'useRouteError').mockReturnValue("error test");
        render(erroPageBrowser());
        expect(screen.getByText(/error test/)).toBeInTheDocument();
    });
})
