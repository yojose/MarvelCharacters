
import React from "react";
import { render, screen } from '@testing-library/react';
import { Favorites } from '../pages/favorites/favorites';
import { MainPageLayout } from "../pages/layout/mainPageLayout"
import { BrowserRouter } from 'react-router-dom'


test("Favorites", async () => {
    render(<Favorites />)
    expect(screen.getByText(/test/i)).toBeInTheDocument()

});

// test("MainPageLayout", async () => {
//     render(
//     <BrowserRouter>
//         <MainPageLayout />
//     </BrowserRouter>)
// });