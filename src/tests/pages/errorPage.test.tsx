
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

const error={
    status: 404,
    statusText: "error status",
    data: {error:"error 404"}
};

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useRouteError: jest.fn(),
}));

describe('error render', () => {
    afterEach(cleanup);
    test("render error page", async () => {
        render(erroPageBrowser());
        screen.debug(undefined, 300000);
        expect(screen.getByText(/we have problems./)).toBeInTheDocument();
    });

    test("render error page with error", async () => {
        jest.spyOn(Router, 'useRouteError').mockReturnValue("error test");
        render(erroPageBrowser());
        screen.debug(undefined, 300000);
        expect(screen.queryByText('we have problems')).toBeInTheDocument();
    });
})
