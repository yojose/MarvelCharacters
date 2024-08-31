
import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom"
import { MainPageLayout } from '../../pages/layout/mainPageLayout';

const mainPageLayoutBrowser = () => {
    return (
        <BrowserRouter>
            <MainPageLayout />
        </BrowserRouter>
    )
}

describe('Layout render', () => {
    test("render layout", async () => {
        render(mainPageLayoutBrowser());
        expect(screen.queryByTestId('main')).toBeInTheDocument();
    });
})
