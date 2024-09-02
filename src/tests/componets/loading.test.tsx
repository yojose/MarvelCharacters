import React from "react";
import { render, screen } from '@testing-library/react';
import {Loader} from "../../components/loader/loader"



test("Comic data undefined not render the list of comic", async () => {
    render(<Loader/>);
    expect(screen.getByTestId(/loader/)).toBeInTheDocument();
});